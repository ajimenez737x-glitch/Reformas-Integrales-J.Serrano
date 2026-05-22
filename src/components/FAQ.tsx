import { useState } from "react";

const items = [
  {
    q: "¿Hacéis presupuestos sin compromiso?",
    a: "Sí. Visitamos tu vivienda, escuchamos tu proyecto y elaboramos un presupuesto detallado y transparente, totalmente gratuito y sin compromiso.",
  },
  {
    q: "¿Trabajáis fuera de la capital?",
    a: "Trabajamos en la capital y en toda la provincia de Huelva, incluyendo los pueblos de la costa y el interior.",
  },
  {
    q: "¿Realizáis reformas integrales?",
    a: "Sí. Coordinamos toda la reforma de principio a fin: derribos, albañilería, fontanería, electricidad, suelos, alicatados, carpintería y acabados.",
  },
  {
    q: "¿Coordináis todos los gremios?",
    a: "Sí. Eres tu único interlocutor: nosotras coordinamos a todos los profesionales y supervisamos cada fase para asegurar calidad y plazos.",
  },
  {
    q: "¿Cuánto tarda una reforma?",
    a: "Depende del alcance. Un baño puede estar listo en 2–3 semanas, una cocina en 3–5, y una reforma integral entre 6 y 12 semanas. Te damos una planificación clara desde el primer día.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display text-2xl leading-tight md:text-3xl">
                {it.q}
              </span>
              <span
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ${
                  isOpen ? "rotate-45 bg-foreground text-background" : ""
                }`}
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className="absolute h-3.5 w-px bg-current" />
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
