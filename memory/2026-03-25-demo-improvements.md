# Demo Improvement Audit — 2026-03-25

All 4 targeted demos audited, improved, built (zero errors), and pushed to GitHub.
Zafran Barber: **skipped per client instruction** — client happy with current state.

---

## 1. Lumière Wellness
**Vertical:** Luxury spa, Dubai Marina  
**Files changed:** `components/Hero.tsx`, `components/Services.tsx`

### Problems identified
- Hero headline "Where beauty meets serenity" — textbook spa cliché, could be any spa on earth
- Subline used three wellness clichés back-to-back: "elevated sanctuary", "world-class", "transformation"
- CTA "Reserve Your Experience" — generic luxury-service filler
- Services section titled "Our Treatments" / "Treatments crafted for you, by masters" — sounded like a Groupon listing

### Changes made
| Element | Before | After |
|---|---|---|
| Hero headline | "Where beauty meets serenity" | **"Silence is the first treatment."** |
| Hero subline | "An elevated sanctuary...transformation" | "Forty curated rituals. Eighteen resident therapists. One private space in Dubai Marina where your hour belongs entirely to you." |
| Primary CTA | "Reserve Your Experience" | **"Book a Ritual"** |
| Secondary CTA | "Explore Treatments" | "Discover the Treatments" |
| Stats labels | "Clients Served", "Expert Therapists" | "Guests Welcomed", "Resident Therapists" |
| Services section label | "Our Treatments" | **"The Rituals"** |
| Services headline | "Treatments crafted for you, by masters" | **"Forty rituals. One intention."** |
| Services body | Generic benefits list | "Every session begins with a consultation. We read your skin, your stress, your silence — then select the ritual that answers it." |

---

## 2. Qahwa House
**Vertical:** Specialty coffee roastery, d3  
**Files changed:** `app/page.tsx`

### Problems identified
- Hero subline ended with "A warm corner of Dubai where every visit feels like a ritual" — warm but not specific, could be a tea shop
- Menu section titled "Every cup, a story" — overused coffee marketing phrase
- "Roasted in-house, served with pride" — competent but forgettable
- Gallery section "Behind the counter" — fine but not provocative

### Changes made
| Element | Before | After |
|---|---|---|
| Hero subline ending | "...a warm corner where every visit feels like a ritual" | **"You can smell the Wednesday roast from the street. Come find out why."** |
| Menu section label | "Our Menu" | **"The Roast"** |
| Menu headline | "Every cup, a story." | **"What's on the bar today."** |
| In-text CTA | "Order beans to take home" | **"Take home a bag"** |
| Middle section headline | "Roasted in-house, served with pride." | **"Ethiopia. Yemen. Your cup, this morning."** |
| Middle section body | Generic farm-to-cup description | Specific: Probat roaster, Monday-Friday schedule, by-Saturday-in-your-cup chain |
| Gallery label | "Gallery" | **"In the Cup"** |
| Gallery headline | "Behind the counter." | **"This is what obsession looks like."** |
| Gallery subline | "Every cup is a tiny work of art..." | "From origin to extraction, every variable is controlled." |
| Testimonials label | "What People Say" | **"The Regulars"** |
| Testimonials headline | "Our regulars say it best." | **"They came once. They never stopped."** |

---

## 3. Levant & Co
**Vertical:** Lebanese fine dining, DIFC  
**Files changed:** `app/page.tsx`

### Problems identified
- Hero headline "Where the Levant speaks" — abstract, could mean anything, no sensory hook
- Hero subline described logistics ("centuries of heritage, contemporary elegance") instead of food
- CTAs "Reserve a Table" / "View Menu" — interchangeable with every restaurant site
- Menu section "Our Menu" / "Culinary Journey" — zero personality
- About section "Born in Beirut, crafted for Dubai" — used by half of Dubai's Lebanese restaurants
- Gallery "Feast Your Eyes" — overused to the point of parody in food marketing
- Testimonials "Voices of the Table" — forgettable

