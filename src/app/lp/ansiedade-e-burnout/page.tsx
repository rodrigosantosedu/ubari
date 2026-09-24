import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/forms/LeadForm";
import { Pillars } from "@/components/home/Pillars";
import { FaqSection } from "@/components/home/FaqSection";
import { faqShort } from "@/content/faq";
import { painMoments } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ansiedade e Burnout — Agende com a Ubari",
  description:
    "O sofrimento e o esgotamento emocional estão travando a sua vida? Conheça o cuidado acolhedor, individualizado e contínuo da Ubari.",
  robots: { index: false, follow: false },
};

/** Landing de conversão — sem header/footer de navegação (layout próprio) */
export default function LpAnsiedadeBurnoutPage() {
  const moments = painMoments.filter((m) =>
    ["ansiedade", "burnout", "sobrecarga", "reconstrucao"].includes(m.slug)
  );

  return (
    <div className="min-h-screen bg-ubari-paper">
      {/* Mini bar — só logo, sem links de saída */}
      <div className="border-b border-ubari-line bg-ubari-paper">
        <div className="container-ubari flex h-14 items-center">
          <Image
            src="/brand/logo.svg"
            alt="Ubari"
            width={130}
            height={38}
            className="h-8 w-auto"
            priority
          />
        </div>
      </div>

      <section className="border-b border-ubari-line bg-ubari-warm">
        <div className="container-ubari grid gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow">Atendimento particular</p>
            <h1 className="mt-4 font-display text-display-md text-ubari-ink text-balance">
              O sofrimento e o esgotamento emocional estão travando a sua vida?
            </h1>
            <div className="rule mt-5" aria-hidden />
            <p className="mt-6 font-sans text-base leading-[1.7] text-ubari-mute">
              Na Ubari, o cuidado começa pelo acolhimento. Ambiente humano,
              vínculo contínuo e profissional de referência — sem filas e sem
              rotatividade.
            </p>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.08}>
            <LeadForm formId="lp_ansiedade_burnout" />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-ubari">
          <h2 className="font-display text-display-sm text-ubari-ink">
            Talvez você esteja vivendo um destes momentos
          </h2>
          <div className="rule mt-5" aria-hidden />
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {moments.map((m, i) => (
              <FadeIn key={m.slug} delay={i * 0.05}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(42,39,35,0.75)_100%)]" />
                  <p className="absolute bottom-0 p-5 font-display text-lg text-white">
                    {m.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Pillars />

      <section className="section-padding bg-ubari-mist/40">
        <div className="container-ubari">
          <h2 className="font-display text-display-sm text-ubari-ink">
            O espaço
          </h2>
          <div className="rule mt-5 mb-10" aria-hidden />
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "/images/placeholders/espaco-fachada.svg",
              "/images/placeholders/espaco-recepcao.svg",
              "/images/placeholders/espaco-salas.svg",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={faqShort} id="lp-faq" />

      <section className="section-padding bg-ubari-warm">
        <div className="container-ubari max-w-2xl">
          <h2 className="text-center font-display text-display-sm text-ubari-ink">
            Pronto para o primeiro passo?
          </h2>
          <div className="rule mx-auto mt-5 mb-10" aria-hidden />
          <LeadForm formId="lp_ansiedade_burnout_bottom" />
        </div>
      </section>

      <div className="border-t border-ubari-line py-6 text-center">
        <p className="font-sans text-xs text-ubari-mute">
          Ubari Espaço de Psicologia · Atendimento particular ·{" "}
          <Link href="/politica-de-privacidade" className="hover:underline">
            Privacidade
          </Link>
        </p>
      </div>
    </div>
  );
}
