import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";

import heroImg from "@/assets/hero.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import floorsImg from "@/assets/service-floors.jpg";
import teamImg from "@/assets/team.jpg";
import teamNewImg from "@/assets/team_new.png";
import mapImg from "@/assets/map_huelva.png";
import ctaImg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    title: "Reformas integrales",
    desc: "Transformamos tu vivienda al completo, coordinando todos los gremios y supervisando cada acabado.",
    img: heroImg,
  },
  {
    title: "Reformas de cocina",
    desc: "Cocinas funcionales y elegantes, con materiales nobles y distribuciones pensadas para tu día a día.",
    img: kitchenImg,
  },
  {
    title: "Reformas de baño",
    desc: "Baños minimalistas tipo spa, con duchas a ras de suelo, microcemento y grifería de diseño.",
    img: bathroomImg,
  },
  {
    title: "Suelos y pavimentos",
    desc: "Tarima, microcemento, gres porcelánico o piedra natural. Instalación perfecta y duradera.",
    img: floorsImg,
  },
];

const trust = [
  { k: "+7", v: "Reseñas 5★ verificadas" },
  { k: "100%", v: "Compromiso y dedicación" },
  { k: "1:1", v: "Atención cercana y directa" },
  { k: "360°", v: "Reformas integrales llave en mano" },
];

const reasons = [
  ["01", "Atención personalizada", "Te acompañamos antes, durante y después de la obra."],
  ["02", "Acabados de alta calidad", "Materiales nobles y mano de obra perfeccionista."],
  ["03", "Puntualidad", "Plazos realistas y respeto absoluto por los tiempos."],
  ["04", "Comunicación constante", "Actualizaciones semanales con fotos y avances."],
  ["05", "Presupuestos claros", "Cero sorpresas. Todo detallado por escrito."],
  ["06", "Trato cercano", "Una empresa cercana, humana y transparente."],
];

