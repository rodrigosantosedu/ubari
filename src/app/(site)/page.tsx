import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { PainMoments } from "@/components/home/PainMoments";
import { Services } from "@/components/home/Services";
import { History } from "@/components/home/History";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Differentials } from "@/components/home/Differentials";
import { SpaceGallery } from "@/components/home/SpaceGallery";
import { Credentials } from "@/components/home/Credentials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactCta } from "@/components/home/ContactCta";
import { faq } from "@/content/faq";
import { buildFaqSchema } from "@/lib/schema";

/**
 * Home no ritmo da Kurotel:
 * Hero → Filosofia → Momentos → Atendimentos → História →
 * Personalização → Diferenciais → Espaço → Credenciais →
 * Conteúdo → FAQ → Fale conosco
 */
export default function HomePage() {
  const faqSchema = buildFaqSchema(faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Manifesto />
      <PainMoments />
      <Services />
      <History />
      <HowItWorks />
      <Differentials />
      <SpaceGallery />
      <Credentials />
      <BlogPreview />
      <FaqSection />
      <ContactCta />
    </>
  );
}
