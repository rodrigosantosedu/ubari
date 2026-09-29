import { Hero } from "@/components/home/Hero";
import { SplitBand } from "@/components/home/SplitBand";
import { FullBleed } from "@/components/home/FullBleed";
import { Differentials } from "@/components/home/Differentials";
import { SpaceGallery } from "@/components/home/SpaceGallery";
import { Credentials } from "@/components/home/Credentials";
import { site } from "@/content/site";
import { howItWorks, services } from "@/content/home";

export default function HomePage() {
  const servicesText = services.map((service) => service.summary).join(" ");
  const howText = howItWorks
    .map((step) => step.description)
    .join(" ");

  return (
    <>
      <Hero />
      <SplitBand
        compact
        title={site.manifesto}
        body={site.puv}
        image="/images/espaco/fachada.png"
        alt="Fachada do casarão da Ubari no Taquaral"
        imageSide="right"
        href="/a-ubari"
        cta="Conheça a Ubari"
      />
      <FullBleed
        eyebrow="Ubari · Taquaral, Campinas"
        title={site.tagline}
        body="Ambiente humano, vínculo contínuo e cuidado individualizado. Presencial na Lagoa do Taquaral e online no Brasil e no exterior."
        image="/images/espaco/sacada.png"
        alt="Sacada e área externa da Ubari"
        primaryHref="/a-ubari"
        primaryLabel="Conheça a Ubari"
        secondaryHref="/#contato"
        secondaryLabel="Fale conosco"
      />
      <SplitBand
        id="atendimentos"
        title="Atendimentos"
        body={servicesText}
        image="/images/espaco/recepcao.jpg"
        alt="Recepção da Ubari"
        imageSide="right"
        href="/atendimentos/adultos"
        cta="Ver atendimentos"
      />
      <SplitBand
        id="personalizacao"
        title="Personalização"
        body={`Aqui, o que você precisa se transforma no cuidado que você recebe. ${howText}`}
        image="/images/equipe/psicologa.jpg"
        alt="Profissional da equipe Ubari"
        imageSide="left"
        href="/agendar"
        cta="Agendar sessão"
      />
      <Differentials />
      <SpaceGallery />
      <Credentials />
    </>
  );
}
