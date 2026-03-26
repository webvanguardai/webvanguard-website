"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Reserve() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpzgkqvd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="reserve" ref={ref} className="py-32 md:py-40 px-6 bg-midnight-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: headline + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-6">
              Reservations
            </p>
            <h2
              className="font-cormorant font-light text-cream leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              The table
              <br />
              <em className="text-gold">is yours.</em>
            </h2>

            <div className="w-12 h-px bg-gold/40 mb-10" />

            <div className="space-y-6">
              <div>
                <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/971585324519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cormorant italic text-cream/80 text-xl hover:text-gold transition-colors duration-300"
                >
                  +971 4 000 0000
                </a>
              </div>

              <div>
                <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                  Hours
                </p>
                <p className="font-inter text-sm text-cream/50">
                  Open from sundown · Every day
                </p>
                <p className="font-inter text-xs text-cream/30 mt-1 italic">
                  Walk-ins welcome after 10pm
                </p>
              </div>

              <div>
                <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                  Location
                </p>
                <p className="font-inter text-sm text-cream/50">
                  Downtown Dubai · Near Dubai Mall
                </p>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="mt-10 overflow-hidden border border-gold/15">
              <iframe
                title="Beit Al Layl location — Downtown Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbebb3f7a3b032a53!2sDowntown%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[400px]">
                <div className="w-16 h-px bg-gold mb-8" />
                <h3
                  className="font-cormorant italic text-gold leading-tight mb-4"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  We&apos;ll see you tonight.
                </h3>
                <p className="font-inter text-sm text-cream/50">
                  Your reservation is confirmed. A warm table awaits.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border border-gold/20 text-cream placeholder-cream/25 font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full bg-transparent border border-gold/20 text-cream font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-300 [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                      Party Size
                    </label>
                    <select
                      name="party_size"
                      required
                      className="w-full bg-midnight border border-gold/20 text-cream font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value="9+">9+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="special_requests"
                    rows={4}
                    placeholder="Allergies, celebrations, seating preferences..."
                    className="w-full bg-transparent border border-gold/20 text-cream placeholder-cream/25 font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Hidden honeypot */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-midnight font-inter text-xs uppercase tracking-[0.25em] py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Confirm Reservation"}
                </button>

                <p className="font-inter text-[10px] text-cream/25 text-center">
                  Or WhatsApp us at +971 4 000 0000 · Walk-ins after 10pm
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
