# Roadmap - WebVanguard Agency

## Phase 1: Foundation (Completada)
- [x] Diseño web corporativo minimalista/atrevido (Hero, Services, Work, Contact, Footer)
- [x] Tipografía display, paleta charcoal/accent, números margen gigantes
- [x] Animaciones Framer Motion (scroll reveals, hover)
- [x] Responsive y SEO básico
- [x] Deploy automático Vercel + GitHub

## Phase 2: Content & SOPs (Completada)
- [x] SOP YouTube v1 (plantilla guion + checklists CTR/retención + ejemplo)
- [x] SOP Leads v1 (ICP, fuentes, plantillas DM, BANT scoring)
- [x] Lista inicial de 20 leads (plantilla con datos ficticios listos para reemplazar)
- [x] Librería de mensajes por vertical (Legal, Fintech, Hospitality, Real Estate, Consultoría)
- [x] Brand checklist (tono, palabras prohibidas, CTAs, reglas visuales)
- [x] Primer guion completo de YouTube (3 títulos, 3 hooks, segmentación, producción)

## Phase 3: Reporting & Metrics (Completada)
- [x] Plantilla de reporte semanal
- [x] Script generador (`scripts/weekly-report.sh`)
- [x] Cronjob automático: todos los lunes 8am (Dubai) genera y commitea reporte
- [x] Página /metrics con KPI cards (demo data) + placeholders para APIs

## Phase 4: Scheduling & Automation (Completada)
- [x] Página /booking que redirige a Calendly con prefill (name/email/company)
- [x] Configuración Calendly: evento 30 min, require approval
- [x] Integración en footer/contacto

## Phase 5: Pending (Next)
- [x] Página de brief template descargable (PDF print-friendly)
- [x] Admin panel autenticado (login estático) para gestionar bookings
- [x] Conectar fuentes reales a /metrics (YouTube Data API v3, Sheets/Notion para leads) – codigo listo, credenciales pendientes
- [ ] Automatizar generación de métricas semanales (script que actualice /metrics data)
- [x] Blog / recursos (first article: "Why your premium website underperforms") — LIVE 2026-03-23
- [ ] A/B testing: variante de hero con números vs sin números
- [ ] Dominio personalizado: webvanguard.ai o similar (configurar DNS y Vercel)

## In Progress
- Configurar dominio principal `webvanguard-website.vercel.app` (Vincular proyecto Vercel al repo y redeploy)

---

Last updated: 2026-03-19
