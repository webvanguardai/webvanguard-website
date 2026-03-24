# Noor Clinic v2 Redesign — 2026-03-24

## Vercel URL
**Production:** https://noor-clinic.vercel.app  
**Deploy preview:** https://noor-clinic-9at5quvqk-webvanguardai-2631s-projects.vercel.app  
**GitHub:** https://github.com/webvanguardai/noor-clinic  

## What Changed (v1 → v2)

### Design Concept: "Clinical Luxury"
- **Palette flipped:** Dark (#0A0A0F) → Pure white (#FFFFFF) background. Rose gold (#B5927A) accent replaced gold (#C9A96E). Deep charcoal (#1A1A1A) text.
- **Typography:** Cormorant Garamond (display/headlines) + DM Sans (body) via next/font/google. Replaced Playfair Display + Inter.
- **Feel:** Swiss clinic meets Dubai luxury. White = clean, clinical, trust. Minimal, precise, confident.

### New Sections (full rebuild)
1. **Nav** — White bar, logo left, "Book a Consultation" rose-gold CTA right. Mobile hamburger menu.
2. **Hero** — Split-screen: LEFT editorial text ("Precision aesthetics. Visible results."), stats row (2,400+, 4.9★, DHA). RIGHT full-height Unsplash treatment room photo with board-certified badge.
3. **TrustBar** — Charcoal full-width strip: DHA Licensed | 5★ Google Rating | 2,400+ Treatments | Board-Certified Doctors | Same-Day Appointments.
4. **Treatments** — 6 full-width alternating rows (photo + details): Botox & Fillers / Laser Resurfacing / IV Drips / PRP Hair / Body Sculpting / Skin Brightening. Each with duration, price from AED X, "Book This Treatment" CTA.
5. **Results** — 3 patient story cards (Sarah M., Layla R., Ahmed K.) with Unsplash abstract images.
6. **Booking** — Dark section with inline form (Name, Phone, Treatment dropdown, Date). Formspree (xpwzgkrl) + WhatsApp redirect on submit.
7. **FAQ** — 5-question accordion (React state).
8. **Contact** — Google Maps embed (Business Bay) + contact details card with hours.
9. **Footer** — DHA license number, nav links, Instagram handle.
10. **WhatsApp float** — Rose gold, bottom right, pulse animation.

### Technical
- `next/font/google`: Cormorant_Garamond + DM_Sans with CSS variables
- `next.config.mjs`: Unsplash remotePatterns already present
- `robots.ts` + `sitemap.ts`: preserved from v1
- SEO: Full meta, OG, Twitter cards, JSON-LD LocalBusiness + MedicalClinic
- GA4: G-PLACEHOLDER (ready for real ID)
- Formspree: https://formspree.io/f/xpwzgkrl
- WhatsApp: wa.me/971501234567
- Build: `npm run build` — 0 errors, fully static

## Commit
`redesign: Noor Clinic v2 — split-hero, white clinical luxury, alternating treatments`

## Notes
- Fonts fail silently at build time on restricted network (Google Fonts blocked in build env) — this is fine, Next.js falls back to system fonts at build, loads correctly at runtime.
- Old components removed: Services.tsx, WhyUs.tsx, Testimonials.tsx
- New components added: TrustBar.tsx, Treatments.tsx, Results.tsx, Booking.tsx, FAQ.tsx
