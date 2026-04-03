const Imap = require('imap');
const { simpleParser } = require('mailparser');

const config = {
  user: 'hello@webvanguard.co',
  password: 'LpSmizTYUmXL',
  host: 'imappro.zoho.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  authTimeout: 15000,
  connTimeout: 20000
};

const imap = new Imap(config);

function openBox(boxName, readOnly) {
  return new Promise((resolve, reject) => {
    imap.openBox(boxName, readOnly, (err, box) => {
      if (err) reject(err); else resolve(box);
    });
  });
}

function searchUnseen() {
  return new Promise((resolve, reject) => {
    imap.search(['UNSEEN'], (err, results) => {
      if (err) reject(err); else resolve(results);
    });
  });
}

function fetchEmails(uids) {
  return new Promise((resolve, reject) => {
    if (!uids || uids.length === 0) return resolve([]);
    const fetch = imap.fetch(uids, { bodies: '', markSeen: false });
    const emails = [];
    fetch.on('message', (msg, seqno) => {
      let uid;
      const chunks = [];
      msg.on('body', (stream) => {
        stream.on('data', d => chunks.push(d));
      });
      msg.once('attributes', (attrs) => { uid = attrs.uid; });
      msg.once('end', () => {
        const raw = Buffer.concat(chunks);
        emails.push({ uid, raw });
      });
    });
    fetch.once('error', reject);
    fetch.once('end', () => resolve(emails));
  });
}

function moveEmail(uid, destFolder) {
  return new Promise((resolve, reject) => {
    imap.copy(uid, destFolder, (err) => {
      if (err) return reject(new Error('Copy to ' + destFolder + ' failed: ' + err.message));
      imap.addFlags(uid, ['\\Deleted'], (err2) => {
        if (err2) return reject(new Error('Flag deleted failed: ' + err2.message));
        resolve();
      });
    });
  });
}

function deleteEmail(uid) {
  return new Promise((resolve, reject) => {
    imap.addFlags(uid, ['\\Deleted'], (err) => {
      if (err) reject(err); else resolve();
    });
  });
}

function moveToSpam(uid) {
  return new Promise((resolve, reject) => {
    imap.copy(uid, 'Spam', (err) => {
      if (err) {
        // Try 'Junk' as alternative
        imap.copy(uid, 'Junk', (err2) => {
          if (err2) {
            // Just delete if no spam folder
            imap.addFlags(uid, ['\\Deleted'], (err3) => {
              if (err3) reject(err3); else resolve();
            });
          } else {
            imap.addFlags(uid, ['\\Deleted'], (err3) => {
              if (err3) reject(err3); else resolve();
            });
          }
        });
      } else {
        imap.addFlags(uid, ['\\Deleted'], (err2) => {
          if (err2) reject(err2); else resolve();
        });
      }
    });
  });
}

function expunge() {
  return new Promise((resolve, reject) => {
    imap.expunge((err) => {
      if (err) reject(err); else resolve();
    });
  });
}

