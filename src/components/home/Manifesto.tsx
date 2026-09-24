import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { pillars } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";

export function Manifesto() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-ubari relative text-center">
        <FadeIn>
            <Image
              src="/brand/tree-mark.png"
              alt=""
              width={56}
              height={56}
              className="kuro-mark mb-10"
              aria-hidden
            />
          <p className="eyebrow mb-6">Filosofia Ubari</p>
          <h2 className="mx-auto max-w-3xl font-serif text-display-lg text-ubari-ink text-balance">
            {site.manifesto}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-sm font-light leading-[1.8] text-ubari-mute md:text-base">
            {site.puv}
          </p>
        </FadeIn>

        <div className="mx-auto mt-20 grid max-w-4xl gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-sans text-[10px] tracking-[0.25em] text-ubari-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-serif text-xl text-ubari-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ubari-mute">
                  {p.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <p className="mx-auto max-w-xl font-serif text-lg italic text-ubari-ink md:text-xl">
            Nossa abordagem é centrada no processo de individuação: uma jornada
            de autoconhecimento que respeita a sua história e a sua autonomia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href="/a-ubari" className="btn-text">
              Conheça a Ubari
            </Link>
            <Link href="/agendar" className="btn-cta">
              Agendar sessão
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
