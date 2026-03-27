# Paperclip Setup — Web Vanguard
**Date:** 2026-03-23

## Status: RUNNING ✅

## Config
- **Local:** http://127.0.0.1:3100
- **Tunnel (temporal):** https://wrapping-string-past-superb.trycloudflare.com
- **DB:** PostgreSQL 17 local (user: paperclip, db: paperclip, port: 5432)
- **Config:** /home/javibeat/.paperclip/instances/default/
- **Logs:** /tmp/paperclip2.log
- **Tunnel logs:** session gentle-trail (background)

## Startup commands
```bash
# Start postgres (if not running)
sudo pg_ctlcluster 17 main start

# Start Paperclip
nohup npx paperclipai run > /tmp/paperclip.log 2>&1 &

# Start tunnel
nohup cloudflared tunnel --url http://127.0.0.1:3100 --no-autoupdate > /tmp/cloudflared.log 2>&1 &
# Get URL from: grep "trycloudflare.com" /tmp/cloudflared.log
```

## Company: Web Vanguard
- **Company ID:** 26f2eadd-6e79-4e82-9165-ed743f8ef9af

## Agents
| Agent | Role | ID |
|-------|------|----|
| Claude CEO | ceo | 89077f7d-b19f-4bdb-b57e-e153a3cd6c31 |
| Claude CMO | cmo | 00a47910-4836-4d89-ae80-66230bb6a456 |
| Codex Engineer | engineer | 527675dd-35e9-4d4c-9694-c89bfa4d3945 |

## Issues created
- WEB-1: Research 20 Dubai businesses without websites
- WEB-2: Write 5 WhatsApp pitches with demo site URLs
- WEB-3: Build demo site for next F&B target
- WEB-4: Purchase domain webvanguard.co (**BLOCKED — needs Javi**)
- WEB-5: Set up hello@webvanguard.co email
- WEB-6: Blog post #2 — Dubai restaurants
- WEB-7: Blog post #3 — Dubai real estate
- WEB-8: Install Google Analytics (**BLOCKED — needs GA4 ID**)
- WEB-9: Submit sitemap to Google Search Console

## Workflow
- Actualizar al **final de cada día** (no en cada tarea, no en heartbeats)
- No es fuente de verdad — ROADMAP.md manda
- Si el tunnel no está activo, no importa — el servidor local sigue corriendo

## Note
Tunnel URL changes on restart. For permanent access, create a named Cloudflare Tunnel (needs CF account).
