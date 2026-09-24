import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { footerNav } from "@/content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ubari-line bg-white text-ubari-ink">
      <div className="container-ubari py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/brand/logo.png"
              alt="Ubari"
              width={120}
              height={148}
              className="h-14 w-auto"
            />
            <p className="mt-5 font-serif text-lg italic text-ubari-bronze">
              {site.tagline}
            </p>
            <div className="mt-6 space-y-1 font-sans text-sm font-light text-ubari-mute">
              <a href={site.contact.phoneHref} className="block hover:text-ubari-ink">
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="block hover:text-ubari-ink"
              >
                {site.contact.email}
              </a>
              <p className="pt-2">{site.address.full}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.22em] text-ubari-mute">
              Mapa do site
            </p>
            <ul className="space-y-2">
              {footerNav.instituicao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-ubari-mute hover:text-ubari-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.22em] text-ubari-mute">
              Atendimentos
            </p>
            <ul className="space-y-2">
              {footerNav.atendimentos.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-ubari-mute hover:text-ubari-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.22em] text-ubari-mute">
              Suporte
            </p>
            <ul className="space-y-2">
              {footerNav.suporte.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-ubari-mute hover:text-ubari-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.22em] text-ubari-mute">
              Redes sociais
            </p>
            <ul className="space-y-2">
              {(
                [
                  ["Instagram", site.social.instagram],
                  ["LinkedIn", site.social.linkedin],
                  ["Facebook", site.social.facebook],
                  ["YouTube", site.social.youtube],
                ] as const
              ).map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ubari-mute hover:text-ubari-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ubari-line pt-8 font-sans text-xs font-light leading-relaxed text-ubari-mute">
          <p>
            © {year} {site.name}. Todos os direitos reservados. CNPJ: {site.cnpj}
          </p>
          <p className="mt-2">
            Responsável Técnico: {site.responsibleTechnician.name} —{" "}
            {site.responsibleTechnician.crp}
          </p>
        </div>
      </div>
    </footer>
  );
}
