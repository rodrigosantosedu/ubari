import type { Metadata } from "next";
import { ContactCta } from "@/components/home/ContactCta";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Ubari Espaço de Psicologia: formulário de agendamento, WhatsApp, telefone, e-mail e endereço no Taquaral, Campinas.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-ubari-forest pb-12 pt-32 md:pt-40">
        <div className="container-ubari">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
              Contato
            </p>
            <h1 className="font-display text-display-md text-ubari-cream md:text-display-lg">
              Estamos aqui para te acolher
            </h1>
          </FadeIn>
        </div>
      </section>
      <ContactCta />
      <section id="trabalhe-conosco" className="border-t border-ubari-sand bg-ubari-cream py-16">
        <div className="container-ubari max-w-2xl">
          <h2 className="font-display text-2xl text-ubari-ink">Trabalhe conosco</h2>
          <p className="mt-3 text-sm leading-relaxed text-ubari-muted">
            Psicólogos(as) com CRP ativo e alinhamento com o cuidado acolhedor,
            individualizado e contínuo podem enviar currículo para{" "}
            <a href="mailto:contato@ubari.com.br" className="link-bronze">
              contato@ubari.com.br
            </a>{" "}
            com o assunto &quot;Trabalhe conosco&quot;.
          </p>
        </div>
      </section>
    </>
  );
}