const testimonials = [
  {
    name: "Reme Pérez carrasco",
    text: "Trabajador mui profesional y agradable reformo mi casa y quede encantada. Lo recomiendo",
  },
  {
    name: "Ruben Molina Salazar",
    text: "Buen trabajador serio y muy profesional en su trabajo y sobretodo buena persona",
  },
  {
    name: "Carlos Santos Agustiño",
    text: "Trabajos muy bien terminados aparte es buena persona y cercano con los clientes",
  },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Nav />

      {/* ─────────── HERO ─────────── */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interior de vivienda reformada en Huelva"
          className="absolute inset-0 h-full w-full object-cover animate-fade"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-32 pb-16 md:px-10 md:pt-40">
          <p
            className="eyebrow text-background/80 animate-rise"
            style={{ animationDelay: "0.1s" }}
          >
            Reformas integrales en Huelva
          </p>
          <h1
            className="font-display mt-6 max-w-5xl text-[44px] leading-[1.02] text-background md:text-[88px] lg:text-[108px] animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            Transformamos viviendas
            <br />
            en <em className="italic" style={{ color: "var(--sand)" }}>
              espacios únicos
            </em>
            .
          </h1>

          <div className="mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <p
              className="max-w-md text-base leading-relaxed text-background/85 animate-rise md:text-lg"
              style={{ animationDelay: "0.55s" }}
            >
              Especialistas en reformas integrales, baños, cocinas y rehabilitación
              de viviendas con acabados impecables y trato cercano.
            </p>
            <div
              className="flex flex-wrap items-center gap-3 animate-rise"
              style={{ animationDelay: "0.75s" }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-xs font-medium tracking-widest text-foreground uppercase transition-all hover:bg-[var(--sand)]"
              >
                Solicitar presupuesto
                <span aria-hidden>→</span>
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-3 rounded-full border border-background/40 px-7 py-4 text-xs font-medium tracking-widest text-background uppercase transition-all hover:bg-background/10"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>

        {/* Side badge */}
        <div className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 rotate-90 origin-right md:block">
          <div className="flex items-center gap-3 text-background/85">
            <span className="eyebrow">★ 4.9 / 5</span>
            <span className="h-px w-10 bg-background/60" />
            <span className="text-xs tracking-widest uppercase">
              Reseñas reales
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-3 text-background/70">
            <span className="h-12 w-px animate-pulse bg-background/60" />
          </div>
        </div>
      </section>

      {/* ─────────── TRUST STRIP ─────────── */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {trust.map((t, i) => (
              <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
                <div className="border-t border-foreground/15 pt-6">
                  <div className="font-display text-5xl leading-none md:text-6xl">
                    {t.k}
                  </div>
                  <p className="mt-4 max-w-[16ch] text-sm text-muted-foreground">
                    {t.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── NOSOTRAS ─────────── */}
      <section
        id="nosotras"
        className="bg-background py-24 md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="eyebrow text-muted-foreground">
                — Quiénes somos
              </p>
              <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-7xl">
                Una empresa cercana, profesional y perfeccionista.
              </h2>
            </Reveal>

            <div className="md:col-span-7">
              <Reveal>
                <div className="img-hover overflow-hidden">
                  <img
                    src={teamNewImg}
                    alt="Equipo de Reformas Integrales J.Serrano"
                    className="aspect-[5/4] w-full object-cover"
                    loading="lazy"
                    width={1280}
                    height={1600}
                  />
                </div>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/85">
                  En Reformas Integrales J.Serrano nos apasiona transformar viviendas en hogares llenos de vida y estilo. Situados en{" "}
                  <span className="font-medium">Huelva</span>, nos dedicamos a ofrecer soluciones integrales de diseño y construcción, cuidando cada detalle para superar las expectativas de nuestros clientes.
                </p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Creemos que cada espacio cuenta una historia. Por eso, te acompañamos en cada paso del camino, garantizando acabados de máxima calidad, puntualidad y una comunicación fluida. Tu proyecto soñado, hecho realidad.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICIOS ─────────── */}
      <section
        id="servicios"
        className="border-y border-border bg-secondary py-24 md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-muted-foreground">— Servicios</p>
                <h2 className="font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
                  Reformas pensadas hasta el último milímetro.
                </h2>
              </div>
              <p className="max-w-sm text-base text-muted-foreground">
                Diseñamos, ejecutamos y supervisamos. Desde una cocina o un baño
                hasta la rehabilitación completa de tu vivienda.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) as 0 | 1}>
                <a href="#contacto" className="group block">
                  <div className="img-hover relative aspect-[4/5]">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={1280}
                      height={1600}
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15" />
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-3xl leading-tight md:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                    <span
                      className="mt-2 inline-block text-2xl transition-transform duration-500 group-hover:translate-x-2"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 grid gap-6 border-t border-border pt-10 text-sm text-muted-foreground md:grid-cols-3">
            <span>· Albañilería general</span>
            <span>· Adaptación de instalaciones</span>
            <span>· Rehabilitación de viviendas antiguas</span>
          </Reveal>
        </div>
      </section>

      {/* ─────────── ANTES / DESPUÉS ─────────── */}
      <section id="proyectos" className="bg-background py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-muted-foreground">
                  — Antes / Después
                </p>
                <h2 className="font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
                  El antes no se imagina.
                  <br />
                  <em className="italic text-muted-foreground">
                    El después, tampoco.
                  </em>
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-14 md:mt-20">
            <BeforeAfter />
            <p className="mt-5 text-center text-xs tracking-widest text-muted-foreground uppercase">
              Arrastra para comparar
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────── POR QUÉ ELEGIRNOS ─────────── */}
      <section className="border-y border-border bg-foreground py-24 text-background md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-background/60">— Por qué elegirnos</p>
            <h2 className="font-display mt-6 max-w-4xl text-5xl leading-[0.98] md:text-7xl">
              Seis razones que se notan en cada detalle.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-px bg-background/10 md:grid-cols-3 md:gap-px">
            {reasons.map(([num, title, body], i) => (
              <Reveal
                key={num}
                delay={(i % 3) as 0 | 1 | 2}
                className="bg-foreground p-8 md:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-display text-lg"
                    style={{ color: "var(--sand)" }}
                  >
                    {num}
                  </span>
                  <span className="h-px flex-1 bg-background/20" />
                </div>
                <h3 className="font-display mt-8 text-3xl leading-tight md:text-4xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/65">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIOS ─────────── */}
      <section className="overflow-hidden bg-background py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-muted-foreground">— Lo que dicen</p>
            <h2 className="font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
              Clientes que vuelven a recomendarnos.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="flex w-max animate-marquee gap-6 pl-6 md:gap-8 md:pl-10">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={i}
                className="w-[85vw] max-w-md shrink-0 border border-border bg-secondary p-8 md:w-[420px] md:p-10"
              >
                <div
                  className="font-display text-6xl leading-none"
                  style={{ color: "var(--sand)" }}
                  aria-hidden
                >
                  “
                </div>
                <blockquote className="-mt-3 text-lg leading-relaxed text-foreground/90">
                  {t.text}
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-sm font-medium">{t.name}</span>
                  <span
                    className="text-xs tracking-widest"
                    style={{ color: "var(--sand)" }}
                  >
                    ★ ★ ★ ★ ★
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ZONA DE TRABAJO ─────────── */}
      <section className="border-y border-border bg-secondary py-24 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <Reveal>
            <p className="eyebrow text-muted-foreground">— Zona de trabajo</p>
            <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-7xl">
              Huelva, de costa a sierra.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Con base en Huelva, trabajamos en toda la provincia.
              Desde el casco urbano hasta cortijos en el interior, llegamos donde
              tu proyecto lo necesite.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-y-3 text-sm">
              {["Huelva capital", "Lepe", "Almonte", "Moguer", "Isla Cristina", "Ayamonte", "Cartaya", "Punta Umbría"].map(
                (c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--sand)" }}
                    />
                    {c}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-background shadow-xl">
              <img
                src={mapImg}
                alt="Mapa de la provincia de Huelva"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section id="faq" className="bg-background py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="eyebrow text-muted-foreground">— Preguntas</p>
              <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-6xl">
                Resolvemos tus dudas.
              </h2>
              <p className="mt-8 max-w-xs text-sm text-muted-foreground">
                Si no encuentras lo que buscas, escríbenos. Te respondemos en el
                mismo día.
              </p>
            </Reveal>
            <div className="md:col-span-8">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-foreground py-32 text-background md:py-48"
      >
        <img
          src={ctaImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/90" />
        {/* subtle sand glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[60%] -translate-y-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(200,181,156,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-background/70">— Da el primer paso</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-8 text-5xl leading-[0.98] md:text-8xl">
              ¿Listo para transformar
              <br />
              <em className="italic" style={{ color: "var(--sand)" }}>
                tu vivienda?
              </em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-background/80">
              Cuéntanos tu proyecto y te asesoraremos sin compromiso.
              Presupuesto detallado en 48 horas.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/34698400549"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-8 py-4 text-xs font-medium tracking-widest text-foreground uppercase transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="tel:+34698400549"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-background/40 px-8 py-4 text-xs font-medium tracking-widest text-background uppercase transition-colors hover:bg-background/10 sm:w-auto"
              >
                Llamar ahora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="bg-background pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 border-b border-border pb-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-display text-3xl tracking-tight md:text-4xl">
                J.<span style={{ color: "var(--sand)" }}>Serrano</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Reformas integrales y albañilería en Huelva. Diseño, ejecución
                y acabados perfeccionistas.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow text-muted-foreground">Contacto</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="tel:+34698400549" className="link-underline">
                    +34 698 40 05 49
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@reformasjserrano.es"
                    className="link-underline"
                  >
                    info@reformasjserrano.es
                  </a>
                </li>
                <li className="text-muted-foreground">Huelva</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-muted-foreground">Horario</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>Lun – Vie</li>
                <li className="text-muted-foreground">8:30 – 14:00</li>
                <li className="text-muted-foreground">15:30 – 19:00</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-muted-foreground">Síguenos</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#" className="link-underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline">
                    Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
            <span>
              © {new Date().getFullYear()} Reformas Integrales J.Serrano. Todos
              los derechos reservados.
            </span>
            <div className="flex gap-6">
              <a href="#" className="link-underline">
                Aviso legal
              </a>
              <a href="#" className="link-underline">
                Privacidad
              </a>
              <a href="#" className="link-underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/34698400549"
        aria-label="WhatsApp"
        className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition-transform hover:scale-105 md:right-8 md:bottom-8"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 005.74 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.6h-.01a9.7 9.7 0 01-4.95-1.35l-.36-.21-3.75.98 1-3.65-.23-.37a9.7 9.7 0 01-1.5-5.1c0-5.36 4.37-9.73 9.74-9.73 2.6 0 5.04 1.01 6.88 2.85a9.66 9.66 0 012.85 6.88c0 5.37-4.37 9.73-9.73 9.73zm5.34-7.28c-.29-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.45-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.49-.5-.66-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.45 0 1.44 1.06 2.84 1.2 3.04.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.27.17-1.4-.07-.13-.27-.2-.56-.34z" />
        </svg>
      </a>
    </div>
  );
}
