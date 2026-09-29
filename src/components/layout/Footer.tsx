import Link from "next/link";
import { site } from "@/content/site";
import { footerNav } from "@/content/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ContactMessageForm } from "@/components/forms/ContactMessageForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-white text-black">
      <div className="mx-[5%] py-16 min-[480px]:py-20 min-[1920px]:mx-[10%]">
        <h2 className="font-serif text-[36px] font-normal leading-[1.25] tracking-[-0.02em] min-[480px]:text-[39px] min-[480px]:leading-[49px]">
          Fale conosco
        </h2>
        <p className="mt-4 max-w-xl font-sans text-base leading-[26px]">
          Entre em contato conosco em qualquer um dos meios:
        </p>

        <div className="mt-10 grid gap-8 min-[768px]:grid-cols-3">
          <a href={getWhatsAppUrl()} className="block">
            <span className="block font-sans text-base">{site.contact.phone}</span>
            <span className="mt-1 block font-sans text-[10px] font-medium uppercase tracking-[3px]">
              Mande um WhatsApp
            </span>
          </a>
          <a href={site.contact.phoneHref} className="block">
            <span className="block font-sans text-base">{site.contact.phone}</span>
            <span className="mt-1 block font-sans text-[10px] font-medium uppercase tracking-[3px]">
              Ligue para a Ubari
            </span>
          </a>
          <a href={`mailto:${site.contact.email}`} className="block">
            <span className="block font-sans text-base">{site.contact.email}</span>
            <span className="mt-1 block font-sans text-[10px] font-medium uppercase tracking-[3px]">
              Mande e-mail
            </span>
          </a>
        </div>

        <div className="mt-8 max-w-xl">
          <ContactMessageForm />
        </div>

        <div id="newsletter" className="mt-20 max-[479px]:text-center">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">
            Newsletter
          </p>
          <p className="mt-4 max-w-xl font-sans text-base leading-[26px]">
            Inscreva-se na nossa newsletter e receba informações de saúde e
            bem-estar, além de benefícios exclusivos.
          </p>
          <NewsletterForm />
        </div>

        <div className="mt-[120px] grid gap-10 border-t border-black/10 pb-10 pt-10 max-[479px]:text-center min-[992px]:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-[991px]:grid max-[991px]:grid-cols-1 max-[991px]:gap-8 min-[480px]:max-[991px]:grid-cols-2">
            <div>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">
                Entre em contato
              </p>
              <a href={site.contact.phoneHref} className="mt-4 block font-sans text-sm">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="mt-2 block font-sans text-sm">
                {site.contact.email}
              </a>
              <p className="mt-4 font-sans text-sm leading-6 text-[#636768]">
                {site.address.full}
              </p>
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">
              Mapa do site
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.mapa.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-sans text-sm hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">
              Redes sociais
            </p>
            <ul className="mt-4 space-y-2">
              {(
                [
                  ["Instagram", site.social.instagram],
                  ["Linkedin", site.social.linkedin],
                  ["Facebook", site.social.facebook],
                  ["Youtube", site.social.youtube],
                ] as const
              ).map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm hover:opacity-60"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 font-sans text-xs leading-5 text-[#636768] max-[479px]:text-center">
          <p>
            © Todos os direitos reservados. Ubari {year} {site.address.city}, {site.address.state} / CNPJ:{" "}
            {site.cnpj}
          </p>
          <p className="mt-2">
            Responsável técnico: {site.responsibleTechnician.name} — {site.responsibleTechnician.crp}
          </p>
        </div>
      </div>
    </footer>
  );
}
