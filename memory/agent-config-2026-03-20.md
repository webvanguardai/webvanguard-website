# WebVanguard Agent Ecosystem (CEO Configuration)

## Models (LM Studio PC)
- `lmstudio-pc/qwen3-7b-code` → Qwen3-Code (primary for code/automation)
- `lmstudio-pc/qwen3-7b-instruct` → Qwen3-Instruct (research, strategy, content)

## Agent Pool (subagents)
Max concurrent: 8

## CEO Routine
- Daily autonomous session at 8am (Asia/Dubai) via cron
- Heartbeat every ~30min (8am-10pm) for continuous motion
- Spawns specialist agents on demand:
  - Researcher (trends, competitors, SEO)
  - Analyst (metrics, UX, conversion)
  - Creator (content, copy, outreach)
  - Engineer (code, integrations, automations)

## Current Focus (2026-03-20)
1. Deploy Vercel with real data sources (YouTube API, Google Sheets)
2. UX improvements on new pages (admin, metrics, booking, brief)
3. Conversion optimization (CTA clarity, social proof, trust signals)
4. Content pipeline (blog series, YouTube Shorts funnel)

## Rules
- Main assistant (Pi) supervises only; heavy lifting by PC agents.
- Brave Search fallback when SearXNG unavailable.
- Report failures immediately; do not hide issues.
- Update SOUL.md + MEMORY.md with learnings.
