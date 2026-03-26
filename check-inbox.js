const { ImapFlow } = require('/home/javibeat/.npm-global/lib/node_modules/imapflow');

const config = {
  server: 'imappro.zoho.com',
  port: 993,
  user: 'hello@webvanguard.co',
  password: 'LpSmizTYUmXL',
};

function classify(from, subject, body) {
  const text = `${from} ${subject} ${body}`.toLowerCase();
  if (text.includes('beatlabs') || text.includes('beatlabs.ae') || text.includes('info@beatlabs.ae')) return 'beatlabs';
  if (text.includes('nibango') || text.includes('nibango.com')) return 'nibango';
  const webVanguardKeywords = ['web vanguard', 'webvanguard', 'web design', 'website', 'proposal', 'pricing', 'quote', 'client inquiry'];
  if (webVanguardKeywords.some(k => text.includes(k))) return 'webvanguard';
  const spamKeywords = ['unsubscribe', 'newsletter', 'no-reply', 'noreply', 'notification', 'alert', 'automated', 'do not reply', 'donotreply', 'verify your email', 'confirm your', 'password reset', 'billing receipt', 'invoice from', 'your receipt'];
  if (spamKeywords.some(k => text.includes(k))) return 'spam';
  return 'unclear';
}

async function ensureFolder(client, name) {
  try {
    await client.mailboxCreate(name);
  } catch (e) {
    // already exists
  }
}

async function run() {
  const client = new ImapFlow({
    host: config.server,
    port: config.port,
    secure: true,
    auth: { user: config.user, pass: config.password },
    logger: false,
  });

  await client.connect();

  const results = [];

  await client.mailboxOpen('INBOX');
  const msgs = [];

  for await (const msg of client.fetch({ seen: false }, { envelope: true, bodyStructure: true, source: true })) {
    msgs.push(msg);
  }

  if (msgs.length === 0) {
    await client.logout();
    console.log(JSON.stringify({ count: 0, emails: [] }));
    return;
  }

  // Ensure folders exist
  await ensureFolder(client, 'BeatLabs');
  await ensureFolder(client, 'Nibango');
  await ensureFolder(client, 'WebVanguard');

  for (const msg of msgs) {
    const from = msg.envelope.from?.[0] ? `${msg.envelope.from[0].name || ''} <${msg.envelope.from[0].address || ''}>` : '';
    const subject = msg.envelope.subject || '(no subject)';
    const rawSource = msg.source ? msg.source.toString('utf8') : '';
    // Extract plain text body (rough)
    const bodyMatch = rawSource.match(/\r?\n\r?\n([\s\S]+)/);
    const body = bodyMatch ? bodyMatch[1].substring(0, 500) : '';

    const category = classify(from, subject, body);

    let destFolder = null;
    let action = category;

    if (category === 'beatlabs') destFolder = 'BeatLabs';
    else if (category === 'nibango') destFolder = 'Nibango';
    else if (category === 'webvanguard') destFolder = 'WebVanguard';

    if (destFolder) {
      await client.messageMove(msg.uid, destFolder, { uid: true });
    } else if (category === 'spam') {
      await client.messageDelete(msg.uid, { uid: true });
    }
    // unclear: leave in inbox, will notify

    results.push({ from, subject, category, body: body.substring(0, 200).replace(/\n/g, ' ').trim() });
  }

  await client.logout();
  console.log(JSON.stringify({ count: msgs.length, emails: results }));
}

run().catch(e => {
  console.error(JSON.stringify({ error: e.message }));
  process.exit(1);
});
