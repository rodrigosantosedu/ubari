"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { spacePhotos } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";

/** Equivalente à grade "Estrutura" da Kurotel */
export function SpaceGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-ubari-cream section-padding">
      <div className="container-ubari">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-display-md text-ubari-ink">
            O Espaço
          </h2>
          <p className="mt-5 font-sans text-sm font-light text-ubari-mute">
            Estrutura interna e externa — um casarão para respirar
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {spacePhotos.map((photo, i) => (
            <FadeIn key={photo.title} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] w-full overflow-hidden"
                aria-label={photo.title}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white">
                    {photo.title}
                  </span>
                </span>
              </button>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/espaco" className="btn-ghost-dark">
            Faça um tour pelo espaço
          </Link>
        </div>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 font-sans text-xs uppercase tracking-widest text-white/80"
            onClick={() => setLightbox(null)}
          >
            Fechar
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={spacePhotos[lightbox].image}
              alt={spacePhotos[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
