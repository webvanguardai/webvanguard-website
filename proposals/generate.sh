#!/bin/bash
# Generate all 10 proposal pages

WORKSPACE="/home/javibeat/.openclaw/workspace/proposals"

# Define proposals as arrays
declare -a SLUGS=("solara-music" "celeste-events" "noor-clinic" "apex-training" "beit-al-layl" "saffron-house" "atlas-legal" "mindwave" "leila-hariri-dental" "forma-studio")
declare -a NAMES=("Solara Music" "Céleste Events" "Noor Clinic" "Apex Training" "Beit Al Layl" "Saffron House" "Atlas Legal" "MindWave" "Leila Hariri Dental" "Forma Studio")
declare -a NAMES_BR=("Solara<br>Music" "Céleste<br>Events" "Noor<br>Clinic" "Apex<br>Training" "Beit<br>Al Layl" "Saffron<br>House" "Atlas<br>Legal" "Mind<br>Wave" "Leila Hariri<br>Dental" "Forma<br>Studio")
declare -a DEMOS=("https://solara-music-chi.vercel.app" "https://celeste-events.vercel.app" "https://noor-clinic.vercel.app" "https://apex-training.vercel.app" "https://beit-al-layl.vercel.app" "https://saffron-house-nu.vercel.app" "https://atlas-legal.vercel.app" "https://mindwave-nu.vercel.app" "https://leila-hariri-dental.vercel.app" "https://forma-studio-three.vercel.app")
declare -a SECTORS=("Electronic Music / DJ" "Luxury Event Design" "Aesthetic Medicine" "Personal Training" "Lebanese Restaurant" "Boutique Hotel" "Law Firm" "Therapy & Wellness" "Holistic Dentistry" "Interior Design Studio")
declare -a TAGLINES=(
  "A digital stage as powerful as your sound."
  "A digital presence as exquisite as the events you create."
  "A digital presence as refined as the results you deliver."
  "A digital presence as strong as the results you build."
  "A digital presence as warm as the hospitality you serve."
  "A digital presence as captivating as the experience you offer."
  "A digital presence as authoritative as the counsel you provide."
  "A digital presence as calming as the care you provide."
  "A digital presence as radiant as the smiles you create."
  "A digital presence as elegant as the spaces you design."
)
declare -a OPP_TITLES=(
  "Your audience finds new artists online before they buy tickets."
  "Clients plan dream events by researching designers online first."
  "Patients research clinics online before booking their first appointment."
  "Clients choose their trainer by researching online first."
  "Diners discover restaurants online before making a reservation."
  "Travellers choose boutique hotels online before they book."
  "Clients research law firms online before making the first call."
  "Clients search for therapists online before booking their first session."
  "Patients research dental practices online before booking their first visit."
  "Clients discover design studios online before making first contact."
)
declare -a OPP_TEXTS=(
  "Music fans and event promoters search for DJs and producers online. If your digital presence doesn't match your sound, they move on to the next artist who looks the part."
  "Luxury event clients research every designer online before making contact. A weak or absent website loses the brief before the first conversation even starts — they simply move on to a designer that looks the part."
  "Patients looking for aesthetic treatments research every clinic online. A weak or absent website loses patients before the first consultation — they simply move on to a clinic that looks the part."
  "People looking for a personal trainer research online first. A weak or absent website loses clients before the first session — they simply move on to a trainer that looks the part."
  "Diners looking for authentic Lebanese food in Dubai check online before visiting. A weak or absent website loses reservations before the first course — they simply choose a restaurant that looks the part."
  "Discerning travellers research boutique hotels extensively before booking. A weak or absent website loses guests before they even arrive — they simply book a hotel that looks the part."
  "Businesses and individuals looking for legal counsel research every firm online. A weak or absent website loses clients before the first consultation — they simply move on to a firm that looks the part."
  "People seeking therapy research practitioners online before reaching out. A weak or absent website loses clients before the first session — they simply move on to a therapist that looks more professional."
  "Patients looking for holistic dentistry research every practice online. A weak or absent website loses patients before the first visit — they simply move on to a practice that looks the part."
  "Clients looking for interior designers research studios online first. A weak or absent website loses projects before the first meeting — they simply move on to a studio that looks the part."
)
declare -a SEARCH_TERMS=(
  "Dubai DJ booking"
  "luxury event planner Dubai"
  "aesthetic clinic Business Bay"
  "personal trainer Dubai"
  "Lebanese restaurant Dubai"
  "boutique hotel Al Fahidi"
  "law firm DIFC Dubai"
  "therapist near me UK"
  "holistic dentist Dubai"
  "interior designer Dubai"
)
declare -a S1T=("Your Sound, Amplified" "Elegance at First Glance" "Trust at First Glance" "Strength at First Glance" "Warmth at First Glance" "Allure at First Glance" "Authority at First Glance" "Calm at First Glance" "Confidence at First Glance" "Vision at First Glance")
declare -a S1D=(
  "A striking first impression that tells promoters and fans you're a serious artist. Your brand deserves a stage that matches the music."
  "A stunning first impression that signals you operate at the highest level of event design. Luxury clients expect luxury presentation."
  "A polished first impression that signals clinical excellence and patient care. Aesthetic medicine demands aesthetic presentation."
  "A powerful first impression that signals dedication and results. Serious clients want a trainer who looks as professional as they are strong."
  "A warm, inviting first impression that signals authenticity and tradition. Diners want to feel the experience before they taste it."
  "A captivating first impression that signals exclusivity and heritage. Boutique travellers want to feel the experience before they arrive."
  "A commanding first impression that signals expertise and reliability. Clients entrust their most important matters to firms that look the part."
  "A reassuring first impression that signals professionalism and empathy. Clients seeking therapy need to feel safe before they even make contact."
  "A radiant first impression that signals expertise and gentle care. Patients need to feel comfortable before they step into the chair."
  "A refined first impression that signals creativity and precision. Clients want a designer whose digital presence matches their design sensibility."
)
declare -a S2T=("Your Music, Showcased" "Your Events, Showcased" "Your Treatments, Showcased" "Your Programs, Showcased" "Your Menu, Showcased" "Your Rooms, Showcased" "Your Practice Areas, Showcased" "Your Services, Showcased" "Your Treatments, Showcased" "Your Portfolio, Showcased")
declare -a S2D=(
  "Featured mixes, releases, and upcoming gigs — all presented with visuals that match the energy of your sets."
  "Past events showcased with stunning imagery and detail. Each project gets the dedicated gallery it deserves."
  "Treatments presented clearly with before/after results, pricing guidance, and what patients can expect."
  "Training programs, transformation stories, and methodologies — all presented with impact and clarity."
  "Signature dishes, ambiance photography, and the story behind every plate — presented with the care they deserve."
  "Rooms, amenities, and the unique Al Fahidi atmosphere — each presented with the detail discerning guests expect."
  "Corporate, litigation, real estate, and immigration services — each area presented with clarity and depth."
  "Individual therapy, couples counselling, and group sessions — each service described with warmth and clarity."
  "Cosmetic dentistry, holistic care, and smile transformations — each treatment presented with clarity and warmth."
  "Completed projects with photography, materials, and design concepts — each space gets the detailed showcase it deserves."
)
declare -a S3T=("Book the Experience" "The Full Range of Your Services" "The Full Scope of Your Practice" "The Full Range of Your Services" "The Full Dining Experience" "The Complete Guest Experience" "The Full Scope of Your Practice" "The Full Range of Your Support" "The Full Scope of Your Practice" "The Full Range of Your Services")
declare -a S3D=(
  "Booking requests, event enquiries, and collaboration proposals — all through a seamless contact flow that converts interest into gigs."
  "Weddings, corporate galas, private celebrations, and brand launches — presented clearly so clients understand exactly what you offer."
  "Botox, fillers, skin rejuvenation, and body contouring — presented clearly so patients understand every option available."
  "1-on-1 coaching, group sessions, online programs, and nutrition plans — presented clearly so clients find the perfect fit."
  "Lunch, dinner, catering, and private events — presented clearly so every guest finds exactly what they're looking for."
  "Heritage suites, rooftop terrace, cultural tours, and curated local experiences — all presented so guests know what awaits."
  "Dispute resolution, compliance, company formation, and visa services — presented clearly so clients understand exactly what you offer."
  "CBT, EMDR, mindfulness, and online sessions — presented clearly so clients can find the right approach for them."
  "Preventive care, orthodontics, implants, and holistic wellness — presented clearly so patients understand every option available."
  "Residential, commercial, hospitality, and renovation projects — presented clearly so clients understand exactly what you offer."
)
declare -a S4T=("Fans Who Follow You" "Clients Who Trust You" "Patients Who Trust You" "Clients Who Trust You" "Guests Who Return" "Guests Who Remember" "Clients Who Trust You" "Clients Who Trust You" "Patients Who Trust You" "Clients Who Trust You")
declare -a S4D=(
  "Testimonials from event promoters and collaborators that build credibility and attract bigger bookings."
  "Client testimonials that build credibility with couples and brands planning their next unforgettable event."
  "Patient testimonials that build trust with people considering their first aesthetic treatment."
  "Client transformations and testimonials that build trust and motivate new clients to take the first step."
  "Guest reviews and stories that build credibility and make new diners feel like returning friends."
  "Guest reviews and stories that build credibility and inspire new travellers to book their stay."
  "Client testimonials that build credibility with businesses and individuals seeking trusted legal representation."
  "Client testimonials that build trust and help new clients feel safe taking the first step."
  "Patient testimonials that build trust and help new patients feel confident about their care."
  "Client testimonials that build credibility and inspire new clients to trust you with their space."
)
declare -a S5T=("Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation" "Start the Conversation")
declare -a S5D=(
  "A booking form, direct WhatsApp access, and your social links — making it effortless for promoters and fans to reach you."
  "An elegant enquiry form, direct WhatsApp access, and your studio location — making it effortless for clients to reach you first."
  "An intelligent enquiry form, direct WhatsApp access, and your clinic location — making it effortless for patients to reach you first."
  "A simple booking form, direct WhatsApp access, and your gym location — making it effortless for clients to start their journey."
  "A reservation system, direct WhatsApp access, and your restaurant location — making it effortless for guests to book a table."
  "A booking form, direct WhatsApp access, and your hotel location — making it effortless for guests to reserve their stay."
  "An enquiry form, direct WhatsApp access, and your DIFC office location — making it effortless for clients to reach you first."
  "A confidential enquiry form, direct WhatsApp access, and session booking — making it effortless for clients to reach you."
  "An appointment form, direct WhatsApp access, and your clinic location — making it effortless for patients to book their visit."
  "An enquiry form, direct WhatsApp access, and your studio location — making it effortless for clients to start their project."
)
declare -a CTA_TITLES=(
  "Ready to amplify your brand?"
  "Ready to attract dream clients?"
  "Ready to attract more patients?"
  "Ready to attract more clients?"
  "Ready to fill more tables?"
  "Ready to welcome more guests?"
  "Ready to attract better clients?"
  "Ready to reach more clients?"
  "Ready to welcome more patients?"
  "Ready to attract dream clients?"
)
declare -a CTA_SUBS=(
  "Your website is already built. Let's put your name on it and start turning online discovery into real bookings."
  "Your website is already built. Let's put your name on it and start converting online searches into luxury event bookings."
  "Your website is already built. Let's put your name on it and start converting online searches into patient appointments."
  "Your website is already built. Let's put your name on it and start converting online searches into training sessions."
  "Your website is already built. Let's put your name on it and start converting online searches into table reservations."
  "Your website is already built. Let's put your name on it and start converting online searches into hotel bookings."
  "Your website is already built. Let's put your name on it and start converting online searches into client consultations."
  "Your website is already built. Let's put your name on it and start converting online searches into therapy sessions."
  "Your website is already built. Let's put your name on it and start converting online searches into dental appointments."
  "Your website is already built. Let's put your name on it and start converting online searches into design consultations."
)

