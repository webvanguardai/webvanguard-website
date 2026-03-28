# OUTREACH QA — Zero Error Protocol
## "If in doubt, don't send."

---

## PRE-SEND CHECKLIST (ejecutar en orden, sin saltarse pasos)

### 1. VERIFICACIÓN TÉCNICA
- [ ] Demo URL responde 200 OK → `curl -s -o /dev/null -w "%{http_code}" [URL]`
- [ ] Proposal URL carga en browser (GitHub Pages)
- [ ] Demo es del vertical correcto (spa demo → spa lead, etc.)

### 2. VERIFICACIÓN DEL LEAD
- [ ] Email del lead existe → dominio MX válido, no typo
- [ ] Web del lead revisada HOY (no de memoria de otro día)
- [ ] Pain points son específicos a ese negocio (no copy-paste genérico)
- [ ] No hay email previo enviado a este negocio (revisar /Enviado Zoho)

### 3. VERIFICACIÓN DEL EMAIL
- [ ] Nombre del negocio correcto en subject y body
- [ ] Demo URL en el email coincide con el demo real
- [ ] Proposal URL en el email coincide con la propuesta real
- [ ] Sin typos en el nombre del contacto
- [ ] El pain point mencionado es real (verificado en su web)

### 4. REGLAS DE ORO

> **Una empresa = un email = un demo = un vertical**
> Si cualquiera de los 3 no coincide, no se envía.

> **Canal único: EMAIL.**
> Sin WhatsApp, sin DMs, sin vídeos, sin Loom. Solo email.

> **Follow-up: 1 solo, a los 5 días.**
> Sin respuesta → lead ❌ Discarded. No se insiste más. Nunca.

---

## SCRIPT DE VERIFICACIÓN RÁPIDA

```bash
# Antes de enviar, ejecutar:
DEMO_URL="https://xxx.vercel.app"
PROPOSAL_URL="https://webvanguardai.github.io/proposal-xxx/"
LEAD_EMAIL="contact@business.com"

echo "Demo:" && curl -s -o /dev/null -w "%{http_code}\n" "$DEMO_URL"
echo "Proposal:" && curl -s -o /dev/null -w "%{http_code}\n" "$PROPOSAL_URL"
echo "Email domain MX:" && dig MX $(echo $LEAD_EMAIL | cut -d@ -f2) +short | head -3
```

Resultado esperado: `200` + `200` + MX records existentes.

---

## ERRORES A EVITAR (ya cometidos o en riesgo)

| Error | Consecuencia | Prevención |
|-------|-------------|------------|
| Demo URL 404 | Lead hace clic, página rota, pérdida de credibilidad | Verificar 200 OK antes de enviar |
| Demo mal asignado (spa → barbershop) | Email genérico, sin personalización | Revisar que demo coincide con vertical |
| Email incorrecto/rebota | Zoho blacklist, reputación dañada | Verificar dominio con dig MX |
| Doble email al mismo lead | Spam, quema el contacto | Revisar /Enviado antes de enviar |
| Pain point inventado | Lead responde "eso no es correcto" | Solo pain points verificados en su web ese día |
| Nombre del negocio erróneo | Falta de profesionalismo básico | Copiar exactamente del sitio web del lead |

---

## FLUJO CORRECTO (de principio a fin)

```
1. FIND — Identificar lead
         ↓
2. ANALYZE — Revisar su web HOY
         ↓
3. BUILD DEMO — Construir demo del vertical correcto
         ↓
4. BUILD PROPOSAL — Crear propuesta específica para ese lead
         ↓
5. VERIFY — curl en demo + proposal. Ambas 200 OK.
         ↓
6. WRITE — Redactar email con pain points reales + links verificados
         ↓
7. CHECK — Abrir cada URL del email manualmente y confirmar
         ↓
8. SEND — Enviar por Zoho
         ↓
9. LOG — Añadir al pipeline.md
```

⛔ NO escribir el email hasta que demo Y propuesta existan y estén verificadas.

---

## LOG DE ERRORES ANTERIORES

| Fecha | Error | Lección |
|-------|-------|---------|
| 2026-03-25 | Demo `leila-dental` desplegado con URL incorrecta (`leila-dental` vs `leila-hariri-dental`) | Siempre verificar alias Vercel |
| 2026-03-28 | Atlas Legal deployments en 401 (protected) durante días | Verificar alias público post-deploy |

---

*Regla final: La velocidad no vale si el email llega roto, al negocio equivocado, o con el demo caído.*

---

## LOG DE ERRORES (actualizado 2026-03-28)

| Fecha | Error | Lección |
|-------|-------|---------|
| 2026-03-25 | Demo `leila-dental` con URL incorrecta | Verificar alias Vercel post-deploy |
| 2026-03-28 | Atlas Legal en 401 durante días | Verificar URL pública post-deploy |
| 2026-03-28 | **Email a Studio ALOI con proposal de forma-studio (interior design)**. Tuve que mandar email de corrección. | **Leer el email completo en voz alta antes de enviar. Verificar CADA link manualmente con curl.** |

## REGLA AÑADIDA (post-error 28 Mar)

> **Antes de hacer clic en Enviar, abrir cada URL del email en el navegador y confirmar que es el correcto.**
> Un email de corrección = credibilidad dañada. No hay segunda oportunidad con un lead frío.
