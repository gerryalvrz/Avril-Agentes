"use client";

import React from "react";
import { motion } from "motion/react";

export interface TestimonialV2Item {
  text: string;
  initials: string;
  handle: string;
  role: string;
}

export const DEFAULT_TESTIMONIALS: TestimonialV2Item[] = [
  {
    initials: "MC",
    handle: "@mkt_para_pymes",
    text: "Con Avril monté una agencia de marketing para pymes en una tarde. Sin fricción.",
    role: "Marketing & pymes",
  },
  {
    initials: "DR",
    handle: "@prompt2empresa",
    text: "Un solo prompt y ya tenía mi empresa digital en marcha. Así no me quedo atrás.",
    role: "Empresa digital",
  },
  {
    initials: "LS",
    handle: "@bots_sin_friccion",
    text: "Armé un sistema de bots de trading en horas. Clarísimo de usar.",
    role: "Trading & automatización",
  },
  {
    initials: "AG",
    handle: "@wa_flows",
    text: "Automatizé un flujo que llevaba años posponiendo para clientes y WhatsApp.",
    role: "WhatsApp & flujos",
  },
  {
    initials: "IM",
    handle: "@marketplace_onchain",
    text: "Quería un marketplace de agentes on-chain. En Avril desplegué los agentes y levanté todo.",
    role: "Agentes & web3",
  },
  {
    initials: "SV",
    handle: "@vibe_founding",
    text: "Vibe founding: divertido, simple y con potencial de ingresos reales.",
    role: "Vibe founding",
  },
];

function TestimonialsColumn(props: {
  className?: string;
  testimonials: TestimonialV2Item[];
  duration?: number;
}) {
  const { testimonials, duration = 16, className } = props;

  return (
    <div className={className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6 transition-colors duration-300"
      >
        {[0, 1].map((dupIndex) => (
          <React.Fragment key={dupIndex}>
            {testimonials.map((item, i) => (
              <motion.li
                key={`${dupIndex}-${item.handle}-${i}`}
                aria-hidden={dupIndex === 1 ? true : undefined}
                tabIndex={dupIndex === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 10px 10px -5px rgba(0, 0, 0, 0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                whileFocus={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 10px 10px -5px rgba(0, 0, 0, 0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="group w-full max-w-sm cursor-default select-none rounded-3xl border border-border bg-card p-6 shadow-lg shadow-black/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/30 md:p-8"
              >
                <blockquote className="m-0 p-0">
                  <p className="m-0 text-pretty font-normal leading-relaxed text-muted-foreground transition-colors duration-300">
                    {item.text}
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-sm font-semibold text-brand ring-2 ring-border transition-all duration-300 ease-in-out group-hover:ring-brand/40"
                      aria-hidden
                    >
                      {item.initials}
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <cite className="not-italic font-mono text-sm font-semibold leading-5 tracking-tight text-brand transition-colors duration-300">
                        {item.handle}
                      </cite>
                      <span className="mt-0.5 text-sm leading-5 tracking-tight text-muted-foreground transition-colors duration-300">
                        {item.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export interface TestimonialV2Props {
  testimonials?: TestimonialV2Item[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
}

export default function TestimonialV2({
  testimonials = DEFAULT_TESTIMONIALS,
  eyebrow = "Early voices",
  title = "Lo que están construyendo con Avril",
  description = "Historias de beta y primeros builders — iremos sumando equipos y empresas reales.",
  id = "testimonials-heading",
}: TestimonialV2Props) {
  const col1 = testimonials.slice(0, 2);
  const col2 = testimonials.slice(2, 4);
  const col3 = testimonials.slice(4, 6);

  return (
    <section
      aria-labelledby={id}
      className="relative overflow-hidden border-b border-border bg-surface/50 py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="mx-auto mb-14 flex max-w-[540px] flex-col items-center justify-center md:mb-16">
          <div className="flex justify-center">
            <div className="rounded-full border border-border bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors">
              {eyebrow}
            </div>
          </div>

          <h2
            id={id}
            className="mt-6 text-center text-3xl font-extrabold tracking-tight text-foreground transition-colors md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-center text-base leading-relaxed text-muted-foreground transition-colors md:text-lg">
            {description}
          </p>
        </div>

        {/* Mobile: una columna con todos los testimonios */}
        <div
          className="mx-auto mt-10 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:hidden"
          role="region"
          aria-label="Testimonios en scroll"
        >
          <TestimonialsColumn testimonials={testimonials} duration={17} />
        </div>

        {/* Tablet y desktop: 2 o 3 columnas */}
        <div
          className="mx-auto mt-10 hidden max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:flex"
          role="region"
          aria-label="Testimonios en scroll"
        >
          <TestimonialsColumn testimonials={col1} duration={15} />
          <TestimonialsColumn testimonials={col2} duration={19} />
          <TestimonialsColumn
            testimonials={col3}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
