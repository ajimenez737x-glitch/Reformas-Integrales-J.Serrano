import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: `font-display text-2xl tracking-tight ${scrolled || open ? "text-foreground" : "text-background"}`, children: [
            "J.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--sand)" }, children: "Serrano" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 hidden text-xs tracking-[0.24em] uppercase opacity-70 md:inline", children: "Almería" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "nav",
            {
              className: `hidden gap-9 md:flex ${scrolled ? "text-foreground" : "text-background"}`,
              children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "link-underline text-sm font-medium",
                  children: l.label
                },
                l.href
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contacto",
              className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium tracking-wider text-background uppercase transition-transform hover:scale-[1.02]",
              children: "Pedir presupuesto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "aria-label": "Abrir menú",
              onClick: () => setOpen((v) => !v),
              className: `relative h-10 w-10 md:hidden ${scrolled || open ? "text-foreground" : "text-background"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${open ? "rotate-45" : "-translate-y-1.5"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${open ? "-rotate-45" : "translate-y-1.5"}`
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `fixed inset-0 z-40 bg-foreground text-background transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col px-8 pt-28 pb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-7", children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "font-display text-5xl leading-none tracking-tight transition-transform duration-500",
              style: {
                transform: open ? "translateY(0)" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${0.1 + i * 0.06}s`
              },
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline bg-background/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+34660975375",
                className: "block text-sm tracking-widest uppercase opacity-80",
                children: "+34 660 97 53 75"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/34660975375",
                className: "inline-flex w-full items-center justify-center rounded-full bg-background px-6 py-4 text-sm font-medium tracking-wider text-foreground uppercase",
                children: "WhatsApp"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal${delayClass} ${className}`, children });
}
const beforeImg = "/assets/new_before-BdXpxzvz.png";
const afterImg = "/assets/new_after-CK524hPy.png";
function BeforeAfter() {
  const [pos, setPos] = reactExports.useState(50);
  const containerRef = reactExports.useRef(null);
  const dragging = reactExports.useRef(false);
  const updateFromClientX = reactExports.useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative aspect-[3/2] w-full overflow-hidden select-none cursor-ew-resize bg-black",
      onPointerDown: (e) => {
        dragging.current = true;
        e.target.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      },
      onPointerMove: (e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      },
      onPointerUp: (e) => {
        dragging.current = false;
        if (e.target.hasPointerCapture(e.pointerId)) {
          e.target.releasePointerCapture(e.pointerId);
        }
      },
      onPointerCancel: (e) => {
        dragging.current = false;
        if (e.target.hasPointerCapture(e.pointerId)) {
          e.target.releasePointerCapture(e.pointerId);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: afterImg,
            alt: "Cocina renovada por Reformas Integrales J.Serrano",
            className: "absolute inset-0 h-full w-full object-cover pointer-events-none",
            draggable: false,
            loading: "lazy",
            width: 1400,
            height: 960
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { width: `${pos}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: beforeImg,
                alt: "Cocina antes de la reforma",
                className: "absolute inset-0 h-full w-full object-cover pointer-events-none",
                draggable: false,
                style: { width: `${100 / pos * 100}%`, maxWidth: "none" },
                loading: "lazy",
                width: 1400,
                height: 960
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow absolute top-5 left-5 rounded-sm bg-foreground/80 px-3 py-1.5 text-background backdrop-blur-sm", children: "Antes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow absolute top-5 right-5 rounded-sm bg-background/80 px-3 py-1.5 text-foreground backdrop-blur-sm", children: "Después" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-y-0 w-px bg-background",
            style: { left: `${pos}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/20 bg-background shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M9 6l-6 6 6 6M15 6l6 6-6 6",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ) }) })
          }
        )
      ]
    }
  );
}
const items = [
  {
    q: "¿Hacéis presupuestos sin compromiso?",
    a: "Sí. Visitamos tu vivienda, escuchamos tu proyecto y elaboramos un presupuesto detallado y transparente, totalmente gratuito y sin compromiso."
  },
  {
    q: "¿Trabajáis fuera de Abla?",
    a: "Trabajamos en Abla y en toda la provincia de Almería, incluyendo capital, comarcas del Almanzora, Levante y Poniente almeriense."
  },
  {
    q: "¿Realizáis reformas integrales?",
    a: "Sí. Coordinamos toda la reforma de principio a fin: derribos, albañilería, fontanería, electricidad, suelos, alicatados, carpintería y acabados."
  },
  {
    q: "¿Coordináis todos los gremios?",
    a: "Sí. Eres tu único interlocutor: nosotras coordinamos a todos los profesionales y supervisamos cada fase para asegurar calidad y plazos."
  },
  {
    q: "¿Cuánto tarda una reforma?",
    a: "Depende del alcance. Un baño puede estar listo en 2–3 semanas, una cocina en 3–5, y una reforma integral entre 6 y 12 semanas. Te damos una planificación clara desde el primer día."
  }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: items.map((it, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen(isOpen ? null : i),
          className: "group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors",
          "aria-expanded": isOpen,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl leading-tight md:text-3xl", children: it.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ${isOpen ? "rotate-45 bg-foreground text-background" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-px w-3.5 bg-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-3.5 w-px bg-current" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          style: {
            gridTemplateRows: isOpen ? "1fr" : "0fr"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground", children: it.a }) })
        }
      )
    ] }, i);
  }) });
}
const heroImg = "/assets/hero-DzpyerP5.jpg";
const kitchenImg = "/assets/service-kitchen-urVOsY4Z.jpg";
const bathroomImg = "/assets/service-bathroom-SeGSdFLL.jpg";
const floorsImg = "/assets/service-floors-DdQv6NUj.jpg";
const teamNewImg = "/assets/team_new-CIL_VAQz.png";
const mapImg = "/assets/map_new-CnGavohi.png";
const ctaImg = "/assets/cta-bg-tL9o6GuA.jpg";
const services = [{
  title: "Reformas integrales",
  desc: "Transformamos tu vivienda al completo, coordinando todos los gremios y supervisando cada acabado.",
  img: heroImg
}, {
  title: "Reformas de cocina",
  desc: "Cocinas funcionales y elegantes, con materiales nobles y distribuciones pensadas para tu día a día.",
  img: kitchenImg
}, {
  title: "Reformas de baño",
  desc: "Baños minimalistas tipo spa, con duchas a ras de suelo, microcemento y grifería de diseño.",
  img: bathroomImg
}, {
  title: "Suelos y pavimentos",
  desc: "Tarima, microcemento, gres porcelánico o piedra natural. Instalación perfecta y duradera.",
  img: floorsImg
}];
const trust = [{
  k: "+7",
  v: "Reseñas 5★ verificadas"
}, {
  k: "100%",
  v: "Compromiso y dedicación"
}, {
  k: "1:1",
  v: "Atención cercana y directa"
}, {
  k: "360°",
  v: "Reformas integrales llave en mano"
}];
const reasons = [["01", "Atención personalizada", "Te acompañamos antes, durante y después de la obra."], ["02", "Acabados de alta calidad", "Materiales nobles y mano de obra perfeccionista."], ["03", "Puntualidad", "Plazos realistas y respeto absoluto por los tiempos."], ["04", "Comunicación constante", "Actualizaciones semanales con fotos y avances."], ["05", "Presupuestos claros", "Cero sorpresas. Todo detallado por escrito."], ["06", "Trato cercano", "Una empresa cercana, humana y transparente."]];
const testimonials = [{
  name: "Reme Pérez carrasco",
  text: "Trabajador mui profesional y agradable reformo mi casa y quede encantada. Lo recomiendo"
}, {
  name: "Ruben Molina Salazar",
  text: "Buen trabajador serio y muy profesional en su trabajo y sobretodo buena persona"
}, {
  name: "Carlos Santos Agustiño",
  text: "Trabajos muy bien terminados aparte es buena persona y cercano con los clientes"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[100svh] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Interior de vivienda reformada en Almería", className: "absolute inset-0 h-full w-full object-cover animate-fade", width: 1920, height: 1280 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-32 pb-16 md:px-10 md:pt-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-background/80 animate-rise", style: {
          animationDelay: "0.1s"
        }, children: "Reformas integrales en Almería" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 max-w-5xl text-[44px] leading-[1.02] text-background md:text-[88px] lg:text-[108px] animate-rise", style: {
          animationDelay: "0.3s"
        }, children: [
          "Transformamos viviendas",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "en ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--sand)"
          }, children: "espacios únicos" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-base leading-relaxed text-background/85 animate-rise md:text-lg", style: {
            animationDelay: "0.55s"
          }, children: "Especialistas en reformas integrales, baños, cocinas y rehabilitación de viviendas con acabados impecables y trato cercano." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 animate-rise", style: {
            animationDelay: "0.75s"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contacto", className: "inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-xs font-medium tracking-widest text-foreground uppercase transition-all hover:bg-[var(--sand)]", children: [
              "Solicitar presupuesto",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#proyectos", className: "inline-flex items-center gap-3 rounded-full border border-background/40 px-7 py-4 text-xs font-medium tracking-widest text-background uppercase transition-all hover:bg-background/10", children: "Ver proyectos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 rotate-90 origin-right md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-background/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "★ 4.9 / 5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-background/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest uppercase", children: "Reseñas reales" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-3 text-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-12 w-px animate-pulse bg-background/60" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4", children: trust.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-foreground/15 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl leading-none md:text-6xl", children: t.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-[16ch] text-sm text-muted-foreground", children: t.v })
    ] }) }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "nosotras", className: "bg-background py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-12 md:grid-cols-12 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "— Quiénes somos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-7xl", children: "Una empresa cercana, profesional y perfeccionista." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img-hover overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: teamNewImg, alt: "Equipo de Reformas Integrales J.Serrano", className: "aspect-[5/4] w-full object-cover", loading: "lazy", width: 1280, height: 1600 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 max-w-xl text-lg leading-relaxed text-foreground/85", children: [
            "En Reformas Integrales J.Serrano nos apasiona transformar viviendas en hogares llenos de vida y estilo. Situados en",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "El Puente del Río, Almería" }),
            ", nos dedicamos a ofrecer soluciones integrales de diseño y construcción, cuidando cada detalle para superar las expectativas de nuestros clientes."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "Creemos que cada espacio cuenta una historia. Por eso, te acompañamos en cada paso del camino, garantizando acabados de máxima calidad, puntualidad y una comunicación fluida. Tu proyecto soñado, hecho realidad." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicios", className: "border-y border-border bg-secondary py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "— Servicios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl", children: "Reformas pensadas hasta el último milímetro." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-base text-muted-foreground", children: "Diseñamos, ejecutamos y supervisamos. Desde una cocina o un baño hasta la rehabilitación completa de tu vivienda." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contacto", className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "img-hover relative aspect-[4/5]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "h-full w-full object-cover", loading: "lazy", width: 1280, height: 1600 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex items-start justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl leading-tight md:text-4xl", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground", children: s.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-block text-2xl transition-transform duration-500 group-hover:translate-x-2", "aria-hidden": true, children: "→" })
        ] })
      ] }) }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-20 grid gap-6 border-t border-border pt-10 text-sm text-muted-foreground md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Albañilería general" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Adaptación de instalaciones" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Rehabilitación de viviendas antiguas" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "proyectos", className: "bg-background py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "— Antes / Después" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl", children: [
          "El antes no se imagina.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-muted-foreground", children: "El después, tampoco." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, className: "mt-14 md:mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-center text-xs tracking-widest text-muted-foreground uppercase", children: "Arrastra para comparar" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-foreground py-24 text-background md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-background/60", children: "— Por qué elegirnos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 max-w-4xl text-5xl leading-[0.98] md:text-7xl", children: "Seis razones que se notan en cada detalle." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px bg-background/10 md:grid-cols-3 md:gap-px", children: reasons.map(([num, title, body], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i % 3, className: "bg-foreground p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", style: {
            color: "var(--sand)"
          }, children: num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-background/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-8 text-3xl leading-tight md:text-4xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-background/65", children: body })
      ] }, num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "overflow-hidden bg-background py-24 md:py-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "— Lo que dicen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl", children: "Clientes que vuelven a recomendarnos." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-16 md:mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-6 pl-6 md:gap-8 md:pl-10", children: [...testimonials, ...testimonials].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "w-[85vw] max-w-md shrink-0 border border-border bg-secondary p-8 md:w-[420px] md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl leading-none", style: {
          color: "var(--sand)"
        }, "aria-hidden": true, children: "“" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "-mt-3 text-lg leading-relaxed text-foreground/90", children: t.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 flex items-center justify-between border-t border-border pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest", style: {
            color: "var(--sand)"
          }, children: "★ ★ ★ ★ ★" })
        ] })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-secondary py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "— Zona de trabajo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-7xl", children: "Almería, de costa a sierra." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-lg leading-relaxed text-muted-foreground", children: "Con base en El Puente del Río, trabajamos en toda la provincia de Almería. Desde el casco urbano hasta cortijos en el interior, llegamos donde tu proyecto lo necesite." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid grid-cols-2 gap-y-3 text-sm", children: ["El Puente del Río", "Almería capital", "Roquetas", "El Ejido", "Vícar", "Berja", "Fiñana", "Tabernas"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full", style: {
            background: "var(--sand)"
          } }),
          c
        ] }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square w-full overflow-hidden rounded-xl bg-background shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mapImg, alt: "Mapa de la provincia de Almería", className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105", loading: "lazy" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "bg-background py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "— Preguntas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-6xl", children: "Resolvemos tus dudas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xs text-sm text-muted-foreground", children: "Si no encuentras lo que buscas, escríbenos. Te respondemos en el mismo día." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contacto", className: "relative overflow-hidden bg-foreground py-32 text-background md:py-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaImg, alt: "", "aria-hidden": true, className: "absolute inset-0 h-full w-full object-cover opacity-40", loading: "lazy", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[60%] -translate-y-1/2 blur-3xl", style: {
        background: "radial-gradient(60% 50% at 50% 50%, rgba(200,181,156,0.18), transparent 70%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-background/70", children: "— Da el primer paso" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-5xl leading-[0.98] md:text-8xl", children: [
          "¿Listo para transformar",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--sand)"
          }, children: "tu vivienda?" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-lg text-background/80", children: "Cuéntanos tu proyecto y te asesoraremos sin compromiso. Presupuesto detallado en 48 horas." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/34698400549", className: "inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-8 py-4 text-xs font-medium tracking-widest text-foreground uppercase transition-transform hover:scale-[1.02] sm:w-auto", children: "Escribir por WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+34698400549", className: "inline-flex w-full items-center justify-center gap-3 rounded-full border border-background/40 px-8 py-4 text-xs font-medium tracking-widest text-background uppercase transition-colors hover:bg-background/10 sm:w-auto", children: "Llamar ahora" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-background pt-20 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 border-b border-border pb-14 md:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl tracking-tight md:text-4xl", children: [
            "J.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "var(--sand)"
            }, children: "Serrano" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "Reformas integrales y albañilería en Almería. Diseño, ejecución y acabados perfeccionistas." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "Contacto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+34698400549", className: "link-underline", children: "+34 698 40 05 49" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@reformasjserrano.es", className: "link-underline", children: "info@reformasjserrano.es" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "El Puente del Río, Almería" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "Horario" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lun – Vie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "8:30 – 14:00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "15:30 – 19:00" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground", children: "Síguenos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Instagram" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Facebook" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Google Maps" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 pt-8 text-xs text-muted-foreground md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Reformas Integrales J.Serrano. Todos los derechos reservados."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Aviso legal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Privacidad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Cookies" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/34698400549", "aria-label": "WhatsApp", className: "fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition-transform hover:scale-105 md:right-8 md:bottom-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 005.74 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.6h-.01a9.7 9.7 0 01-4.95-1.35l-.36-.21-3.75.98 1-3.65-.23-.37a9.7 9.7 0 01-1.5-5.1c0-5.36 4.37-9.73 9.74-9.73 2.6 0 5.04 1.01 6.88 2.85a9.66 9.66 0 012.85 6.88c0 5.37-4.37 9.73-9.73 9.73zm5.34-7.28c-.29-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.45-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.49-.5-.66-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.45 0 1.44 1.06 2.84 1.2 3.04.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.27.17-1.4-.07-.13-.27-.2-.56-.34z" }) }) })
  ] });
}
export {
  Index as component
};
