import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spacePhotos } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "O Espaço",
  description:
    "Tour pelo casarão da Ubari no Taquaral, Campinas: fachada, recepção, salas, sala infantil, jardim e detalhes acolhedores.",
};

export default function EspacoPage() {
  return (
    <>
      <section className="bg-ubari-forest pb-16 pt-32 md:pt-40">
        <div className="container-ubari">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
            O Espaço
          </p>
          <h1 className="max-w-3xl font-display text-display-md text-ubari-cream md:text-display-lg">
            Um refúgio urbano no Taquaral
          </h1>
          <p className="mt-5 max-w-xl text-ubari-cream/80">
            Entre. Respire. Fique à vontade. Fotos reais do casarão em breve —
            proporções e legendas já preparadas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ubari-cream">
        <div className="container-ubari">
          <SectionHeading
            title="Ambientes"
            description="Cada canto pensado para conforto, privacidade e a sensação de casa."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {spacePhotos.map((photo, i) => (
              <FadeIn key={photo.title} delay={i * 0.05}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-display text-lg text-ubari-ink">
                    {photo.title}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/agendar" className="btn-cta">
              Agendar sessão
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
