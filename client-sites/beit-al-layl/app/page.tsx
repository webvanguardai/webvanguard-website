"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ─── Animation helpers ─── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */
const menuCategories = [
  {
    name: "Mezze",
    dishes: [
      {
        name: "Hummus Beiruti",
        desc: "Silky chickpea purée, tahini, warm pine nuts, olive oil drizzle",
        price: 38,
      },
      {
        name: "Fattoush Garden",
        desc: "Crisp greens, sumac vinaigrette, pomegranate seeds, fried pita shards",
        price: 42,
      },
      {
        name: "Muhammara",
        desc: "Roasted red pepper & walnut dip, pomegranate molasses, Aleppo chili",
        price: 40,
      },
    ],
  },
  {
    name: "Mains",
    dishes: [
      {
        name: "Lamb Kofta Tagine",
        desc: "Spiced lamb, roasted tomato sauce, soft egg, fresh herbs, charcoal bread",
        price: 95,
      },
      {
        name: "Sea Bass Sayadieh",
        desc: "Pan-seared sea bass, caramelized onion rice, toasted almonds, tahini",
        price: 110,
      },
      {
        name: "Chicken Shawarma Royale",
        desc: "24-hour marinated chicken, garlic whip, pickled turnips, handmade flatbread",
        price: 85,
      },
    ],
  },
  {
    name: "Charcoal Grill",
    dishes: [
      {
        name: "Mixed Grill Platter",
        desc: "Lamb chops, chicken tawook, kofta, grilled vegetables, three sauces",
        price: 165,
      },
      {
        name: "Wagyu Arayes",
        desc: "Charcoal-grilled pita stuffed with spiced wagyu, pomegranate yogurt",
        price: 78,
      },
      {
        name: "Whole Grilled Prawns",
        desc: "Tiger prawns, chermoula butter, charred lemon, herb salad",
        price: 120,
      },
    ],
  },
  {
    name: "Desserts",
    dishes: [
      {
        name: "Knafeh",
        desc: "Crispy semolina pastry, melted Nabulsi cheese, orange blossom syrup, pistachio",
        price: 48,
      },
      {
        name: "Rose Water Panna Cotta",
        desc: "Delicate rose cream, crushed pistachios, raspberry coulis",
        price: 45,
      },
      {
        name: "Baklava Selection",
        desc: "House-made assortment — walnut, pistachio, cashew — with Turkish coffee",
        price: 52,
      },
    ],
  },
];

const specialsDishes = [
  "Lamb Arayes",
  "Truffle Hummus",
  "Grilled Halloumi",
  "Wagyu Kofta",
  "Saffron Prawns",
  "Charcoal Aubergine",
  "Pistachio Knafeh",
  "Spiced Fig Salad",
];

const experiences = [
  {
    title: "The Mezze Ritual",
    desc: "A curated spread of 12 dishes, served family-style. The way it's meant to be.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="20" cy="20" r="16" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="2" />
      </svg>
    ),
  },
  {
    title: "The Charcoal Grill",
    desc: "Open flame, premium cuts, centuries of technique. Every bite tells a story.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.5}>
        <path d="M10 30 L20 10 L30 30" />
        <path d="M14 30 L20 18 L26 30" />
        <line x1="8" y1="34" x2="32" y2="34" />
      </svg>
    ),
  },
  {
    title: "The Rooftop Terrace",
    desc: "Skyline views, warm evenings, craft cocktails. Dubai's best-kept secret.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 28 L20 12 L34 28" />
        <rect x="16" y="22" width="8" height="10" />
        <line x1="4" y1="34" x2="36" y2="34" />
      </svg>
    ),
  },
];