# Color themes per proposal
declare -a ACCENT=("#C9A96E" "#D4A574" "#8FBEAA" "#E85D3A" "#D4A574" "#B8860B" "#2C5F7C" "#7B9E89" "#E8B4B8" "#A0826D")
declare -a ACCENT2=("#E8D5A3" "#F0D5B8" "#B8D8CC" "#FF8A65" "#F0D5B8" "#DAA520" "#5A9DBF" "#A8C5B2" "#F5D5D8" "#C4A78C")
declare -a BG=("#0A0A0A" "#0A0A0A" "#0A0F14" "#0A0A0A" "#0A0A0A" "#0A0A0A" "#0A1628" "#0A0F14" "#0A0A0F" "#0A0A0A")
declare -a BG2=("#111111" "#111111" "#0F1A22" "#111111" "#111111" "#111111" "#0F1E35" "#0F1A22" "#12121A" "#111111")

for i in "${!SLUGS[@]}"; do
  slug="${SLUGS[$i]}"
  name="${NAMES[$i]}"
  name_br="${NAMES_BR[$i]}"
  demo="${DEMOS[$i]}"
  sector="${SECTORS[$i]}"
  tagline="${TAGLINES[$i]}"
  accent="${ACCENT[$i]}"
  accent2="${ACCENT2[$i]}"
  bg="${BG[$i]}"
  bg2="${BG2[$i]}"
  
  dir="$WORKSPACE/$slug"
  mkdir -p "$dir"
  
  # URL-encode the WhatsApp text
  wa_text="Hi%20${name// /%20}%2C%20I%20saw%20your%20web%20proposal%20and%20I%27m%20interested"
  
  cat > "$dir/index.html" << HTMLEOF
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${name} — Web Design Proposal · Web Vanguard</title>
<meta name="description" content="Exclusive web design proposal for ${name} by Web Vanguard — AI-powered web design agency in Dubai.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏴</text></svg>">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:${bg};--bg2:${bg2};--acc:${accent};--acc2:${accent2};--text:#F5F0E8;--muted:rgba(245,240,232,.5);--border:rgba(${parseInt(accent.slice(1,3),16)},${parseInt(accent.slice(3,5),16)},${parseInt(accent.slice(5,7),16)},.15)}
html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;line-height:1.6}a{color:inherit;text-decoration:none}
nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 2rem;background:rgba(10,10,10,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.logo{font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:900;letter-spacing:.04em}.logo span{color:var(--acc)}
.nav-sector{font-size:.65rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted)}
.hero{max-width:900px;margin:0 auto;padding:5rem 2rem 4rem}
.hero-label{font-size:.65rem;text-transform:uppercase;letter-spacing:.3em;color:var(--acc);display:flex;align-items:center;gap:1rem;margin-bottom:2rem}.hero-label::before{content:'';width:2rem;height:1px;background:var(--acc)}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(3rem,9vw,6rem);font-weight:900;font-style:italic;line-height:1.02;margin-bottom:1.25rem}
.hero-tagline{font-size:1rem;color:var(--muted);max-width:480px;margin-bottom:2.5rem;line-height:1.75}
.hero-pills{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:2rem}.pill{font-size:.7rem;text-transform:uppercase;letter-spacing:.18em;padding:.45rem 1.1rem;border:1px solid var(--acc);color:var(--acc)}.pill.filled{background:var(--acc);color:var(--bg)}
.demo-link{font-size:.8rem;letter-spacing:.1em;color:var(--acc);display:inline-flex;align-items:center;gap:.4rem;transition:opacity .2s}.demo-link:hover{opacity:.75}
.opportunity{background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:3rem 2rem;text-align:center}.opportunity-inner{max-width:700px;margin:0 auto}
.opp-title{font-family:'Playfair Display',serif;font-size:clamp(1.4rem,4vw,2rem);font-weight:700;margin-bottom:1rem}.opp-text{color:var(--muted);font-size:.9rem;line-height:1.8;margin-bottom:1.25rem}.opp-bold{font-size:1rem;font-weight:600;color:var(--text)}
.sections{max-width:900px;margin:0 auto;padding:3rem 2rem}.sections h2{font-family:'Playfair Display',serif;font-size:1.5rem;margin-bottom:2.5rem}
.section-item{display:grid;grid-template-columns:3.5rem 1fr;gap:1.5rem;padding:2rem 0;border-bottom:1px solid var(--border)}.section-item:last-child{border-bottom:none}
.sec-num{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:900;color:var(--acc);opacity:.3;line-height:1;padding-top:.2rem}.sec-title{font-size:1.05rem;font-weight:600;margin-bottom:.4rem}.sec-desc{font-size:.85rem;color:var(--muted);line-height:1.75}
.features{background:var(--bg2);padding:3rem 2rem;border-top:1px solid var(--border)}.features-inner{max-width:900px;margin:0 auto}.features h2{font-family:'Playfair Display',serif;font-size:1.5rem;margin-bottom:2rem}
.features-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.75rem}.feat{padding:1.25rem;border:1px solid var(--border);background:var(--bg)}.feat-icon{font-size:1.3rem;margin-bottom:.5rem}.feat-title{font-size:.8rem;font-weight:600;margin-bottom:.2rem}.feat-desc{font-size:.75rem;color:var(--muted);line-height:1.5}
.pricing{max-width:900px;margin:0 auto;padding:3rem 2rem}.pricing h2{font-family:'Playfair Display',serif;font-size:1.5rem;margin-bottom:.4rem}.pricing-sub{font-size:.85rem;color:var(--muted);margin-bottom:2rem}
table{width:100%;border-collapse:collapse}th{font-size:.6rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted);text-align:left;padding:.75rem 1rem;border-bottom:1px solid var(--border)}td{padding:.9rem 1rem;border-bottom:1px solid var(--border);font-size:.85rem;vertical-align:top}tr.rec td{background:rgba(${parseInt(accent.slice(1,3),16)},${parseInt(accent.slice(3,5),16)},${parseInt(accent.slice(5,7),16)},.06)}.plan-name{font-weight:700}.plan-price{font-family:'Playfair Display',serif;font-size:1.05rem;color:var(--acc2);white-space:nowrap}.badge{display:inline-block;font-size:.55rem;text-transform:uppercase;letter-spacing:.12em;background:var(--acc);color:var(--bg);padding:.18rem .5rem;margin-left:.4rem;vertical-align:middle}.plan-desc{color:var(--muted)}
.cta{padding:4rem 2rem 5rem;text-align:center}.cta-inner{max-width:600px;margin:0 auto}.cta h2{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,5vw,2.4rem);font-weight:900;margin-bottom:.75rem}.cta p{font-size:.9rem;color:var(--muted);margin-bottom:2.5rem;line-height:1.75}
.cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}.btn-wa{display:inline-flex;align-items:center;gap:.6rem;background:#25D366;color:#fff;padding:.85rem 1.75rem;font-size:.8rem;font-weight:600;letter-spacing:.05em;transition:opacity .2s;border-radius:4px}.btn-wa:hover{opacity:.88}.btn-demo{display:inline-flex;align-items:center;gap:.6rem;border:1px solid var(--border);color:var(--text);padding:.85rem 1.75rem;font-size:.8rem;letter-spacing:.05em;transition:border-color .2s;border-radius:4px}.btn-demo:hover{border-color:var(--acc)}
footer{border-top:1px solid var(--border);padding:1.5rem 2rem;text-align:center;font-size:.7rem;color:var(--muted);letter-spacing:.1em}
@media(max-width:600px){nav{padding:1rem 1.25rem}.hero,.sections,.pricing,.cta{padding-left:1.25rem;padding-right:1.25rem}.section-item{grid-template-columns:2.5rem 1fr;gap:1rem}table td:last-child{display:none}}
</style>
</head>
<body>
<nav><div class="logo">Web<span>Vanguard</span></div><div class="nav-sector">${sector}</div></nav>

<div class="hero">
  <div class="hero-label"><span>Exclusive Web Design Proposal · March 2026</span></div>
  <h1>${name_br}</h1>
  <p class="hero-tagline">${tagline}</p>
  <div class="hero-pills"><span class="pill filled">Growth Plan</span><span class="pill">AED 4,500</span></div>
  <a href="${demo}" target="_blank" class="demo-link">View Live Website →</a>
</div>

<div class="opportunity"><div class="opportunity-inner">
  <h2 class="opp-title">${OPP_TITLES[$i]}</h2>
  <p class="opp-text">${OPP_TEXTS[$i]}</p>
  <p class="opp-bold">We built your website. It's ready. All it needs is your name.</p>
</div></div>

<div class="sections">
  <h2>What we built for you</h2>
  <div class="section-item"><div class="sec-num">01</div><div><div class="sec-title">${S1T[$i]}</div><p class="sec-desc">${S1D[$i]}</p></div></div>
  <div class="section-item"><div class="sec-num">02</div><div><div class="sec-title">${S2T[$i]}</div><p class="sec-desc">${S2D[$i]}</p></div></div>
  <div class="section-item"><div class="sec-num">03</div><div><div class="sec-title">${S3T[$i]}</div><p class="sec-desc">${S3D[$i]}</p></div></div>
  <div class="section-item"><div class="sec-num">04</div><div><div class="sec-title">${S4T[$i]}</div><p class="sec-desc">${S4D[$i]}</p></div></div>
  <div class="section-item"><div class="sec-num">05</div><div><div class="sec-title">${S5T[$i]}</div><p class="sec-desc">${S5D[$i]}</p></div></div>
</div>

<div class="features"><div class="features-inner">
  <h2>Everything included</h2>
  <div class="features-grid">
    <div class="feat"><div class="feat-icon">📱</div><div class="feat-title">Works on every device</div><p class="feat-desc">Phone, tablet, desktop — your website looks perfect everywhere.</p></div>
    <div class="feat"><div class="feat-icon">🔍</div><div class="feat-title">Found on Google</div><p class="feat-desc">When someone searches "${SEARCH_TERMS[$i]}", your business appears.</p></div>
    <div class="feat"><div class="feat-icon">💬</div><div class="feat-title">WhatsApp button</div><p class="feat-desc">Clients reach you in one tap — no searching for a number.</p></div>
    <div class="feat"><div class="feat-icon">📧</div><div class="feat-title">Enquiry form</div><p class="feat-desc">New leads go straight to your inbox. No lead is ever missed.</p></div>
    <div class="feat"><div class="feat-icon">📊</div><div class="feat-title">Visitor tracking</div><p class="feat-desc">See exactly how many people find your business online every day.</p></div>
    <div class="feat"><div class="feat-icon">🤖</div><div class="feat-title">AI search ready</div><p class="feat-desc">Visible on ChatGPT, Google AI, and Perplexity — the new way people discover businesses.</p></div>
    <div class="feat"><div class="feat-icon">⚡</div><div class="feat-title">Loads in under 2 seconds</div><p class="feat-desc">Fast on any connection. Slow websites lose clients before the page even opens.</p></div>
    <div class="feat"><div class="feat-icon">🌐</div><div class="feat-title">Multi-language ready</div><p class="feat-desc">Arabic, French, Russian available on request — ideal for Dubai's international clientele.</p></div>
  </div>
</div></div>

<div class="pricing">
  <h2>Your investment</h2>
  <p class="pricing-sub">One-time payment. No monthly fees. No surprises.</p>
  <table>
    <thead><tr><th>Plan</th><th>Price</th><th>What you get</th></tr></thead>
    <tbody>
      <tr><td><span class="plan-name">Starter</span></td><td><span class="plan-price">AED 1,500</span></td><td class="plan-desc">Single-page website, WhatsApp button, Google-ready, mobile-friendly</td></tr>
      <tr><td><span class="plan-name">Launch</span></td><td><span class="plan-price">AED 2,500</span></td><td class="plan-desc">Full website, enquiry form, WhatsApp, Google-ready, visitor tracking</td></tr>
      <tr class="rec"><td><span class="plan-name">Growth <span class="badge">Recommended</span></span></td><td><span class="plan-price">AED 4,500</span></td><td class="plan-desc">Everything in Launch + 3 months of updates and support + AI search optimization</td></tr>
    </tbody>
  </table>
</div>

<div class="cta"><div class="cta-inner">
  <h2>${CTA_TITLES[$i]}</h2>
  <p>${CTA_SUBS[$i]}</p>
  <div class="cta-btns">
    <a href="https://wa.me/971500000000?text=${wa_text}" target="_blank" class="btn-wa">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Chat on WhatsApp
    </a>
    <a href="${demo}" target="_blank" class="btn-demo">View Live Website →</a>
  </div>
</div></div>
<footer>© 2026 Web Vanguard · Dubai · hello@webvanguard.co</footer>
</body></html>
HTMLEOF

  echo "✅ Created $slug/index.html"
done

echo ""
echo "All 10 proposal pages generated!"