function classifyEmail(parsed) {
  const from = (parsed.from?.text || '').toLowerCase();
  const to = (parsed.to?.text || '').toLowerCase();
  const subject = (parsed.subject || '').toLowerCase();
  const bodyText = (parsed.text || '').toLowerCase();
  const bodyHtml = (parsed.html || '').toLowerCase();
  const body = bodyText + ' ' + bodyHtml;

  // 1. DMARC / postmaster / mailer-daemon
  if (from.includes('dmarc') || from.includes('noreply-dmarc') || from.includes('postmaster') || from.includes('mailer-daemon') ||
      subject.includes('dmarc') || subject.includes('report domain')) {
    return { action: 'delete', reason: 'DMARC/postmaster' };
  }

  // 2. Dev folder (developer@beatlabs.ae)
  if (from.includes('developer@beatlabs.ae') || to.includes('developer@beatlabs.ae')) {
    return { action: 'move', folder: 'Dev', notify: true, notifyType: 'dev', reason: 'Dev email' };
  }

  // 3. BeatLabs
  if (from.includes('beatlabs.ae') || from.includes('info@beatlabs.ae') || from.includes('wio.io') ||
      subject.includes('beatlabs') || subject.includes('wiobusiness') || subject.includes('wio business') ||
      body.includes('beatlabs') || body.includes('wio.io') || body.includes('wiobusiness') || body.includes('wio business')) {
    return { action: 'move', folder: 'BeatLabs', notify: false, reason: 'BeatLabs' };
  }

  // 4. Nibango
  if (from.includes('nibango.com') || from.includes('noreply@nibango') ||
      subject.includes('nibango') || body.includes('nibango')) {
    return { action: 'move', folder: 'Nibango', notify: true, notifyType: 'nibango', reason: 'Nibango' };
  }

  // 5. Web Vanguard / web design related
  if (subject.includes('web vanguard') || subject.includes('webvanguard') ||
      body.includes('web vanguard') || body.includes('webvanguard') ||
      subject.includes('web design') || subject.includes('website') || subject.includes('proposal') ||
      subject.includes('pricing') || subject.includes('quote') || subject.includes('inquiry') ||
      (body.includes('web design') && !from.includes('noreply')) ||
      (body.includes('website') && !from.includes('noreply') && !from.includes('notification'))) {
    // Extra check: make sure it's not automated
    if (!from.includes('noreply') && !from.includes('no-reply') && !from.includes('notifications') && !from.includes('donotreply')) {
      return { action: 'move', folder: 'WebVanguard', notify: true, notifyType: 'webvanguard', reason: 'Web Vanguard lead' };
    }
  }

  // 6. Spam/newsletter/automated
  const spamSignals = [
    'noreply', 'no-reply', 'donotreply', 'do-not-reply', 'notifications@', 'newsletter', 'unsubscribe',
    'billing@', 'invoice@', 'verify@', 'verification@', 'bounce', 'delivery receipt',
    'google postmaster', 'postmaster@', 'automated', 'system notification'
  ];
  for (const signal of spamSignals) {
    if (from.includes(signal) || subject.includes(signal)) {
      return { action: 'delete', reason: 'spam/automated: ' + signal };
    }
  }
  if (body.includes('unsubscribe') && (from.includes('noreply') || from.includes('no-reply') || from.includes('newsletter'))) {
    return { action: 'delete', reason: 'newsletter' };
  }

  // 7. Unclear → spam folder
  return { action: 'spam', reason: 'unclear' };
}

const results = [];

imap.once('ready', async () => {
  try {
    await openBox('INBOX', false);
    const uids = await searchUnseen();

    if (!uids || uids.length === 0) {
      results.push({ status: 'empty' });
      imap.end();
      return;
    }

    const rawEmails = await fetchEmails(uids);
    const processed = [];

    for (const { uid, raw } of rawEmails) {
      try {
        const parsed = await simpleParser(raw);
        const classification = classifyEmail(parsed);
        const sender = parsed.from?.text || 'unknown';
        const subject = parsed.subject || '(no subject)';
        const bodyText = (parsed.text || '').substring(0, 200);

        processed.push({ uid, sender, subject, bodyText, classification });
      } catch (e) {
        processed.push({ uid, error: e.message });
      }
    }

    // Execute actions
    for (const email of processed) {
      if (email.error) continue;
      const { uid, classification, sender, subject, bodyText } = email;
      try {
        if (classification.action === 'delete') {
          await deleteEmail(uid);
          email.done = 'deleted';
        } else if (classification.action === 'move') {
          await moveEmail(uid, classification.folder);
          email.done = 'moved to ' + classification.folder;
        } else if (classification.action === 'spam') {
          await moveToSpam(uid);
          email.done = 'moved to Spam';
        }
      } catch (e) {
        email.actionError = e.message;
      }
    }

    await expunge();

    results.push({ status: 'done', emails: processed });
    imap.end();
  } catch (err) {
    results.push({ status: 'error', error: err.message });
    imap.end();
  }
});

imap.once('error', (err) => {
  results.push({ status: 'conn-error', error: err.message });
});

imap.once('end', () => {
  console.log(JSON.stringify(results, null, 2));
});

imap.connect();
