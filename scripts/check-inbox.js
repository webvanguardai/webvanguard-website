#!/usr/bin/env node
'use strict';

const Imap = require('imap');
const { simpleParser } = require('mailparser');
const https = require('https');

const config = {
  user: 'hello@webvanguard.co',
  password: 'LpSmizTYUmXL',
  host: 'imappro.zoho.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
};

const TELEGRAM_TOKEN_FILE = '/home/javibeat/.openclaw/workspace/.telegram-token';
const JAVI_CHAT_ID = '7606887925';

// Read telegram token from openclaw config
let telegramToken = null;
try {
  const fs = require('fs');
  telegramToken = process.env.TELEGRAM_BOT_TOKEN || null;
  if (!telegramToken) {
    const raw = fs.readFileSync('/home/javibeat/.openclaw/openclaw.json', 'utf8');
    const m = raw.match(/"botToken"\s*:\s*"([^"]+)"/);
    if (m) telegramToken = m[1];
  }
} catch(e) {}

function sendTelegram(chatId, text) {
  return new Promise((resolve, reject) => {
    if (!telegramToken) {
      console.log(`[TELEGRAM] Would send to ${chatId}: ${text}`);
      resolve();
      return;
    }
    const body = JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' });
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${telegramToken}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        if (res.statusCode === 200) resolve(JSON.parse(data));
        else reject(new Error(`Telegram API error: ${res.statusCode} ${data}`));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function classifyEmail(from, subject, text, html) {
  const content = [from, subject, text || '', html || ''].join(' ').toLowerCase();
  
  const isBeatLabs = /beatlabs\.ae|info@beatlabs\.ae|wio\.io|wiobusiness|beatlabs/i.test(content);
  const isNibango = /nibango\.com|noreply@nibango\.com|nibango/i.test(content);
  const isWebVanguard = /webvanguard\.co|web vanguard|client inquiry|web design|website proposal|pricing|landing page|redesign|portfolio site|agency/i.test(content);
  const isSpam = /unsubscribe|newsletter|no.reply|noreply|notification|automated|do not reply|marketing|promo|offer|discount|sale |deal |coupon|linkedin|twitter|facebook|instagram|youtube|spotify/i.test(content);

  if (isBeatLabs) return 'beatlabs';
  if (isNibango) return 'nibango';
  if (isWebVanguard) return 'webvanguard';
  if (isSpam) return 'spam';
  return 'unclear';
}

function ensureFolder(imap, folderName) {
  return new Promise((resolve, reject) => {
    imap.getBoxes((err, boxes) => {
      if (err) return reject(err);
      if (boxes[folderName]) return resolve();
      imap.addBox(folderName, (err2) => {
        if (err2) return reject(err2);
        resolve();
      });
    });
  });
}

function moveMessage(imap, uid, targetFolder) {
  return new Promise((resolve, reject) => {
    imap.copy(uid, targetFolder, (err) => {
      if (err) return reject(err);
      imap.addFlags(uid, ['\\Deleted'], (err2) => {
        if (err2) return reject(err2);
        imap.expunge((err3) => {
          if (err3) return reject(err3);
          resolve();
        });
      });
    });
  });
}

function deleteMessage(imap, uid) {
  return new Promise((resolve, reject) => {
    imap.addFlags(uid, ['\\Deleted'], (err) => {
      if (err) return reject(err);
      imap.expunge((err2) => {
        if (err2) return reject(err2);
        resolve();
      });
    });
  });
}

async function processEmails() {
  return new Promise((resolve, reject) => {
    const imap = new Imap(config);

    imap.once('error', reject);
    imap.once('end', resolve);

    imap.once('ready', () => {
      imap.openBox('INBOX', false, async (err, box) => {
        if (err) { imap.end(); return reject(err); }

        imap.search(['UNSEEN'], async (err, uids) => {
          if (err) { imap.end(); return reject(err); }

          if (!uids || uids.length === 0) {
            console.log('No unseen emails.');
            imap.end();
            return;
          }

          console.log(`Found ${uids.length} unseen email(s).`);

          // Ensure folders exist
          try {
            await ensureFolder(imap, 'BeatLabs');
            await ensureFolder(imap, 'Nibango');
            await ensureFolder(imap, 'WebVanguard');
          } catch(e) {
            console.error('Folder creation error:', e.message);
          }

          const fetch = imap.fetch(uids, { bodies: '', markSeen: false });
          const emails = [];

          fetch.on('message', (msg, seqno) => {
            let uid = null;
            let buffer = '';
            
            msg.on('attributes', (attrs) => { uid = attrs.uid; });
            msg.on('body', (stream) => {
              stream.on('data', (chunk) => { buffer += chunk.toString('utf8'); });
            });
            msg.once('end', () => {
              emails.push({ uid, buffer });
            });
          });

          fetch.once('error', (err) => console.error('Fetch error:', err));
          fetch.once('end', async () => {
            // Process each email sequentially
            for (const { uid, buffer } of emails) {
              try {
                const parsed = await simpleParser(buffer);
                const from = parsed.from?.text || '';
                const subject = parsed.subject || '(no subject)';
                const text = parsed.text || '';
                const html = parsed.html || '';

                console.log(`\nProcessing UID ${uid}: "${subject}" from ${from}`);

                const category = classifyEmail(from, subject, text, html);
                console.log(`  → Category: ${category}`);

                if (category === 'beatlabs') {
                  await moveMessage(imap, uid, 'BeatLabs');
                  console.log('  → Moved to BeatLabs (no notification)');
                } else if (category === 'nibango') {
                  await moveMessage(imap, uid, 'Nibango');
                  const msg = `📬 Nibango email from ${from}: ${subject}`;
                  await sendTelegram(JAVI_CHAT_ID, msg);
                  console.log('  → Moved to Nibango + notified Javi');
                } else if (category === 'webvanguard') {
                  await moveMessage(imap, uid, 'WebVanguard');
                  // Build 1-line summary from first 200 chars of text
                  const snippet = text.replace(/\s+/g, ' ').trim().substring(0, 200);
                  const msg = `🕸️ Web Vanguard lead from ${from}: ${subject} — ${snippet}`;
                  await sendTelegram(JAVI_CHAT_ID, msg);
                  console.log('  → Moved to WebVanguard + notified Javi');
                } else if (category === 'spam') {
                  await deleteMessage(imap, uid);
                  console.log('  → Deleted silently (spam/newsletter)');
                } else {
                  // unclear
                  const msg = `❓ Unknown email in inbox — subject: "${subject}" from: ${from}\n\nWhat should I do with this?`;
                  await sendTelegram(JAVI_CHAT_ID, msg);
                  console.log('  → Unclear, notified Javi');
                }
              } catch (e) {
                console.error(`Error processing UID ${uid}:`, e.message);
              }
            }

            imap.end();
          });
        });
      });
    });

    imap.connect();
  });
}

processEmails()
  .then(() => { console.log('\nDone.'); process.exit(0); })
  .catch((err) => { console.error('Fatal error:', err); process.exit(1); });
