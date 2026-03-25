export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo + address */}
          <div>
            <p className="font-cormorant text-3xl text-gold tracking-widest mb-3">
              بيت الليل
            </p>
            <p className="font-inter text-xs text-cream/30 tracking-wider">
              Beit Al Layl
            </p>
            <p className="font-inter text-xs text-cream/30 mt-4 leading-loose">
              Downtown Dubai · Near Dubai Mall<br />
              Open from sundown, every night.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="mailto:hello@beitllayl.com"
              className="font-inter text-xs text-cream/40 hover:text-gold transition-colors tracking-wider"
            >
              hello@beitllayl.com
            </a>
            <a
              href="https://instagram.com/beitallayldubai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs text-cream/40 hover:text-gold transition-colors tracking-wider"
            >
              @beitallayldubai
            </a>
            <a
              href="https://wa.me/97140000000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs text-cream/40 hover:text-gold transition-colors tracking-wider"
            >
              +971 4 000 0000
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[10px] text-cream/20 tracking-widest">
            © 2026 Beit Al Layl · All rights reserved
          </p>
          <p className="font-inter text-[10px] text-cream/20 tracking-widest">
            Website by{" "}
            <a
              href="https://webvanguard.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/40 hover:text-gold transition-colors"
            >
              Web Vanguard
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
