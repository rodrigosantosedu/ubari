import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Terapia Online — Brasil e Exterior",
  description:
    "Terapia online em português para o Brasil e brasileiros nos EUA, Canadá e Europa. Horários por fuso e pagamento em reais.",
};

export default function OnlinePage() {
  return (
    <>
      <section className="bg-ubari-forest pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="container-ubari grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
              Atendimentos
            </p>
            <h1 className="font-display text-display-md text-ubari-cream md:text-display-lg">
              Online no Brasil e no Exterior
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ubari-cream/80">
              Terapia em português com quem entende sua cultura. Horários
              compatíveis com o seu fuso (EUA, Canadá, Europa) e pagamento
              simples em reais.
            </p>
            <Link href="/agendar" className="btn-cta mt-8 inline-flex">
              Agendar sessão
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-6">
            <Image
              src="/images/placeholders/servico-online.svg"
              alt="Ambiente preparado para terapia online"
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
            title="Longe de casa, perto de quem entende você"
            description="Isolamento, adaptação cultural, saudade e estresse do dia a dia lá fora — acolhidos em português, com continuidade."
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Em português",
                d: "Sem traduzir a dor. Conversas com quem compartilha referências culturais brasileiras.",
              },
              {
                t: "Seu fuso",
                d: "Horários pensados para quem está nos EUA, Canadá, Europa e outras regiões.",
              },
              {
                t: "Pagamento simples",
                d: "Agendamento direto e a praticidade de pagar em reais — sem burocracia.",
              },
            ].map((item, i) => (
              <FadeIn key={item.t} delay={i * 0.08}>
                <h2 className="font-display text-xl text-ubari-ink">{item.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ubari-muted">
                  {item.d}
                </p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/agendar" className="btn-cta">
              Agendar sessão
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
