import Link from "next/link";
import Image from "next/image";
import { howItWorks } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";

/** Equivalente à "Personalização" da Kurotel */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-ubari-cream">
      <div className="container-ubari">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
              <Image
                src="/brand/tree-mark.png"
                alt=""
                width={48}
                height={48}
                className="mb-8 opacity-40"
                aria-hidden
              />
            <h2 className="font-serif text-display-md text-ubari-ink">
              Personalização
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm font-light leading-[1.85] text-ubari-mute md:text-base">
              Cada pessoa é única — e o cuidado também. Você preenche um breve
              formulário, nossa equipe entende o que você busca e indica o
              profissional mais adequado. Sem filas, sem rotatividade de
              terapeutas.
            </p>
            <Link href="/agendar" className="btn-cta mt-10 inline-flex">
              Começar agora
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ol className="space-y-0">
              {howItWorks.map((item, i) => (
                <li
                  key={item.step}
                  className="border-t border-ubari-line py-7 last:border-b"
                >
                  <div className="flex gap-6">
                    <span className="font-serif text-2xl text-ubari-gold">
                      {String(item.step).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-ubari-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm font-light leading-relaxed text-ubari-mute">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
