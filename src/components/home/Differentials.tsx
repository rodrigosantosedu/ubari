import Link from "next/link";
import Image from "next/image";
import { differentials } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";

export function Differentials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ubari">
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-serif text-display-md text-ubari-ink">
            Diferenciais
          </h2>
          <p className="mt-5 font-sans text-sm font-light text-ubari-mute md:text-base">
            O que torna a Ubari um espaço à parte
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.05}>
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ubari-gold">
                    Ubari
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-ubari-ink">
                    {d.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-light leading-relaxed text-ubari-mute">
                    {d.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/espaco" className="btn-text">
            Conheça o espaço
          </Link>
        </div>
      </div>
    </section>
  );
}
