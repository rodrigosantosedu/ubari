import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Terapia para Adultos",
  description:
    "Terapia particular para adultos em Campinas e online: ansiedade, burnout, depressão, conflitos relacionais, autoestima e reconstrução de vida.",
};

const themes = [
  { id: "ansiedade", title: "Ansiedade", text: "A ansiedade não precisa controlar a forma como você vive, trabalha ou se relaciona." },
  { id: "burnout", title: "Burnout e esgotamento", text: "Quando a cobrança constante esgota corpo e mente, há espaço para reorganizar o ritmo." },
  { id: "sobrecarga", title: "Sobrecarga e dupla jornada", text: "Cuidar de tudo e de todos — e esquecer de si. A Ubari é um espaço para desacelerar." },
  { id: "depressao", title: "Depressão e humor baixo", text: "Acompanhamento ético e contínuo, sem promessas milagrosas — com presença e vínculo." },
  { id: "familia", title: "Conflitos relacionais e familiares", text: "Escuta sem julgamento para reorganizar vínculos e limites." },
  { id: "vicios", title: "Vícios e compulsões", text: "Um processo individualizado, com o mesmo profissional do início ao fim." },
  { id: "autoestima", title: "Autoestima", text: "Resgatar a própria voz e a autonomia, no seu tempo." },
  { id: "reconstrucao", title: "Reconstrução de vida", text: "Pós-divórcio, fim de relação tóxica ou mudança profunda — um lugar para recomeçar com cuidado." },
];

export default function AdultosPage() {
  return (
    <>
      <section className="bg-ubari-forest pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="container-ubari grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
              Atendimentos
            </p>
            <h1 className="font-display text-display-md text-ubari-cream md:text-display-lg">
              Terapia para Adultos
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ubari-cream/80">
              Sessões semanais com escuta ética e sem julgamentos. Pontualidade,
              privacidade e um espaço para desacelerar e reorganizar a mente.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/agendar" className="btn-cta">
                Agendar sessão
              </Link>
              <Link href="/espaco" className="btn-ghost border-ubari-cream/40 text-ubari-cream">
                Conheça o espaço
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-6">
            <Image
              src="/images/placeholders/servico-adultos.svg"
              alt="Sala de atendimento adulto na Ubari"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-ubari-cream">
        <div className="container-ubari">
          <SectionHeading
            title="Temas que acolhemos"
            description="Lidamos com a dor sem dramatizar — e sem prometer cura. O foco é o processo e o vínculo."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.04}>
                <article id={t.id} className="scroll-mt-28 border-t border-ubari-gold/50 pt-5">
                  <h2 className="font-display text-xl text-ubari-ink">{t.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ubari-muted">
                    {t.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="mb-4 text-sm text-ubari-muted">
              Você não precisa esperar chegar ao limite para buscar ajuda.
            </p>
            <Link href="/agendar" className="btn-cta">
              Agendar sessão
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
