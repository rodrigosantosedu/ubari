import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade e tratamento de dados da ${site.name}, em conformidade com a LGPD.`,
};

export default function PrivacidadePage() {
  return (
    <article className="section-padding bg-ubari-paper pt-32 md:pt-40">
      <div className="container-ubari max-w-narrow">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-display-sm text-ubari-ink md:text-display-md">
          Política de Privacidade
        </h1>
        <div className="rule mt-5" aria-hidden />
        <div className="mt-10 space-y-6 font-sans text-sm leading-[1.75] text-ubari-mute md:text-[0.95rem]">
          <p>
            A {site.name} trata dados pessoais com sigilo profissional e em
            conformidade com a Lei Geral de Proteção de Dados (LGPD). Esta
            página descreve, de forma clara, como coletamos e usamos informações
            no site.
          </p>
          <h2 className="font-display text-lg text-ubari-ink">
            Dados que coletamos
          </h2>
          <p>
            Dados enviados voluntariamente no formulário de agendamento (nome,
            WhatsApp, e-mail, preferências de atendimento) e dados técnicos de
            navegação quando há consentimento para cookies (métricas e
            campanhas).
          </p>
          <h2 className="font-display text-lg text-ubari-ink">Finalidade</h2>
          <p>
            Qualificar e responder solicitações de atendimento, melhorar o site
            e — somente com consentimento — medir campanhas de marketing.
          </p>
          <h2 className="font-display text-lg text-ubari-ink">Compartilhamento</h2>
          <p>
            Dados de leads podem ser enviados ao CRM utilizado pela clínica
            (ex.: Kommo) para contato da equipe. Não vendemos dados pessoais.
          </p>
          <h2 className="font-display text-lg text-ubari-ink">Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção ou exclusão dos dados pelo
            e-mail{" "}
            <a href={`mailto:${site.contact.email}`} className="link-bronze">
              {site.contact.email}
            </a>
            .
          </p>
          <h2 className="font-display text-lg text-ubari-ink">Cookies</h2>
          <p>
            Cookies não essenciais só são carregados após aceite no banner de
            consentimento. Você pode alterar sua preferência limpando o
            armazenamento local do navegador.
          </p>
          <p className="pt-4 text-xs text-ubari-mute/70">
            Documento placeholder — revise com assessoria jurídica antes da
            publicação.
          </p>
        </div>
      </div>
    </article>
  );
}
