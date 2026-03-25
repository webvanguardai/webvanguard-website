# Beit Al Layl — Project Summary
**Date:** 2026-03-25  
**Agency:** Web Vanguard  
**Client:** Beit Al Layl — Lebanese Fine Dining, Downtown Dubai

---

## Live URLs
- **Production:** https://beit-al-layl.vercel.app
- **GitHub:** https://github.com/webvanguardai/beit-al-layl
- **Vercel Dashboard:** https://vercel.com/webvanguardai-2631s-projects/beit-al-layl

---

## Project Brief
- **Concept:** Lebanese fine dining meets modern Dubai. Family recipes, premium execution.
- **Design 3 words:** WARM · ABUNDANT · CEREMONIAL
- **Palette:** Deep midnight (#0D0B0E) + warm gold (#C9A55A) + off-white cream (#F5F0E8)
- **Fonts:** Cormorant Garamond (headlines) + Inter (body)

---

## Stack
- Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
- Formspree: https://formspree.io/f/xpzgkqvd
- GA4: G-PLACEHOLDER
- WhatsApp floating button: +971 4 000 0000

---

## Pages / Sections
1. **Hero** — Full-viewport dark overlay, Unsplash restaurant photo, cinematic headline
2. **Tonight's Specials Ticker** — Infinite horizontal scroll, gold on dark
3. **The Table** — Philosophy section, large editorial quote, 3 single-word values
4. **Menu** — Editorial layout (not cards), 4 categories × 3 dishes, Cormorant Garamond dish names
5. **Story** — Side-by-side image + origin story text
6. **Reserve** — Formspree form + WhatsApp + Google Maps embed
7. **Footer** — Address, email, Instagram, "Website by Web Vanguard"

---

## SEO
- Title: "Beit Al Layl — Lebanese Fine Dining, Downtown Dubai"
- Keywords: Lebanese restaurant Dubai, Arabic restaurant Downtown Dubai, fine dining Lebanese Dubai
- JSON-LD Restaurant schema ✅
- OpenGraph + Twitter cards ✅
- robots.txt + sitemap.xml ✅

---

## Technical Notes
- Google Fonts loaded via CSS @import (Google Fonts blocked at build time on Pi — works fine at runtime/on Vercel)
- `next.config.mjs` configured with Unsplash remotePatterns
- Build: 0 errors, 0 warnings

---

## Design Decisions
- Hero: ONE massive headline in Cormorant — no stats strip (per design brief)
- Dish names ARE the design — large italic Cormorant on hover turns gold
- The "unexpected element": Tonight's Specials ticker (infinite horizontal scroll)
- Menu flows like a printed editorial menu — NO card grid
- Dark inverted Google Maps embed for visual consistency
- Gold corner accents on Story image
- WhatsApp floating button with Framer Motion entrance animation
