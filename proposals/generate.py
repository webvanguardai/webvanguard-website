#!/usr/bin/env python3
import os

WORKSPACE = "/home/javibeat/.openclaw/workspace/proposals"

proposals = [
    {
        "slug": "solara-music",
        "name": "Solara Music",
        "name_br": "Solara<br>Music",
        "demo": "https://solara-music-chi.vercel.app",
        "sector": "Electronic Music / DJ",
        "tagline": "A digital stage as powerful as your sound.",
        "accent": "#C9A96E",
        "accent2": "#E8D5A3",
        "bg": "#0A0A0A",
        "bg2": "#111111",
        "opp_title": "Your audience finds new artists online before they buy tickets.",
        "opp_text": "Music fans and event promoters search for DJs and producers online. If your digital presence doesn&#39;t match your sound, they move on to the next artist who looks the part.",
        "search": "Dubai DJ booking",
        "s1t": "Your Sound, Amplified", "s1d": "A striking first impression that tells promoters and fans you&#39;re a serious artist. Your brand deserves a stage that matches the music.",
        "s2t": "Your Music, Showcased", "s2d": "Featured mixes, releases, and upcoming gigs &mdash; all presented with visuals that match the energy of your sets.",
        "s3t": "Book the Experience", "s3d": "Booking requests, event enquiries, and collaboration proposals &mdash; all through a seamless contact flow that converts interest into gigs.",
        "s4t": "Fans Who Follow You", "s4d": "Testimonials from event promoters and collaborators that build credibility and attract bigger bookings.",
        "s5t": "Start the Conversation", "s5d": "A booking form, direct WhatsApp access, and your social links &mdash; making it effortless for promoters and fans to reach you.",
        "cta_title": "Ready to amplify your brand?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start turning online discovery into real bookings.",
    },
    {
        "slug": "celeste-events",
        "name": "C&eacute;leste Events",
        "name_br": "C&eacute;leste<br>Events",
        "demo": "https://celeste-events.vercel.app",
        "sector": "Luxury Event Design",
        "tagline": "A digital presence as exquisite as the events you create.",
        "accent": "#D4A574",
        "accent2": "#F0D5B8",
        "bg": "#0A0A0A",
        "bg2": "#111111",
        "opp_title": "Clients plan dream events by researching designers online first.",
        "opp_text": "Luxury event clients research every designer online before making contact. A weak or absent website loses the brief before the first conversation even starts.",
        "search": "luxury event planner Dubai",
        "s1t": "Elegance at First Glance", "s1d": "A stunning first impression that signals you operate at the highest level of event design. Luxury clients expect luxury presentation.",
        "s2t": "Your Events, Showcased", "s2d": "Past events showcased with stunning imagery and detail. Each project gets the dedicated gallery it deserves.",
        "s3t": "The Full Range of Your Services", "s3d": "Weddings, corporate galas, private celebrations, and brand launches &mdash; presented clearly so clients understand exactly what you offer.",
        "s4t": "Clients Who Trust You", "s4d": "Client testimonials that build credibility with couples and brands planning their next unforgettable event.",
        "s5t": "Start the Conversation", "s5d": "An elegant enquiry form, direct WhatsApp access, and your studio location &mdash; making it effortless for clients to reach you first.",
        "cta_title": "Ready to attract dream clients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into luxury event bookings.",
    },
    {
        "slug": "noor-clinic",
        "name": "Noor Clinic",
        "name_br": "Noor<br>Clinic",
        "demo": "https://noor-clinic.vercel.app",
        "sector": "Aesthetic Medicine",
        "tagline": "A digital presence as refined as the results you deliver.",
        "accent": "#8FBEAA",
        "accent2": "#B8D8CC",
        "bg": "#0A0F14",
        "bg2": "#0F1A22",
        "opp_title": "Patients research clinics online before booking their first appointment.",
        "opp_text": "Patients looking for aesthetic treatments research every clinic online. A weak or absent website loses patients before the first consultation.",
        "search": "aesthetic clinic Business Bay",
        "s1t": "Trust at First Glance", "s1d": "A polished first impression that signals clinical excellence and patient care. Aesthetic medicine demands aesthetic presentation.",
        "s2t": "Your Treatments, Showcased", "s2d": "Treatments presented clearly with before/after results, pricing guidance, and what patients can expect.",
        "s3t": "The Full Scope of Your Practice", "s3d": "Botox, fillers, skin rejuvenation, and body contouring &mdash; presented clearly so patients understand every option available.",
        "s4t": "Patients Who Trust You", "s4d": "Patient testimonials that build trust with people considering their first aesthetic treatment.",
        "s5t": "Start the Conversation", "s5d": "An intelligent enquiry form, direct WhatsApp access, and your clinic location &mdash; making it effortless for patients to reach you first.",
        "cta_title": "Ready to attract more patients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into patient appointments.",
    },
    {
        "slug": "apex-training",
        "name": "Apex Training",
        "name_br": "Apex<br>Training",
        "demo": "https://apex-training.vercel.app",
        "sector": "Personal Training",
        "tagline": "A digital presence as strong as the results you build.",
        "accent": "#E85D3A",
        "accent2": "#FF8A65",
        "bg": "#0A0A0A",
        "bg2": "#111111",
        "opp_title": "Clients choose their trainer by researching online first.",
        "opp_text": "People looking for a personal trainer research online first. A weak or absent website loses clients before the first session &mdash; they simply move on to a trainer that looks the part.",
        "search": "personal trainer Dubai",
        "s1t": "Strength at First Glance", "s1d": "A powerful first impression that signals dedication and results. Serious clients want a trainer who looks as professional as they are strong.",
        "s2t": "Your Programs, Showcased", "s2d": "Training programs, transformation stories, and methodologies &mdash; all presented with impact and clarity.",
        "s3t": "The Full Range of Your Services", "s3d": "1-on-1 coaching, group sessions, online programs, and nutrition plans &mdash; presented clearly so clients find the perfect fit.",
        "s4t": "Clients Who Trust You", "s4d": "Client transformations and testimonials that build trust and motivate new clients to take the first step.",
        "s5t": "Start the Conversation", "s5d": "A simple booking form, direct WhatsApp access, and your gym location &mdash; making it effortless for clients to start their journey.",
        "cta_title": "Ready to attract more clients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into training sessions.",
    },
    {
        "slug": "beit-al-layl",
        "name": "Beit Al Layl",
        "name_br": "Beit<br>Al Layl",
        "demo": "https://beit-al-layl.vercel.app",
        "sector": "Lebanese Restaurant",
        "tagline": "A digital presence as warm as the hospitality you serve.",
        "accent": "#D4A574",
        "accent2": "#F0D5B8",
        "bg": "#0A0A0A",
        "bg2": "#111111",
        "opp_title": "Diners discover restaurants online before making a reservation.",
        "opp_text": "Diners looking for authentic Lebanese food in Dubai check online before visiting. A weak or absent website loses reservations before the first course.",
        "search": "Lebanese restaurant Dubai",
        "s1t": "Warmth at First Glance", "s1d": "A warm, inviting first impression that signals authenticity and tradition. Diners want to feel the experience before they taste it.",
        "s2t": "Your Menu, Showcased", "s2d": "Signature dishes, ambiance photography, and the story behind every plate &mdash; presented with the care they deserve.",
        "s3t": "The Full Dining Experience", "s3d": "Lunch, dinner, catering, and private events &mdash; presented clearly so every guest finds exactly what they&#39;re looking for.",
        "s4t": "Guests Who Return", "s4d": "Guest reviews and stories that build credibility and make new diners feel like returning friends.",
        "s5t": "Start the Conversation", "s5d": "A reservation system, direct WhatsApp access, and your restaurant location &mdash; making it effortless for guests to book a table.",
        "cta_title": "Ready to fill more tables?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into table reservations.",
    },
    {
        "slug": "saffron-house",
        "name": "Saffron House",
        "name_br": "Saffron<br>House",
        "demo": "https://saffron-house-nu.vercel.app",
        "sector": "Boutique Hotel",
        "tagline": "A digital presence as captivating as the experience you offer.",
        "accent": "#B8860B",
        "accent2": "#DAA520",
        "bg": "#0A0A0A",
        "bg2": "#111111",
        "opp_title": "Travellers choose boutique hotels online before they book.",
        "opp_text": "Discerning travellers research boutique hotels extensively before booking. A weak or absent website loses guests before they even arrive.",
        "search": "boutique hotel Al Fahidi",
        "s1t": "Allure at First Glance", "s1d": "A captivating first impression that signals exclusivity and heritage. Boutique travellers want to feel the experience before they arrive.",
        "s2t": "Your Rooms, Showcased", "s2d": "Rooms, amenities, and the unique Al Fahidi atmosphere &mdash; each presented with the detail discerning guests expect.",
        "s3t": "The Complete Guest Experience", "s3d": "Heritage suites, rooftop terrace, cultural tours, and curated local experiences &mdash; all presented so guests know what awaits.",
        "s4t": "Guests Who Remember", "s4d": "Guest reviews and stories that build credibility and inspire new travellers to book their stay.",
        "s5t": "Start the Conversation", "s5d": "A booking form, direct WhatsApp access, and your hotel location &mdash; making it effortless for guests to reserve their stay.",
        "cta_title": "Ready to welcome more guests?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into hotel bookings.",
    },
    {
        "slug": "atlas-legal",
        "name": "Atlas Legal",
        "name_br": "Atlas<br>Legal",
        "demo": "https://atlas-legal.vercel.app",
        "sector": "Law Firm",
        "tagline": "A digital presence as authoritative as the counsel you provide.",
        "accent": "#2C5F7C",
        "accent2": "#5A9DBF",
        "bg": "#0A1628",
        "bg2": "#0F1E35",
        "opp_title": "Clients research law firms online before making the first call.",
        "opp_text": "Businesses and individuals looking for legal counsel research every firm online. A weak or absent website loses clients before the first consultation.",
        "search": "law firm DIFC Dubai",
        "s1t": "Authority at First Glance", "s1d": "A commanding first impression that signals expertise and reliability. Clients entrust their most important matters to firms that look the part.",
        "s2t": "Your Practice Areas, Showcased", "s2d": "Corporate, litigation, real estate, and immigration services &mdash; each area presented with clarity and depth.",
        "s3t": "The Full Scope of Your Practice", "s3d": "Dispute resolution, compliance, company formation, and visa services &mdash; presented clearly so clients understand exactly what you offer.",
        "s4t": "Clients Who Trust You", "s4d": "Client testimonials that build credibility with businesses and individuals seeking trusted legal representation.",
        "s5t": "Start the Conversation", "s5d": "An enquiry form, direct WhatsApp access, and your DIFC office location &mdash; making it effortless for clients to reach you first.",
        "cta_title": "Ready to attract better clients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into client consultations.",
    },
    {
        "slug": "mindwave",
        "name": "MindWave",
        "name_br": "Mind<br>Wave",
        "demo": "https://mindwave-nu.vercel.app",
        "sector": "Therapy &amp; Wellness",
        "tagline": "A digital presence as calming as the care you provide.",
        "accent": "#7B9E89",
        "accent2": "#A8C5B2",
        "bg": "#0A0F14",
        "bg2": "#0F1A22",
        "opp_title": "Clients search for therapists online before booking their first session.",
        "opp_text": "People seeking therapy research practitioners online before reaching out. A weak or absent website loses clients before the first session.",
        "search": "therapist near me UK",
        "s1t": "Calm at First Glance", "s1d": "A reassuring first impression that signals professionalism and empathy. Clients seeking therapy need to feel safe before they even make contact.",
        "s2t": "Your Services, Showcased", "s2d": "Individual therapy, couples counselling, and group sessions &mdash; each service described with warmth and clarity.",
        "s3t": "The Full Range of Your Support", "s3d": "CBT, EMDR, mindfulness, and online sessions &mdash; presented clearly so clients can find the right approach for them.",
        "s4t": "Clients Who Trust You", "s4d": "Client testimonials that build trust and help new clients feel safe taking the first step.",
        "s5t": "Start the Conversation", "s5d": "A confidential enquiry form, direct WhatsApp access, and session booking &mdash; making it effortless for clients to reach you.",
        "cta_title": "Ready to reach more clients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into therapy sessions.",
    },
    {
        "slug": "leila-hariri-dental",
        "name": "Leila Hariri Dental",
        "name_br": "Leila Hariri<br>Dental",
        "demo": "https://leila-hariri-dental.vercel.app",
        "sector": "Holistic Dentistry",
        "tagline": "A digital presence as radiant as the smiles you create.",
        "accent": "#E8B4B8",
        "accent2": "#F5D5D8",
        "bg": "#0A0A0F",
        "bg2": "#12121A",
        "opp_title": "Patients research dental practices online before booking their first visit.",
        "opp_text": "Patients looking for holistic dentistry research every practice online. A weak or absent website loses patients before the first visit.",
        "search": "holistic dentist Dubai",
        "s1t": "Confidence at First Glance", "s1d": "A radiant first impression that signals expertise and gentle care. Patients need to feel comfortable before they step into the chair.",
        "s2t": "Your Treatments, Showcased", "s2d": "Cosmetic dentistry, holistic care, and smile transformations &mdash; each treatment presented with clarity and warmth.",
        "s3t": "The Full Scope of Your Practice", "s3d": "Preventive care, orthodontics, implants, and holistic wellness &mdash; presented clearly so patients understand every option available.",
        "s4t": "Patients Who Trust You", "s4d": "Patient testimonials that build trust and help new patients feel confident about their care.",
        "s5t": "Start the Conversation", "s5d": "An appointment form, direct WhatsApp access, and your clinic location &mdash; making it effortless for patients to book their visit.",
        "cta_title": "Ready to welcome more patients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into dental appointments.",
    },
    {
        "slug": "forma-studio",
        "name": "Forma Studio",
        "name_br": "Forma<br>Studio",
        "demo": "https://forma-studio-three.vercel.app",
        "sector": "Interior Design Studio",
        "tagline": "A digital presence as elegant as the spaces you design.",
        "accent": "#A0826D",
        "accent2": "#C4A78C",
        "bg": "#0A0A0A",
        "bg2": "#111111",
        "opp_title": "Clients discover design studios online before making first contact.",
        "opp_text": "Clients looking for interior designers research studios online first. A weak or absent website loses projects before the first meeting.",
        "search": "interior designer Dubai",
        "s1t": "Vision at First Glance", "s1d": "A refined first impression that signals creativity and precision. Clients want a designer whose digital presence matches their design sensibility.",
        "s2t": "Your Portfolio, Showcased", "s2d": "Completed projects with photography, materials, and design concepts &mdash; each space gets the detailed showcase it deserves.",
        "s3t": "The Full Range of Your Services", "s3d": "Residential, commercial, hospitality, and renovation projects &mdash; presented clearly so clients understand exactly what you offer.",
        "s4t": "Clients Who Trust You", "s4d": "Client testimonials that build credibility and inspire new clients to trust you with their space.",
        "s5t": "Start the Conversation", "s5d": "An enquiry form, direct WhatsApp access, and your studio location &mdash; making it effortless for clients to start their project.",
        "cta_title": "Ready to attract dream clients?",
        "cta_sub": "Your website is already built. Let&#39;s put your name on it and start converting online searches into design consultations.",
    },
]