/* ─── Page ─── */
export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-playfair text-2xl text-charcoal tracking-tight">
            Beit Al Layl
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm tracking-wide text-charcoal/70 hover:text-terracotta transition-colors">
              Menu
            </a>
            <a href="#story" className="text-sm tracking-wide text-charcoal/70 hover:text-terracotta transition-colors">
              Story
            </a>
            <a
              href="#reserve"
              className="text-sm px-5 py-2.5 bg-terracotta text-white rounded-full hover:bg-terracotta-dark transition-colors"
            >
              Reserve
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-transform ${
                mobileMenu ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-opacity ${
                mobileMenu ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-transform ${
                mobileMenu ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-offwhite border-t border-cream px-6 py-6 flex flex-col gap-4"
          >
            <a href="#menu" onClick={() => setMobileMenu(false)} className="text-lg text-charcoal">
              Menu
            </a>
            <a href="#story" onClick={() => setMobileMenu(false)} className="text-lg text-charcoal">
              Story
            </a>
            <a
              href="#reserve"
              onClick={() => setMobileMenu(false)}
              className="text-center px-5 py-3 bg-terracotta text-white rounded-full"
            >
              Reserve
            </a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Bright restaurant interior with natural light"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Light warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-offwhite/60 via-offwhite/30 to-offwhite/70" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[1.1] mb-6"
            >
              Where Beirut
              <br />
              Meets the Table.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto"
            >
              Modern Lebanese cuisine in the heart of Downtown Dubai.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#reserve"
                className="px-8 py-3.5 bg-terracotta text-white rounded-full text-sm tracking-wide hover:bg-terracotta-dark transition-colors"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="px-8 py-3.5 border-2 border-charcoal text-charcoal rounded-full text-sm tracking-wide hover:bg-charcoal hover:text-offwhite transition-colors"
              >
                See the Menu
              </a>
            </motion.div>
          </div>
        </section>

        {/* ─── TONIGHT'S SPECIALS TICKER ─── */}
        <section className="py-5 bg-cream overflow-hidden">
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {[...specialsDishes, ...specialsDishes].map((dish, i) => (
                <span key={i} className="inline-flex items-center mx-6 md:mx-10">
                  <span className="font-playfair text-lg md:text-xl text-charcoal">
                    {dish}
                  </span>
                  <span className="ml-6 md:ml-10 text-terracotta text-xl">✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MENU ─── */}
        <section id="menu" className="py-20 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">
                Our Menu
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal mb-16">
                Flavours of the Levant
              </h2>
            </FadeIn>

            {menuCategories.map((cat, catIdx) => (
              <FadeIn key={cat.name} delay={catIdx * 0.1}>
                <div className="mb-16">
                  <h3 className="font-playfair text-2xl md:text-3xl text-olive mb-8 pb-3 border-b border-cream">
                    {cat.name}
                  </h3>
                  <div className="space-y-6">
                    {cat.dishes.map((dish) => (
                      <div
                        key={dish.name}
                        className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4"
                      >
                        <h4 className="font-playfair text-xl text-charcoal flex-shrink-0">
                          {dish.name}
                        </h4>
                        <span className="hidden md:block flex-grow border-b border-dotted border-charcoal/20" />
                        <span className="text-terracotta font-dm text-sm font-medium flex-shrink-0">
                          AED {dish.price}
                        </span>
                        <p className="text-charcoal/60 text-sm md:basis-full md:order-last">
                          {dish.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ─── STORY ─── */}
        <section id="story" className="py-20 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <FadeIn>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">
                    Our Story
                  </p>
                  <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-8">
                    &ldquo;Every dish
                    <br />
                    carries a memory.&rdquo;
                  </blockquote>
                  <p className="text-charcoal/70 leading-relaxed mb-6">
                    Beit Al Layl was born from a simple truth — the best meals are the ones
                    shared around a table with people you love. Our recipes travel from the
                    kitchens of Beirut, passed through generations, refined but never
                    reinvented.
                  </p>
                  <p className="text-charcoal/70 leading-relaxed">
                    In the heart of Downtown Dubai, we&apos;ve built a home for these
                    flavours. A place where the warmth of Lebanese hospitality meets
                    contemporary craft. Every ingredient is sourced with care, every plate
                    tells a story, and every evening feels like coming home.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                    alt="Beautifully plated Lebanese mezze spread"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4 text-center">
                The Experience
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-16 text-center">
                Three Ways to Dine
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-12">
              {experiences.map((exp, i) => (
                <FadeIn key={exp.title} delay={i * 0.15}>
                  <div className="text-center">
                    <div className="text-terracotta mb-6 flex justify-center">
                      {exp.icon}
                    </div>
                    <h3 className="font-playfair text-xl md:text-2xl text-charcoal mb-4">
                      {exp.title}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed">{exp.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESERVE ─── */}
        <section id="reserve" className="py-20 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4 text-center">
                Reserve
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-16 text-center">
                Your Table Awaits
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12">
              <FadeIn>
                <form
                  action="https://formspree.io/f/xqabpnvw"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors"
                    />
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <select
                      name="guests"
                      required
                      className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors"
                    >
                      <option value="">Guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="9+">9+ Guests</option>
                    </select>
                    <select
                      name="time"
                      required
                      className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors"
                    >
                      <option value="">Preferred Time</option>
                      {["12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map(
                        (t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Special requests..."
                    className="w-full px-5 py-3.5 bg-offwhite border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-terracotta transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-terracotta text-white rounded-full text-sm tracking-wide hover:bg-terracotta-dark transition-colors"
                  >
                    Request Reservation
                  </button>
                </form>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://wa.me/971585324519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-charcoal/10 rounded-full text-sm text-charcoal hover:border-terracotta hover:text-terracotta transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl overflow-hidden h-full min-h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjkiTiA1NcKwMTYnMjcuOCJF!5e0!3m2!1sen!2sae!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 350 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beit Al Layl location — Downtown Dubai"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 bg-offwhite border-t border-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-playfair text-xl text-charcoal">
            Beit Al Layl
          </a>
          <div className="flex items-center gap-6 text-sm text-charcoal/60">
            <a href="#menu" className="hover:text-terracotta transition-colors">
              Menu
            </a>
            <a href="#story" className="hover:text-terracotta transition-colors">
              Story
            </a>
            <a href="#reserve" className="hover:text-terracotta transition-colors">
              Reserve
            </a>
          </div>
          <p className="text-xs text-charcoal/40">
            © 2026 Beit Al Layl. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ─── WHATSAPP FLOATING BUTTON ─── */}
      <a
        href="https://wa.me/971585324519"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-terracotta text-white rounded-full flex items-center justify-center shadow-lg hover:bg-terracotta-dark transition-colors hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
