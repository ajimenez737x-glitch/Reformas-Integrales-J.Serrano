import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <a href="#top" className={`font-display text-2xl tracking-tight ${scrolled || open ? "text-foreground" : "text-background"}`}>
            J.<span style={{ color: "var(--sand)" }}>Serrano</span>
            <span className="ml-1 hidden text-xs tracking-[0.24em] uppercase opacity-70 md:inline">
              Almería
            </span>
          </a>

          <nav
            className={`hidden gap-9 md:flex ${scrolled ? "text-foreground" : "text-background"}`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium tracking-wider text-background uppercase transition-transform hover:scale-[1.02]"
            >
              Pedir presupuesto
            </a>
          </div>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className={`relative h-10 w-10 md:hidden ${scrolled || open ? "text-foreground" : "text-background"}`}
          >
            <span
              className={`absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-foreground text-background transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-28 pb-12">
          <nav className="flex flex-col gap-7">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl leading-none tracking-tight transition-transform duration-500"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: `${0.1 + i * 0.06}s`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <div className="hairline bg-background/20" />
            <a
              href="tel:+34660975375"
              className="block text-sm tracking-widest uppercase opacity-80"
            >
              +34 660 97 53 75
            </a>
            <a
              href="https://wa.me/34660975375"
              className="inline-flex w-full items-center justify-center rounded-full bg-background px-6 py-4 text-sm font-medium tracking-wider text-foreground uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
