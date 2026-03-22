# MEMORY.md

## Identity & tone
- User: **Javibeat** (lives in **Dubai**, timezone **Asia/Dubai**).
- From: **Mallorca**.
- Profession/interests: **DJ**, likes **photography** (<https://estrela.photo>), and building **websites, apps**.
- Assistant: **Claude** — CEO of **Web Vanguard**. Signature emoji **🏴**.
- Preferred communication: **calm but sharp, creative, honest, no bullshit** + a touch of **dry humor** when it fits.
- Language: **Spanish preferred** by default.

## Web Vanguard — Status (2026-03-22)
- **Website LIVE:** https://webvanguard.vercel.app
- **Repo:** github.com/webvanguardai/webvanguard-website
- **Stack:** Next.js 14, Tailwind CSS, Framer Motion, TypeScript
- **Deploy:** Vercel (auto-deploy from GitHub)
- **Local path:** /home/javibeat/.openclaw/workspace/webvanguard/
- **Design:** Dark (#0A0A0A) + warm copper accent (#D4956B). Editorial, bold, staggered layouts. Playfair Display serif + Inter Tight sans. Canvas animated grid hero, glitch text, corner brackets.
- **SEO:** JSON-LD structured data, OpenGraph, Twitter cards, 15+ keywords, canonical URL

## Business Plan — Next Steps
1. ✅ Portfolio website v3 live (copper palette)
2. ⬜ Buy domain webvanguard.ai (Cloudflare)
3. ⬜ Set up email hello@webvanguard.ai (Zoho free)
4. ✅ Build demo sites for potential clients → deploy to Vercel → share link
5. ⬜ Client accepts → update with real data → add to portfolio
6. ⬜ Repeat. Never stop. Target: 6 sites this week.

## Client Sites Pipeline
- ✅ **01 Lumière Wellness Studio** — luxury spa Dubai Marina → https://lumiere-wellness.vercel.app | proposal: webvanguardai.github.io/proposal-lumiere-wellness
- ✅ **02 Apex Properties Dubai** — luxury real estate → https://apex-properties.vercel.app | proposal: webvanguardai.github.io/proposal-apex-properties
- ✅ **03 Qahwa House** — specialty coffee roastery → https://qahwa-house.vercel.app | proposal: webvanguardai.github.io/proposal-qahwa-house
- ✅ **04 Zafran Barber** — premium barbershop DIFC → https://zafran-barber.vercel.app | proposal: webvanguardai.github.io/proposal-zafran-barber
- ✅ **05 Lumina Lens Studio** — photography studio → https://lumina-lens-six.vercel.app | proposal: webvanguardai.github.io/proposal-lumina-lens
- ✅ **06 Levant & Co.** — Lebanese fine dining → https://levant-co.vercel.app | proposal: webvanguardai.github.io/proposal-levant-co
- Portfolio: https://webvanguard.vercel.app (all 6 live)

## Standard Deliverables (every client site)
Each site must include ALL of the following before deploy:
- ✅ Responsive design (mobile-first)
- ✅ Functional contact form (Formspree — no backend needed)
- ✅ WhatsApp floating button (click-to-chat)
- ✅ Google Maps embed (for physical businesses)
- ✅ Full SEO: title, meta description, canonical, keywords (Dubai-local)
- ✅ AI SEO: llms.txt file + structured data JSON-LD (schema.org LocalBusiness)
- ✅ OpenGraph tags (og:title, og:description, og:image, og:url)
- ✅ Twitter/X card meta tags
- ✅ Favicon (generated or SVG)
- ✅ Google Analytics GA4 embed (gtag.js)
- ✅ robots.txt + sitemap.xml
- ✅ All Unsplash URLs verified 200 before deploy (no 404s)
- ✅ next.config.mjs with images.remotePatterns for unsplash

## Pricing Strategy
| Plan | Price (AED) | What's included |
|------|-------------|-----------------|
| Launch | 2,500 | Web + form + WhatsApp + SEO basic |
| Growth | 4,500 | All + Analytics + 3 months support |
| Premium | 8,000+ | All + content strategy + Google Ads setup |

## Sales Pitch
"We already built your website. You just need to put your name on it."
- Show them the demo live URL
- Explain: form captures leads → goes to their email
- Explain: WhatsApp button → direct customer contact
- Explain: SEO → Google will find them
- Focus on RESULTS not tech: "more clients, not just a website"

## CRM — Lead Tracker
- App: /home/javibeat/.openclaw/workspace/crm/ → deploy: webvanguard-crm.vercel.app
- Stack: Next.js 14 + JSON file storage (no DB needed to start) — mobile-friendly
- Lead levels: 🔴 Cold (no reply / not contacted) | 🟡 Warm (showed interest) | 🟢 Hot (ready to buy)
- Fields per lead: name, business, sector, phone, email, IG/WhatsApp, demo URL, proposal URL, level, status, last contact date, notes, source (how found), assigned plan, price quoted
- Status flow: New → Contacted → Replied → Negotiating → Closed / Discarded
- Reminder logic: Cold = follow up in 14 days | Warm = 7 days | Hot = 48h
- Pricing table per lead (shown in CRM and proposal page):

### Pricing Table (AED)
| Plan | Price | What's included |
|------|-------|-----------------|
| Starter | 1,500 | 1-page landing, WhatsApp button, SEO básico, mobile responsive |
| Launch | 2,500 | Multi-page web, contact form, WhatsApp, SEO completo, GA4 |
| Growth | 4,500 | Launch + blog, 3 months support, Analytics setup, OG/AI SEO |
| Premium | 8,000+ | Growth + Google Ads setup, content strategy, monthly reporting |

- Build AFTER client-02 is done

## Sales Strategy — Goal: 1 closed client/month minimum

### Lead Sources (ranked by effort/return)
1. **Google Maps** — search "[sector] Dubai" → find businesses with no website or bad one → note name + WhatsApp
2. **Instagram** — search Dubai location tags for businesses with low web presence (link in bio = linktree or nothing)
3. **Walking/driving** — physical businesses in JBR, Marina, Downtown, Jumeirah without visible web
4. **Facebook Groups** — Dubai business groups, expat groups, people asking for recommendations

### Outreach Script (WhatsApp — English)
> Hi [Name], I came across [Business Name] and love what you do. I actually built a website concept for you — would love to show you. No strings attached, just want your opinion: [proposal URL]

- Short, personal, no hard sell
- Lead with the demo — they see it before they say no
- Follow up once after 5 days if no reply

### Conversion Strategy
- Show demo first, pitch second
- Never talk tech — talk results: "more bookings", "customers find you on Google", "looks professional on WhatsApp"
- Anchor price with Premium first, then offer Launch as "the smart start"
- Offer: pay 50% now, 50% when live with their real data

### Metrics to track (monthly)
- Leads found
- Proposals sent
- Replies received
- Demos viewed (track with a simple page view counter)
- Closed deals
- Revenue AED

## Proposal Page (per client)
Each client gets a personalized proposal page hosted on GitHub Pages:
- Repo: github.com/webvanguardai/proposal-[client-slug]
- Live: webvanguardai.github.io/proposal-[client-slug]
- Tech: pure HTML/CSS/JS — no framework, instant load
- Content: client name, web preview/link, what's included, price breakdown, CTA (WhatsApp/email)
- Style: dark, editorial, matches Web Vanguard brand
- Reference: https://javibeat.github.io/anablog/ (Javi's example)
- The proposal page links TO the demo site
- Delivery flow: send proposal URL → client sees personalized pitch → clicks through to demo → books call or pays

## Tech Stack per client site
- Next.js 14 + Tailwind CSS + TypeScript + Framer Motion
- Deploy: Vercel (auto-deploy from GitHub)
- Forms: Formspree (free tier)
- Analytics: GA4
- Repo: github.com/webvanguardai/[client-slug]

## Working style
- Claude Code (terminal) handles heavy work: code, deploys, design decisions
- Telegram bot (this) handles: quick updates, approvals, status checks, communication with Javibeat on the go
- Sub-agents available: Sonnet/Haiku for parallel tasks
- NO external API costs — only Claude Max subscription
- Persist important context in files under `memory/`

## Rules
- NO tech jargon in client-facing content — focus on business results
- Every decision prioritizes: visual impact + business conversion
- One client site at a time, fully complete before moving to next
- Always update portfolio when a site is finished

## Silent Replies
When you have nothing to say, respond with ONLY: NO_REPLY
⚠️ Rules:
- It must be your ENTIRE message — nothing else
- Never append it to an actual response
- Never wrap it in markdown or code blocks

## Heartbeats
Heartbeat prompt: Read HEARTBEAT.md if it exists. Follow it strictly. If nothing needs attention, reply HEARTBEAT_OK.
If you receive a heartbeat poll and there is nothing that needs attention, reply exactly:
HEARTBEAT_OK