### Changes made
| Element | Before | After |
|---|---|---|
| Hero headline | "Where the Levant speaks" | **"The table is the ceremony."** |
| Hero subline | Generic heritage + elegance description | Specific dishes: Ouzi slow-roasted for six hours, Kibbeh Nayeh to order, "The Knafeh you'll think about on the drive home" |
| Primary CTA | "Reserve a Table" | **"Claim Your Table"** |
| Secondary CTA | "View Menu" | "Explore the Menu" |
| Menu label | "Culinary Journey" | **"The Kitchen"** |
| Menu headline | "Our Menu" | **"Order with intention."** |
| Menu subline | Generic heritage description | "These are not dishes — they are decisions. Each plate carries a name, a region, and a reason it belongs on this table." |
| About headline | "Born in Beirut, crafted for Dubai" | **"Four generations. One table in DIFC."** |
| About body | Abstract tradition claim | Specific: grandmother making kibbeh in the Chouf mountains, mortar, spice ratios; bread 12 minutes after you sit down |
| Gallery label | "Visual Journey" | **"At the Table"** |
| Gallery headline | "Feast Your Eyes" | **"The food speaks first."** |
| Testimonials label | "Guest Reviews" | **"Who Comes Back"** |
| Testimonials headline | "Voices of the Table" | **"The second visit says everything."** |
| Reservation headline | "Reserve Your Table" | **"Your table is waiting."** |
| Reservation body | Generic walk-in info | "Walk-ins welcome — but the window seat goes fast on weeknights." |

---

## 4. Céleste Events
**Vertical:** Luxury event design, d3  
**Files changed:** `app/page.tsx`

### Problems identified
- Hero headline "Where moments become legacy" — wedding-Instagram cliché, no creative edge
- Hero subline was a logistics list, not an art-direction invitation
- CTA "Start Your Vision" and "View Portfolio" — generic luxury CTAs
- About section "Elegance is in the details" — used by everyone from hotel chains to jewellers
- Services section "What We Create / Our Services" — zero character
- Service descriptions described operations (coordination, management) instead of the design experience
- Gallery "Our Portfolio" — bare minimum
- Process "The Process" — placeholder title
- Testimonials "Words of Trust" — weak
- Contact headline "Let's create something extraordinary" — so overused it's invisible
- Form CTA "Request Consultation" — clinical, not evocative

### Changes made
| Element | Before | After |
|---|---|---|
| Hero headline | "Where moments become legacy" | **"We don't plan events. We design them."** |
| Hero subline | Logistics list | "Floral architecture. Bespoke lighting narratives. Tables that make guests stop mid-conversation to look. Every element considered — nothing left to chance." |
| Primary CTA | "Start Your Vision" | **"Begin Your Brief"** |
| Secondary CTA | "View Portfolio" | **"See the Work"** |
| About label | "Our Philosophy" | **"The Studio"** |
| About headline | "Elegance is in the details" | **"Most planners coordinate. We art-direct."** |
| About body | Generic founder story + team description | Specific: Layla trained with floral architects and set designers; "if a guest can't remember how a space made them feel, we haven't done our job" |
| Services label | "What We Create" | **"The Canvas"** |
| Services headline | "Our Services" | **"Every occasion is a different brief."** |
| Wedding desc | Logistics + coordination language | "Guests don't just attend. They remember." |
| Corporate desc | Brand elevation boilerplate | "Translate brand identity into spatial design — from the arrival moment to the last lighting cue" |
| Brand launch desc | Generic first impressions | "The scent, the sound, the reveal sequence, the press photograph. Everything intentional." |
| Private celebrations | Generic intimate + extraordinary | "The guest count never determines the standard." |
| Gallery headline | "Our Portfolio" | **"Rooms we have transformed."** |
| Process headline | "The Process" | **"From brief to breathtaking."** |
| Testimonials headline | "Words of Trust" | **"They trusted us with the day that mattered."** |
| Contact headline | "Let's create something extraordinary" | **"Tell us what you're imagining."** |
| Contact body | Generic conversation invitation | "We take on a limited number of events each year. The best events start before anything is decided." |
| Form CTA | "Request Consultation" | **"Send Your Brief"** |

---

## Build Results
All 4 demos built with `npm run build` — zero errors, zero warnings.

| Demo | Build | Push |
|---|---|---|
| lumiere-wellness | ✅ | ✅ main |
| qahwa-house | ✅ | ✅ master |
| levant-co | ✅ | ✅ master |
| celeste-events | ✅ | ✅ master |
| zafran-barber | skipped (client happy) | — |

---

## Design Principles Applied
- **Copy that sells, not describes** — every headline now provokes a reaction or image
- **Specificity over category** — dishes named, process steps detailed, facts replace adjectives
- **CTA as invitation** — "Begin Your Brief", "Claim Your Table", "Book a Ritual" replace generic defaults
- **Section titles as micro-headlines** — "The Rituals", "The Kitchen", "The Canvas", "Who Comes Back"
- The core template structure (hero → menu/services → about → gallery → testimonials → contact) remains intact — only the voice changed
