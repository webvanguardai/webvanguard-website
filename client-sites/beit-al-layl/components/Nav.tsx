"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#the-table", label: "The Table" },
    { href: "#menu", label: "Menu" },
    { href: "#story", label: "Story" },
    { href: "#reserve", label: "Reserve" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/95 backdrop-blur-sm border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-cormorant text-2xl text-gold tracking-widest font-medium">
          بيت الليل
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-inter text-xs uppercase tracking-[0.2em] text-cream/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reserve"
              className="font-inter text-xs uppercase tracking-[0.2em] bg-gold text-midnight px-5 py-2.5 hover:bg-gold-light transition-colors duration-300"
            >
              Book a Table
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream/70 hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-midnight border-t border-gold/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-inter text-xs uppercase tracking-[0.2em] text-cream/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="font-inter text-xs uppercase tracking-[0.2em] bg-gold text-midnight px-5 py-3 text-center hover:bg-gold-light transition-colors"
          >
            Book a Table
          </a>
        </div>
      )}
    </nav>
  );
}
