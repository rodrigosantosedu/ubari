import { pillars } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pillars() {
  return (
    <section className="section-padding border-y border-ubari-line bg-ubari-warm">
      <div className="container-ubari">
        <SectionHeading
          eyebrow="Nosso cuidado"
          title="Três pilares. Uma forma de cuidar."
          className="mb-16 md:mb-20"
        />

        <div className="grid gap-0 md:grid-cols-12">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.id}
              delay={i * 0.08}
              className={
                i === 0
                  ? "md:col-span-4 md:pr-10"
                  : i === 1
                    ? "border-t border-ubari-line pt-10 md:col-span-4 md:border-l md:border-t-0 md:px-10 md:pt-0"
                    : "border-t border-ubari-line pt-10 md:col-span-4 md:border-l md:border-t-0 md:pl-10 md:pt-0"
              }
            >
              <p className="font-display text-[11px] tracking-[0.2em] text-ubari-clay">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-display text-xl text-ubari-ink md:text-[1.35rem]">
                {pillar.title.replace(/^Mais /, "")}
              </h3>
              <p className="mt-4 font-sans text-sm leading-[1.7] text-ubari-mute md:text-[0.95rem]">
                {pillar.description}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 max-w-xl border-l-2 border-ubari-clay/40 pl-6 md:mt-20 md:ml-[8%] md:pl-8">
          <p className="font-sans text-base italic leading-[1.7] text-ubari-ink md:text-lg">
            Nossa abordagem é centrada no processo de individuação: uma jornada
            de autoconhecimento que respeita a sua história e a sua autonomia.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
