import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Agendar sessão",
  description:
    "Preencha o formulário de qualificação da Ubari. Nossa equipe indica o profissional mais adequado para você.",
  robots: { index: true, follow: true },
};

export default function AgendarPage() {
  return (
    <section className="section-padding bg-ubari-sand pt-32 md:pt-40">
      <div className="container-ubari grid gap-12 lg:grid-cols-12">
        <FadeIn className="lg:col-span-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-bronze">
            Agendar
          </p>
          <h1 className="font-serif text-display-sm text-ubari-ink md:text-display-md">
            Dê o primeiro passo
          </h1>
          <span className="mt-4 block h-0.5 w-12 bg-ubari-amber" aria-hidden />
          <p className="mt-5 text-base leading-relaxed text-ubari-muted">
            Algumas perguntas rápidas para entendermos o que você busca. Em
            seguida, nossa equipe entra em contato e indica o profissional mais
            adequado.
          </p>
          <p className="mt-4 text-sm text-ubari-muted">
            Sem filas. Sem rotatividade de terapeutas. Suas informações são
            tratadas com total sigilo.
          </p>
        </FadeIn>
        <FadeIn className="lg:col-span-7" delay={0.1}>
          <LeadForm formId="agendar_page" />
        </FadeIn>
      </div>
    </section>
  );
}
