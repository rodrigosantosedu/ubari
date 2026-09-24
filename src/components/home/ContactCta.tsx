import Link from "next/link";
import { site } from "@/content/site";
import { LeadForm } from "@/components/forms/LeadForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/** Equivalente ao "Fale conosco" da Kurotel */
export function ContactCta() {
  return (
    <section id="agendar" className="section-padding bg-ubari-cream">
      <div className="container-ubari">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-display-md text-ubari-ink">
            Fale conosco
          </h2>
          <p className="mt-5 font-sans text-sm font-light text-ubari-mute">
            Dê o primeiro passo. Estamos aqui para te acolher.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-ubari-line bg-white p-5 transition-colors hover:border-ubari-ink"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ubari-mute">
                WhatsApp
              </p>
              <p className="mt-2 font-serif text-xl text-ubari-ink">
                Conversar agora
              </p>
            </a>
            <a
              href={site.contact.phoneHref}
              className="block border border-ubari-line bg-white p-5 transition-colors hover:border-ubari-ink"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ubari-mute">
                Telefone
              </p>
              <p className="mt-2 font-serif text-xl text-ubari-ink">
                {site.contact.phone}
              </p>
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="block border border-ubari-line bg-white p-5 transition-colors hover:border-ubari-ink"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ubari-mute">
                E-mail
              </p>
              <p className="mt-2 font-serif text-xl text-ubari-ink">
                {site.contact.email}
              </p>
            </a>
            <p className="font-sans text-xs font-light leading-relaxed text-ubari-mute">
              {site.address.full}
              <br />
              {site.hours.weekdays}
            </p>
            <p className="font-sans text-xs text-ubari-mute">
              Suas informações são tratadas com total sigilo.{" "}
              <Link href="/politica-de-privacidade" className="link-bronze">
                Política de Privacidade
              </Link>
            </p>
          </div>

          <FadeIn className="lg:col-span-8">
            <LeadForm formId="home_contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