def hex_to_rgb(h):
    h = h.lstrip('#')
    return f"{int(h[0:2],16)},{int(h[2:4],16)},{int(h[4:6],16)}"

WA_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'

for p in proposals:
    rgb = hex_to_rgb(p["accent"])
    wa_name = p["name"].replace("&eacute;", "e").replace("&amp;", "&")
    wa_text = f"Hi%20{wa_name.replace(' ', '%20')}%2C%20I%20saw%20your%20web%20proposal%20and%20I%27m%20interested"
    
    html = f'''<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{p["name"]} &mdash; Web Design Proposal &middot; Web Vanguard</title>
<meta name="description" content="Exclusive web design proposal for {p["name"]} by Web Vanguard &mdash; AI-powered web design agency in Dubai.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#127988;</text></svg>">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
:root{{--bg:{p["bg"]};--bg2:{p["bg2"]};--acc:{p["accent"]};--acc2:{p["accent2"]};--text:#F5F0E8;--muted:rgba(245,240,232,.5);--border:rgba({rgb},.15)}}
html{{scroll-behavior:smooth}}body{{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;line-height:1.6}}a{{color:inherit;text-decoration:none}}
nav{{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 2rem;background:rgba(10,10,10,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}}
.logo{{font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:900;letter-spacing:.04em}}.logo span{{color:var(--acc)}}
.nav-sector{{font-size:.65rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted)}}
.hero{{max-width:900px;margin:0 auto;padding:5rem 2rem 4rem}}
.hero-label{{font-size:.65rem;text-transform:uppercase;letter-spacing:.3em;color:var(--acc);display:flex;align-items:center;gap:1rem;margin-bottom:2rem}}.hero-label::before{{content:'';width:2rem;height:1px;background:var(--acc)}}
.hero h1{{font-family:'Playfair Display',serif;font-size:clamp(3rem,9vw,6rem);font-weight:900;font-style:italic;line-height:1.02;margin-bottom:1.25rem}}
.hero-tagline{{font-size:1rem;color:var(--muted);max-width:480px;margin-bottom:2.5rem;line-height:1.75}}
.hero-pills{{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:2rem}}.pill{{font-size:.7rem;text-transform:uppercase;letter-spacing:.18em;padding:.45rem 1.1rem;border:1px solid var(--acc);color:var(--acc)}}.pill.filled{{background:var(--acc);color:var(--bg)}}
.demo-link{{font-size:.8rem;letter-spacing:.1em;color:var(--acc);display:inline-flex;align-items:center;gap:.4rem;transition:opacity .2s}}.demo-link:hover{{opacity:.75}}
.opportunity{{background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:3rem 2rem;text-align:center}}.opportunity-inner{{max-width:700px;margin:0 auto}}
.opp-title{{font-family:'Playfair Display',serif;font-size:clamp(1.4rem,4vw,2rem);font-weight:700;margin-bottom:1rem}}.opp-text{{color:var(--muted);font-size:.9rem;line-height:1.8;margin-bottom:1.25rem}}.opp-bold{{font-size:1rem;font-weight:600;color:var(--text)}}
.sections{{max-width:900px;margin:0 auto;padding:3rem 2rem}}.sections h2{{font-family:'Playfair Display',serif;font-size:1.5rem;margin-bottom:2.5rem}}
.section-item{{display:grid;grid-template-columns:3.5rem 1fr;gap:1.5rem;padding:2rem 0;border-bottom:1px solid var(--border)}}.section-item:last-child{{border-bottom:none}}
.sec-num{{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:900;color:var(--acc);opacity:.3;line-height:1;padding-top:.2rem}}.sec-title{{font-size:1.05rem;font-weight:600;margin-bottom:.4rem}}.sec-desc{{font-size:.85rem;color:var(--muted);line-height:1.75}}
.features{{background:var(--bg2);padding:3rem 2rem;border-top:1px solid var(--border)}}.features-inner{{max-width:900px;margin:0 auto}}.features h2{{font-family:'Playfair Display',serif;font-size:1.5rem;margin-bottom:2rem}}
.features-grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.75rem}}.feat{{padding:1.25rem;border:1px solid var(--border);background:var(--bg)}}.feat-icon{{font-size:1.3rem;margin-bottom:.5rem}}.feat-title{{font-size:.8rem;font-weight:600;margin-bottom:.2rem}}.feat-desc{{font-size:.75rem;color:var(--muted);line-height:1.5}}
.pricing{{max-width:900px;margin:0 auto;padding:3rem 2rem}}.pricing h2{{font-family:'Playfair Display',serif;font-size:1.5rem;margin-bottom:.4rem}}.pricing-sub{{font-size:.85rem;color:var(--muted);margin-bottom:2rem}}
table{{width:100%;border-collapse:collapse}}th{{font-size:.6rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted);text-align:left;padding:.75rem 1rem;border-bottom:1px solid var(--border)}}td{{padding:.9rem 1rem;border-bottom:1px solid var(--border);font-size:.85rem;vertical-align:top}}tr.rec td{{background:rgba({rgb},.06)}}.plan-name{{font-weight:700}}.plan-price{{font-family:'Playfair Display',serif;font-size:1.05rem;color:var(--acc2);white-space:nowrap}}.badge{{display:inline-block;font-size:.55rem;text-transform:uppercase;letter-spacing:.12em;background:var(--acc);color:var(--bg);padding:.18rem .5rem;margin-left:.4rem;vertical-align:middle}}.plan-desc{{color:var(--muted)}}
.cta{{padding:4rem 2rem 5rem;text-align:center}}.cta-inner{{max-width:600px;margin:0 auto}}.cta h2{{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,5vw,2.4rem);font-weight:900;margin-bottom:.75rem}}.cta p{{font-size:.9rem;color:var(--muted);margin-bottom:2.5rem;line-height:1.75}}
.cta-btns{{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}}.btn-wa{{display:inline-flex;align-items:center;gap:.6rem;background:#25D366;color:#fff;padding:.85rem 1.75rem;font-size:.8rem;font-weight:600;letter-spacing:.05em;transition:opacity .2s;border-radius:4px}}.btn-wa:hover{{opacity:.88}}.btn-demo{{display:inline-flex;align-items:center;gap:.6rem;border:1px solid var(--border);color:var(--text);padding:.85rem 1.75rem;font-size:.8rem;letter-spacing:.05em;transition:border-color .2s;border-radius:4px}}.btn-demo:hover{{border-color:var(--acc)}}
footer{{border-top:1px solid var(--border);padding:1.5rem 2rem;text-align:center;font-size:.7rem;color:var(--muted);letter-spacing:.1em}}
@media(max-width:600px){{nav{{padding:1rem 1.25rem}}.hero,.sections,.pricing,.cta{{padding-left:1.25rem;padding-right:1.25rem}}.section-item{{grid-template-columns:2.5rem 1fr;gap:1rem}}table td:last-child{{display:none}}}}
</style>
</head>
<body>
<nav><div class="logo">Web<span>Vanguard</span></div><div class="nav-sector">{p["sector"]}</div></nav>

<div class="hero">
  <div class="hero-label"><span>Exclusive Web Design Proposal &middot; March 2026</span></div>
  <h1>{p["name_br"]}</h1>
  <p class="hero-tagline">{p["tagline"]}</p>
  <div class="hero-pills"><span class="pill filled">Growth Plan</span><span class="pill">AED 4,500</span></div>
  <a href="{p["demo"]}" target="_blank" class="demo-link">View Live Website &rarr;</a>
</div>

<div class="opportunity"><div class="opportunity-inner">
  <h2 class="opp-title">{p["opp_title"]}</h2>
  <p class="opp-text">{p["opp_text"]}</p>
  <p class="opp-bold">We built your website. It&#39;s ready. All it needs is your name.</p>
</div></div>

<div class="sections">
  <h2>What we built for you</h2>
  <div class="section-item"><div class="sec-num">01</div><div><div class="sec-title">{p["s1t"]}</div><p class="sec-desc">{p["s1d"]}</p></div></div>
  <div class="section-item"><div class="sec-num">02</div><div><div class="sec-title">{p["s2t"]}</div><p class="sec-desc">{p["s2d"]}</p></div></div>
  <div class="section-item"><div class="sec-num">03</div><div><div class="sec-title">{p["s3t"]}</div><p class="sec-desc">{p["s3d"]}</p></div></div>
  <div class="section-item"><div class="sec-num">04</div><div><div class="sec-title">{p["s4t"]}</div><p class="sec-desc">{p["s4d"]}</p></div></div>
  <div class="section-item"><div class="sec-num">05</div><div><div class="sec-title">{p["s5t"]}</div><p class="sec-desc">{p["s5d"]}</p></div></div>
</div>

<div class="features"><div class="features-inner">
  <h2>Everything included</h2>
  <div class="features-grid">
    <div class="feat"><div class="feat-icon">&#128241;</div><div class="feat-title">Works on every device</div><p class="feat-desc">Phone, tablet, desktop &mdash; your website looks perfect everywhere.</p></div>
    <div class="feat"><div class="feat-icon">&#128269;</div><div class="feat-title">Found on Google</div><p class="feat-desc">When someone searches &ldquo;{p["search"]}&rdquo;, your business appears.</p></div>
    <div class="feat"><div class="feat-icon">&#128172;</div><div class="feat-title">WhatsApp button</div><p class="feat-desc">Clients reach you in one tap &mdash; no searching for a number.</p></div>
    <div class="feat"><div class="feat-icon">&#128231;</div><div class="feat-title">Enquiry form</div><p class="feat-desc">New leads go straight to your inbox. No lead is ever missed.</p></div>
    <div class="feat"><div class="feat-icon">&#128202;</div><div class="feat-title">Visitor tracking</div><p class="feat-desc">See exactly how many people find your business online every day.</p></div>
    <div class="feat"><div class="feat-icon">&#129302;</div><div class="feat-title">AI search ready</div><p class="feat-desc">Visible on ChatGPT, Google AI, and Perplexity &mdash; the new way people discover businesses.</p></div>
    <div class="feat"><div class="feat-icon">&#9889;</div><div class="feat-title">Loads in under 2 seconds</div><p class="feat-desc">Fast on any connection. Slow websites lose clients before the page even opens.</p></div>
    <div class="feat"><div class="feat-icon">&#127760;</div><div class="feat-title">Multi-language ready</div><p class="feat-desc">Arabic, French, Russian available on request &mdash; ideal for international clientele.</p></div>
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
  <h2>{p["cta_title"]}</h2>
  <p>{p["cta_sub"]}</p>
  <div class="cta-btns">
    <a href="https://wa.me/971500000000?text={wa_text}" target="_blank" class="btn-wa">
      {WA_SVG}
      Chat on WhatsApp
    </a>
    <a href="{p["demo"]}" target="_blank" class="btn-demo">View Live Website &rarr;</a>
  </div>
</div></div>
<footer>&copy; 2026 Web Vanguard &middot; Dubai &middot; hello@webvanguard.co</footer>
</body></html>'''

    d = os.path.join(WORKSPACE, p["slug"])
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, "index.html"), "w") as f:
        f.write(html)
    print(f"✅ {p['slug']}/index.html ({len(html)} bytes)")

print("\nAll 10 proposals generated!")
