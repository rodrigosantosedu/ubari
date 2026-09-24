import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function History() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ubari">
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/4] overflow-hidden lg:aspect-[4/5]">
              <Image
                src="/images/espaco/fachada.png"
                alt="Fachada do casarão da Ubari no Taquaral"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <p className="eyebrow">A história</p>
              <h2 className="mt-4 font-serif text-display-md text-ubari-ink">
                Um espaço nascido do acolhimento
              </h2>
              <p className="mt-6 font-sans text-sm font-light leading-[1.85] text-ubari-mute md:text-base">
                A Ubari nasceu em {site.foundedYear} a partir da visão de{" "}
                {site.founders}. Escolhemos um casarão no Taquaral — perto da
                Lagoa do Taquaral — para criar um refúgio urbano com carinha de
                casa, onde cada pessoa possa respirar e ser ouvida de verdade.
              </p>
              <p className="mt-4 font-sans text-sm font-light leading-[1.85] text-ubari-mute md:text-base">
                Acreditamos que cuidar da saúde mental começa pelo acolhimento:
                ambiente humano, vínculo contínuo e cuidado individualizado.
              </p>
              <Link href="/a-ubari" className="btn-text mt-10 inline-block">
                Conheça a Ubari
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
