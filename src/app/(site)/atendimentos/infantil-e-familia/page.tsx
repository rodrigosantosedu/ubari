import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Infantil & Família",
  description:
    "Psicoterapia infantil de 3 a 9 anos em Campinas: ambiente lúdico, protagonismo da criança e orientação aos pais a cada 4 sessões.",
};

export default function InfantilPage() {
  return (
    <>
      <section className="bg-ubari-forest pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="container-ubari grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
              Atendimentos
            </p>
            <h1 className="font-display text-display-md text-ubari-cream md:text-display-lg">
              Infantil & Família
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ubari-cream/80">
              De 3 a 9 anos: arte, ludicidade e protagonismo da criança.
              Orientação aos pais a cada 4 encontros — com afeto e clareza.
            </p>
            <Link href="/agendar" className="btn-cta mt-8 inline-flex">
              Agendar sessão
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-6">
            <Image
              src="/images/placeholders/servico-infantil.svg"
              alt="Sala infantil lúdica e segura da Ubari"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-ubari-cream">
        <div className="container-ubari max-w-3xl">
          <SectionHeading title="Um espaço pensado para a criança" />
          <FadeIn>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-ubari-muted">
              <p>
                A sala infantil da Ubari é lúdica e segura. A criança é
                protagonista: brinca, cria e se expressa — enquanto o terapeuta
                acompanha com ética e presença.
              </p>
              <p>
                A cada 4 sessões, realizamos um retorno aos pais ou cuidadores
                para alinhar o processo e oferecer orientação prática. Sem
                culpa materna como ponto de partida — com parceria.
              </p>
              <p>
                Atendemos questões como birras intensas, ansiedade, adaptação
                escolar e mudanças familiares (incluindo famílias em divórcio).
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Idade: 3 a 9 anos",
                "Ambiente afetuoso, sem clima de clínica massificada",
                "Mesmo profissional do início ao fim",
                "Retorno aos pais a cada 4 encontros",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ubari-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ubari-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/agendar" className="btn-cta mt-10 inline-flex">
              Agendar sessão
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
