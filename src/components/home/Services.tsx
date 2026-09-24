import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

/** Equivalente a "Tratamentos e Terapias" da Kurotel */
export function Services() {
  return (
    <section id="atendimentos" className="bg-ubari-cream">
      <div className="container-ubari section-padding">
        <FadeIn className="mx-auto mb-20 max-w-2xl text-center">
            <Image
              src="/brand/tree-mark.png"
              alt=""
              width={48}
              height={48}
              className="kuro-mark mb-8"
              aria-hidden
            />
          <h2 className="font-serif text-display-md text-ubari-ink">
            Atendimentos
          </h2>
          <p className="mt-6 font-sans text-sm font-light leading-[1.8] text-ubari-mute md:text-base">
            Encontrar um psicólogo é importante. Encontrar um lugar onde você
            realmente se sinta acolhido faz toda a diferença.
          </p>
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, i) => {
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={service.slug}>
                <article
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reverse && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={reverse ? "lg:pr-8" : "lg:pl-4"}>
                    <h3 className="font-serif text-display-sm text-ubari-ink md:text-display-md">
                      {service.title}
                    </h3>
                    <p className="mt-6 font-sans text-sm font-light leading-[1.8] text-ubari-mute md:text-base">
                      {service.summary}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="font-sans text-sm text-ubari-ink before:mr-3 before:text-ubari-gold before:content-['—']"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 flex flex-wrap items-center gap-6">
                      <Link href={service.href} className="btn-ghost-dark">
                        Saiba mais
                      </Link>
                      <Link href="/agendar" className="btn-text">
                        Agendar
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
