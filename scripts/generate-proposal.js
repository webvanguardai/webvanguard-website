#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const https = require('https')

const DEFAULT_INCLUDES = [
  'Custom responsive website (mobile-first)',
  'Contact form → direct to your email',
  'WhatsApp click-to-chat button',
  'Google Maps embed',
  'Full local SEO (title, meta, keywords)',
  'Google Analytics GA4',
  'Structured data (Google-ready)',
  'Fast load times — optimised for UAE mobile',
  '48h delivery from approval',
  'You own 100% of the code',
]

const PLANS = {
  starter: { name: 'Starter', price: 'AED 1,500', desc: '1-page landing · WhatsApp · Basic SEO' },
  launch:  { name: 'Launch',  price: 'AED 2,500', desc: 'Multi-page · Form · Full SEO · GA4' },
  growth:  { name: 'Growth',  price: 'AED 4,500', desc: 'Launch + Blog · 3 months support' },
  premium: { name: 'Premium', price: 'AED 8,000+', desc: 'Everything + Google Ads · Content strategy' },
}

function generateHTML(data) {
  const { businessName, sector, location, demoUrl, painPoints = [], plan = 'launch', customIncludes = [] } = data
  const selectedPlan = PLANS[plan] || PLANS.launch
  const includes = customIncludes.length ? customIncludes : DEFAULT_INCLUDES
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(demoUrl)}&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900`
  const date = new Date().toLocaleDateString('en-GB', {day:'numeric',month:'long',year:'numeric'})

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web Proposal — ${businessName} × Web Vanguard</title>
<meta name="robots" content="noindex">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0A0A0A;--surface:#111;--border:#1E1E1E;--accent:#D4956B;--text:#F5F5F5;--muted:#888}
body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;line-height:1.6}
.container{max-width:900px;margin:0 auto;padding:0 24px}
nav{padding:24px 0;border-bottom:1px solid var(--border)}
nav .container{display:flex;align-items:center;justify-content:space-between}
.logo{font-family:'Playfair Display',serif;font-size:18px;letter-spacing:.05em}
.logo span{color:var(--accent)}
.hero{padding:80px 0 60px}
.hero-label{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:20px}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,6vw,72px);font-weight:900;line-height:1.05;text-transform:uppercase;margin-bottom:24px}
.hero h1 em{font-style:italic;color:var(--accent);text-transform:none}
.hero-sub{font-size:17px;color:var(--muted);max-width:540px}
section{padding:60px 0;border-top:1px solid var(--border)}
.section-label{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:32px}
h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,40px);text-transform:uppercase;margin-bottom:32px}
h2 em{font-style:italic;color:var(--accent);text-transform:none}
.pain-list{display:flex;flex-direction:column;gap:16px}
.pain-item{display:flex;gap:16px;align-items:flex-start;padding:20px;border:1px solid var(--border)}
.pain-num{font-family:'Playfair Display',serif;font-size:32px;color:var(--border);font-weight:900;line-height:1;min-width:40px}
.pain-text{font-size:15px;color:var(--muted);padding-top:4px}
.demo-preview{border:1px solid var(--border);overflow:hidden;position:relative}
.demo-preview img{width:100%;display:block}
.demo-overlay{position:absolute;bottom:0;left:0;right:0;padding:20px 24px;background:linear-gradient(transparent,rgba(0,0,0,.9));display:flex;align-items:center;justify-content:space-between}
.demo-url{font-size:13px;color:var(--muted)}
.demo-link{font-size:13px;color:var(--accent);text-decoration:none;border:1px solid var(--accent);padding:6px 16px}
.includes-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:600px){.includes-grid{grid-template-columns:1fr}}
.include-item{display:flex;gap:12px;align-items:flex-start;padding:16px;border:1px solid var(--border)}
.include-check{color:var(--accent)}
.include-text{font-size:14px;color:var(--muted)}
.price-card{border:1px solid var(--accent);padding:40px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
.price-name{font-family:'Playfair Display',serif;font-size:28px}
.price-desc{font-size:14px;color:var(--muted);margin-top:6px}
.price-amount{font-family:'Playfair Display',serif;font-size:48px;color:var(--accent);font-weight:900;white-space:nowrap}
.price-note{font-size:12px;color:var(--muted);margin-top:16px}
.cta-section{text-align:center}
.cta-section p{color:var(--muted);margin-bottom:40px}
.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#000;padding:14px 28px;font-size:14px;font-weight:600;text-decoration:none;text-transform:uppercase;letter-spacing:.05em}
.btn-outline{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--border);color:var(--muted);padding:14px 28px;font-size:14px;text-decoration:none;text-transform:uppercase;letter-spacing:.05em}
footer{padding:32px 0;border-top:1px solid var(--border)}
footer .container{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
footer p{font-size:12px;color:var(--muted)}
footer a{color:var(--accent);text-decoration:none}
</style>
</head>
<body>
<nav><div class="container"><div class="logo">WEB<span>V</span></div><p style="font-size:12px;color:var(--muted)">Confidential proposal · ${date}</p></div></nav>
<section class="hero" style="border:none;padding-top:80px">
  <div class="container">
    <p class="hero-label">Web Proposal · ${sector} · ${location}</p>
    <h1>A website built<br>for <em>${businessName}.</em></h1>
    <p class="hero-sub">We already built it. Here's what your business could look like online — before you commit to anything.</p>
  </div>
</section>
${painPoints.length ? `<section><div class="container"><p class="section-label">What we noticed</p><div class="pain-list">${painPoints.map((p,i)=>`<div class="pain-item"><div class="pain-num">0${i+1}</div><p class="pain-text">${p}</p></div>`).join('')}</div></div></section>` : ''}
<section><div class="container"><h2>Your website,<br><em>ready to launch.</em></h2><div class="demo-preview"><img src="${screenshotUrl}" alt="${businessName} website concept" loading="lazy"><div class="demo-overlay"><span class="demo-url">${demoUrl.replace('https://','')}</span><a href="${demoUrl}" target="_blank" class="demo-link">View live →</a></div></div></div></section>
<section><div class="container"><h2>Everything<br><em>included.</em></h2><div class="includes-grid">${includes.map(item=>`<div class="include-item"><span class="include-check">✓</span><span class="include-text">${item}</span></div>`).join('')}</div></div></section>
<section><div class="container"><h2>Investment</h2><div class="price-card"><div><p class="price-name">${selectedPlan.name} Plan</p><p class="price-desc">${selectedPlan.desc}</p></div><p class="price-amount">${selectedPlan.price}</p></div><p class="price-note">50% on approval · 50% on delivery. You own the code and domain from day one.</p></div></section>
<section class="cta-section"><div class="container"><h2>Ready to put your<br><em>name on it?</em></h2><p>No tech jargon. No long contracts. Just a website that works.</p><div class="cta-buttons"><a href="https://wa.me/971501234567?text=Hi%2C%20I%20saw%20the%20proposal%20for%20${encodeURIComponent(businessName)}%20and%20I%27m%20interested" class="btn-primary">WhatsApp us →</a><a href="mailto:hello@webvanguard.co?subject=Proposal%20for%20${encodeURIComponent(businessName)}" class="btn-outline">Email us</a></div></div></section>
<footer><div class="container"><p>© Web Vanguard 2026 · <a href="https://webvanguard.co">webvanguard.co</a></p><p>hello@webvanguard.co</p></div></footer>
</body></html>`
}

