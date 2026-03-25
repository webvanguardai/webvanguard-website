# Javi Bento Portfolio — v4 Rebuild

**Date:** 2026-03-24
**URL:** https://javi-bento.vercel.app

## What was built
Rebuilt the Javi portfolio (4th iteration). Brief: "Caos pero ordenado. Claridad pero información."

## Design system
- **Cards:** Clean neumorphic — bg #F5F5F5, white border, subtle shadow, 28px radius. Never touched.
- **Tension:** Comes from BETWEEN cards — ghost numbers (01, 02), section labels outside cards, asymmetric grids
- **Background:** #E8E8E8
- **Copper accent:** #C8956B
- **Fonts:** Inter (900 for punch) + Playfair Display italic (for soul)

## Sections
1. **Hero** — Raw typography on bg, no card. Left: stacked type. Right: cinematic photo in card.
2. **Selected Work** — 3-col unequal grid (2fr 1.5fr 1fr). DJ card large, photo card medium, creative card typography-only.
3. **Philosophy** — Full-width card, centered Playfair quote. Ghost "02" behind.
4. **Selected Moments** — 3-col asymmetric grid, 4 image cards (card 4 spans 2 cols).
5. **Contact** — Dark card #0D0D0D, Playfair headline, neumorphic-dark buttons.

## Changes from v3
- Cards are now pristine (v3 broke card styling)
- Ghost numbers added (01, 02) as decorative tension
- Section labels sit OUTSIDE cards (editorial feel)
- Copper custom cursor follows mouse
- Scroll fade-up animations via IntersectionObserver
- No complex JS (no vinyl, no music player)

## Image used for DJ card
- Original URL 404'd: photo-1571266028243-3716f0b2b83c
- Replacement used: photo-1598387181032-a3103a2db5b3 ✓

## Vercel deployment
- Production: https://javi-bento.vercel.app
- Inspect: https://vercel.com/webvanguardai-2631s-projects/javi-bento
- Git: https://github.com/webvanguardai/bento-portfolio (branch: master, commit: ef2ac29)
