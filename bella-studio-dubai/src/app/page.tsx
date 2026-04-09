"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    title: "Hair Styling & Cuts",
    desc: "From classic bobs to modern layers — precision cuts that frame your face beautifully.",
    icon: "✂️",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
  },
  {
    title: "Balayage & Color",
    desc: "Hand-painted highlights and rich color transformations using premium products.",
    icon: "🎨",
    img: "https://images.unsplash.com/photo-1562322140-8baeacacf4d3?w=600&h=400&fit=crop",
  },
  {
    title: "Keratin & Hair Botox",
    desc: "Smooth, frizz-free hair that lasts for months. Our signature treatment.",
    icon: "💎",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop",
  },
  {
    title: "Nails & Nail Art",
    desc: "Gelish, French, spa manicures & pedicures. Creative nail art that turns heads.",
    icon: "💅",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
  },
  {
    title: "Facials & Skin Care",
    desc: "Rejuvenating facials tailored to your skin type. Glow from within.",
    icon: "🌸",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
  },
  {
    title: "Bridal & Party Makeup",
    desc: "Look breathtaking on your special day. Professional makeup for every occasion.",
    icon: "👰",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=600&fit=crop",
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/xwkgdboo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setFormStatus("sent");
      form.reset();
    } catch {
      setFormStatus("idle");
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-charcoal tracking-wide">
            Bella <span className="text-gold">Studio</span>
          </a>
          <div className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase text-charcoal-light">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#booking" className="hover:text-gold transition-colors">Book Now</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <a
            href="#booking"
            className="bg-gold text-white px-5 py-2 text-sm font-sans tracking-wider uppercase hover:bg-gold-dark transition-colors"
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop"
            alt="Luxury beauty salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-cream" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-gold-light tracking-[0.3em] uppercase text-sm mb-6"
          >
            Discovery Gardens, Dubai
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Where Beauty <br />
            <span className="italic text-gold-light">Becomes Art</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-sans text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
          >
            A boutique beauty experience. Expert stylists, premium products, and an atmosphere designed to make you feel extraordinary.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-gold text-white px-8 py-4 font-sans tracking-widest uppercase text-sm hover:bg-gold-dark transition-all"
            >
              Book Your Visit
            </a>
            <a
              href="#services"
              className="border border-white/40 text-white px-8 py-4 font-sans tracking-widest uppercase text-sm hover:bg-white/10 transition-all"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Strip */}
      <section className="bg-cream py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="w-16 h-[1px] bg-gold mx-auto mb-8" />
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            A Sanctuary of Style
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-charcoal-light leading-relaxed text-lg">
            Nestled in the heart of Discovery Gardens, Bella Studio is more than a salon — it&apos;s a retreat.
            Our team of professional stylists combines international expertise with a warm, personalized approach
            to help you look and feel your absolute best. From transformative hair color to meticulous nail art,
            every detail matters.
          </motion.p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream-dark py-20 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="font-sans text-gold tracking-[0.3em] uppercase text-sm mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal">Our Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-cream rounded-sm overflow-hidden group hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                </div>
                <div className="p-6">
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{s.title}</h3>
                  <p className="font-sans text-charcoal-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-cream py-20 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="font-sans text-gold tracking-[0.3em] uppercase text-sm mb-3">Our Work</p>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal">The Gallery</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Salon work ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="bg-charcoal py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="w-16 h-[1px] bg-gold mx-auto mb-8" />
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl text-white mb-6">
            Ready for Your <span className="italic text-gold-light">Transformation?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Book your appointment today. Walk in as you are, walk out as the best version of yourself.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971585324519?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-8 py-4 font-sans tracking-widest uppercase text-sm hover:bg-gold-dark transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="tel:+971585324519"
              className="border border-gold/40 text-gold px-8 py-4 font-sans tracking-widest uppercase text-sm hover:bg-gold/10 transition-all"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form + Map */}
      <section id="contact" className="bg-cream py-20 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="font-sans text-gold tracking-[0.3em] uppercase text-sm mb-3">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal">Contact Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={fadeUp}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-sans text-sm text-charcoal-light tracking-wider uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 font-sans text-charcoal focus:border-gold outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-charcoal-light tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 font-sans text-charcoal focus:border-gold outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-charcoal-light tracking-wider uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 font-sans text-charcoal focus:border-gold outline-none transition-colors"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-charcoal-light tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 font-sans text-charcoal focus:border-gold outline-none transition-colors resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="bg-gold text-white px-8 py-4 font-sans tracking-widest uppercase text-sm hover:bg-gold-dark transition-all w-full disabled:opacity-50"
                >
                  {formStatus === "sent" ? "Message Sent ✓" : formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-10 space-y-4 font-sans text-charcoal-light text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gold">📍</span>
                  <span>Discovery Gardens, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold">📞</span>
                  <a href="tel:+971585324519" className="hover:text-gold transition-colors">+971 58 532 4519</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold">🕐</span>
                  <span>Open Daily: 10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp} className="h-[400px] md:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14445.037841773994!2d55.12778!3d25.0386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d5e2e03f5c3%3A0x3e3b0f0f0f0f0f0f!2sDiscovery%20Gardens%20-%20Dubai!5e0!3m2!1sen!2sae!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif text-2xl text-white mb-4">
            Bella <span className="text-gold">Studio</span>
          </p>
          <p className="font-sans text-white/40 text-sm tracking-wider">
            Discovery Gardens, Dubai · Open Daily 10AM–9PM
          </p>
          <div className="w-16 h-[1px] bg-gold/30 mx-auto my-6" />
          <p className="font-sans text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Bella Studio Dubai. All rights reserved.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971585324519?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
