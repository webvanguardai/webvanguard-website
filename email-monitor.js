const Imap = require('imap');
const { simpleParser } = require('mailparser');

const config = {
  user: 'hello@webvanguard.co',
  password: 'LpSmizTYUmXL',
  host: 'imappro.zoho.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
};

function openBox(imap, boxName, readOnly = false) {
  return new Promise((resolve, reject) => {
    imap.openBox(boxName, readOnly, (err, box) => {
      if (err) reject(err); else resolve(box);
    });
  });
}

function searchUnseen(imap) {
  return new Promise((resolve, reject) => {
    imap.search(['UNSEEN'], (err, results) => {
      if (err) reject(err); else resolve(results);
    });
  });
}

function fetchEmails(imap, uids) {
  return new Promise((resolve, reject) => {
    if (!uids || uids.length === 0) return resolve([]);
    const f = imap.fetch(uids, { bodies: '', markSeen: false });
    const emails = [];
    f.on('message', (msg, seqno) => {
      let uid = null;
      let rawBuf = [];
      msg.on('attributes', attrs => { uid = attrs.uid; });
      msg.on('body', stream => {
        stream.on('data', chunk => rawBuf.push(chunk));
      });
      msg.once('end', () => {
        emails.push({ uid, raw: Buffer.concat(rawBuf) });
      });
    });
    f.once('error', reject);
    f.once('end', () => resolve(emails));
  });
}

function moveEmail(imap, uid, targetFolder) {
  return new Promise((resolve, reject) => {
    imap.move(uid, targetFolder, (err) => {
      if (err) reject(err); else resolve();
    });
  });
}

function deleteEmail(imap, uid) {
  return new Promise((resolve, reject) => {
    imap.addFlags(uid, '\\Deleted', (err) => {
      if (err) return reject(err);
      imap.expunge([uid], (err2) => {
        if (err2) reject(err2); else resolve();
      });
    });
  });
}

function classifyEmail(parsed) {
  const from = (parsed.from?.text || '').toLowerCase();
  const to = (parsed.to?.text || '').toLowerCase();
  const subject = (parsed.subject || '').toLowerCase();
  const text = (parsed.text || '').toLowerCase();
  const html = (parsed.html || '').toLowerCase();
  const body = text + ' ' + html;

  // 1. DMARC / system reports
  if (
    from.includes('dmarc') || from.includes('noreply-dmarc') ||
    from.includes('postmaster') || from.includes('mailer-daemon') ||
    subject.includes('dmarc') || subject.includes('report domain')
  ) {
    return { action: 'delete', reason: 'DMARC/system' };
  }

  // 2. Dev email
  if (from.includes('developer@beatlabs.ae') || to.includes('developer@beatlabs.ae')) {
    return { action: 'move', folder: 'Dev', notify: true, notifyType: 'dev' };
  }

  // 3. BeatLabs related
  if (
    from.includes('beatlabs.ae') || from.includes('info@beatlabs.ae') ||
    from.includes('wio.io') || from.includes('wiobusiness') ||
    body.includes('beatlabs') || body.includes('wio.io') || body.includes('wiobusiness') ||
    subject.includes('beatlabs') || subject.includes('wio.io')
  ) {
    return { action: 'move', folder: 'BeatLabs', notify: false };
  }

  // 4. Nibango related
  if (
    from.includes('nibango.com') || from.includes('noreply@nibango.com') ||
    body.includes('nibango') || subject.includes('nibango')
  ) {
    return { action: 'move', folder: 'Nibango', notify: true, notifyType: 'nibango' };
  }

  // 5. Web Vanguard / client inquiry
  const webVanguardKeywords = [
    'web vanguard', 'webvanguard', 'client inquiry', 'proposal', 'pricing',
    'web design', 'website design', 'quote', 'project inquiry', 'design service'
  ];
  if (webVanguardKeywords.some(kw => subject.includes(kw) || body.includes(kw))) {
    return { action: 'move', folder: 'WebVanguard', notify: true, notifyType: 'webvanguard' };
  }

  // 6. Spam/newsletter/automated
  const spamIndicators = [
    'unsubscribe', 'noreply', 'no-reply', 'donotreply', 'do-not-reply',
    'newsletter', 'delivery receipt', 'billing', 'verification code',
    'bounce', 'google postmaster', 'automated', 'system notification',
    'auto-generated', 'auto generated', 'subscription'
  ];
  if (spamIndicators.some(kw => from.includes(kw) || subject.includes(kw))) {
    return { action: 'delete', reason: 'spam/automated' };
  }

  // 7. Unclear → Spam folder
  return { action: 'move', folder: 'Spam', notify: false };
}

async function sendTelegram(chatId, message) {
  const https = require('https');
  // Read token from environment or known location
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.log('No TELEGRAM_BOT_TOKEN, skipping notification:', message);
    return;
  }
  const body = JSON.stringify({ chat_id: chatId, text: message });
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${token}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => { console.log('Telegram response:', data); resolve(); });
    });
    req.on('error', (e) => { console.error('Telegram error:', e); resolve(); });
    req.write(body);
    req.end();
  });
}

async function main() {
  const imap = new Imap(config);
  
  const results = [];

  await new Promise((resolve, reject) => {
    imap.once('ready', resolve);
    imap.once('error', reject);
    imap.connect();
  });

  console.log('Connected to IMAP');

  await openBox(imap, 'INBOX', false);
  const unseenUids = await searchUnseen(imap);
  console.log('Unseen UIDs:', unseenUids);

  if (unseenUids.length === 0) {
    console.log('No new emails.');
    imap.end();
    return;
  }

  const emails = await fetchEmails(imap, unseenUids);
  console.log('Fetched', emails.length, 'emails');

  for (const emailObj of emails) {
    let parsed;
    try {
      parsed = await simpleParser(emailObj.raw);
    } catch (e) {
      console.error('Parse error for uid', emailObj.uid, e);
      continue;
    }

    const from = parsed.from?.text || 'unknown';
    const subject = parsed.subject || '(no subject)';
    const classification = classifyEmail(parsed);

    console.log(`UID ${emailObj.uid}: FROM="${from}" SUBJECT="${subject}" => ${JSON.stringify(classification)}`);

    if (classification.action === 'delete') {
      try {
        await deleteEmail(imap, emailObj.uid);
        console.log(`Deleted UID ${emailObj.uid}`);
      } catch (e) {
        console.error('Delete error:', e);
      }
    } else if (classification.action === 'move') {
      try {
        await moveEmail(imap, emailObj.uid, classification.folder);
        console.log(`Moved UID ${emailObj.uid} to ${classification.folder}`);
        results.push({ uid: emailObj.uid, from, subject, folder: classification.folder, notify: classification.notify, notifyType: classification.notifyType, parsed });
      } catch (e) {
        console.error(`Move error (${classification.folder}):`, e.message);
        // Try to create folder if it doesn't exist
        results.push({ uid: emailObj.uid, from, subject, folder: classification.folder, notify: classification.notify, notifyType: classification.notifyType, parsed, moveError: e.message });
      }
    }
  }

  imap.end();
  
  // Output results as JSON for notification step
  console.log('RESULTS_JSON:' + JSON.stringify(results));
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
