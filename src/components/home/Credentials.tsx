import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function Credentials() {
  const items = [
    { value: "CRP-06", label: "Profissionais registrados" },
    { value: site.responsibleTechnician.crp, label: "Responsável técnico" },
    { value: "[ANOS]+", label: "Anos de atuação" },
    { value: "Google", label: "Avaliações externas", href: site.googleReviewsUrl },
  ];

  return (
    <section className="border-y border-ubari-line bg-white py-16 md:py-20">
      <div className="container-ubari">
        <FadeIn>
          <p className="mb-12 text-center font-sans text-[10px] uppercase tracking-[0.28em] text-ubari-mute">
            Confiança e credenciais
          </p>
          <ul className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {items.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-2xl text-ubari-ink hover:text-ubari-bronze md:text-3xl"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-serif text-2xl text-ubari-ink md:text-3xl">
                    {c.value}
                  </p>
                )}
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-ubari-mute">
                  {c.label}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center font-sans text-xs text-ubari-mute/70">
            Não reproduzimos depoimentos de pacientes.{" "}
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              Ver avaliações no Google
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
