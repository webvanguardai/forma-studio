export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-0.5">
          <span className="font-serif text-xl tracking-[0.15em] uppercase font-semibold text-charcoal">
            FORMA
          </span>
          <span className="font-serif text-base font-light text-charcoal/70">
            Studio
          </span>
        </a>

        {/* Links */}
        <div className="flex flex-wrap gap-8">
          {["Work", "Services", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-charcoal/40 hover:text-charcoal transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-charcoal/30 font-light">
          © 2026 Forma Studio. Dubai, UAE.
        </p>
      </div>
    </footer>
  );
}
