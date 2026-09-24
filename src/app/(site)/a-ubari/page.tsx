import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { pillars } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { TreeWatermark } from "@/components/ui/TreeWatermark";

export const metadata: Metadata = {
  title: "A Ubari",
  description:
    "História, filosofia e pilares do cuidado Ubari: acolhedor, individualizado e contínuo. Processo de individuação no Taquaral, Campinas.",
};

export default function AUbariPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ubari-forest pb-20 pt-32 md:pb-28 md:pt-40">
        <TreeWatermark className="right-10 top-24 h-48 text-ubari-clay md:h-64" />
        <div className="container-ubari relative">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
              A Ubari
            </p>
            <h1 className="max-w-3xl font-display text-display-md text-ubari-cream md:text-display-lg">
              {site.manifesto}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ubari-cream/80 md:text-lg">
              {site.puv}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-ubari-cream">
        <div className="container-ubari grid items-center gap-12 lg:grid-cols-12">
          <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-sm lg:col-span-5">
            <Image
              src="/images/placeholders/historia-fundadoras.svg"
              alt="Fundadoras da Ubari"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.1}>
            <SectionHeading
              eyebrow="Nossa história"
              title="Nascida do desejo de acolher de verdade"
            />
            <p className="mt-6 text-base leading-relaxed text-ubari-muted">
              Em {site.foundedYear}, {site.founders} fundaram a Ubari em um
              casarão no Taquaral, perto da Lagoa. A ideia era simples e rara:
              um espaço de psicologia com carinha de casa — o oposto de clínica
              hospitalar ou de atendimento massificado.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ubari-muted">
              Desde então, cuidamos de adultos, famílias e brasileiros no
              exterior com o mesmo compromisso: vínculo contínuo, escuta ética e
              individualização.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-ubari-sand">
        <div className="container-ubari">
          <SectionHeading
            eyebrow="Filosofia"
            title="Os três pilares"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.08}>
                <h3 className="font-display text-2xl text-ubari-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ubari-muted">
                  {p.description}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mx-auto mt-14 max-w-2xl text-center">
            <p className="font-display text-xl italic text-ubari-ink md:text-2xl">
              Individuação: uma jornada de autoconhecimento que respeita a sua
              história e a sua autonomia.
            </p>
          </FadeIn>
          <div className="mt-10 text-center">
            <Link href="/agendar" className="btn-cta">
              Agendar sessão
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