function deployProposal(data) {
  const slug = `proposal-${data.businessName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const tmpDir = `/tmp/${slug}`
  
  console.log(`\n🏴 Generating proposal for: ${data.businessName}`)
  
  const html = generateHTML(data)
  if (fs.existsSync(tmpDir)) execSync(`rm -rf ${tmpDir}`)
  fs.mkdirSync(tmpDir, { recursive: true })
  fs.writeFileSync(path.join(tmpDir, 'index.html'), html)
  
  console.log(`📦 Creating GitHub repo: webvanguardai/${slug}`)
  execSync(`cd ${tmpDir} && git init && git checkout -b main && git add . && git commit -m "init: proposal for ${data.businessName}"`, { stdio: 'pipe' })
  
  // Delete repo if exists
  try { execSync(`gh repo delete webvanguardai/${slug} --yes 2>/dev/null`, { stdio: 'pipe' }) } catch(e) {}
  
  execSync(`gh repo create webvanguardai/${slug} --public --source=${tmpDir} --push`, { stdio: 'pipe' })
  
  // Enable GitHub Pages
  execSync(`curl -s -X POST -H "Authorization: token $(gh auth token)" -H "Accept: application/vnd.github+json" https://api.github.com/repos/webvanguardai/${slug}/pages -d '{"build_type":"legacy","source":{"branch":"main","path":"/"}}' > /dev/null`, { stdio: 'pipe', shell: true })
  
  const url = `https://webvanguardai.github.io/${slug}`
  console.log(`\n✅ Proposal: ${url}`)
  console.log(`   Demo: ${data.demoUrl}`)
  console.log(`   Plan: ${data.plan} · ${PLANS[data.plan]?.price}`)
  
  return url
}

// ─── RUN ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
let data

if (args.includes('--config')) {
  data = JSON.parse(fs.readFileSync(args[args.indexOf('--config') + 1], 'utf8'))
} else {
  // Default test: Gold Box Roastery
  data = {
    businessName: 'Gold Box Roastery',
    sector: 'Specialty Coffee',
    location: 'Dubai',
    demoUrl: 'https://qahwa-house.vercel.app',
    plan: 'launch',
    painPoints: [
      'Not appearing on Google for "specialty coffee Dubai" — competitors are capturing that traffic daily.',
      'No WhatsApp button — customers in Dubai expect instant messaging before ordering.',
      'Missing local SEO — Google can\'t properly index what you do or where you are.',
    ],
  }
}

deployProposal(data)
