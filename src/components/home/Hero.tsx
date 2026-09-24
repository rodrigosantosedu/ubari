import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-poster.jpg"
        alt="Fachada do casarão da Ubari Espaço de Psicologia no Taquaral, Campinas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-black/35"
        aria-hidden
      />

      <div className="container-ubari relative z-10 py-32 text-center">
        <FadeIn>
          <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            Espaço de Psicologia · Taquaral, Campinas · Online Brasil e Exterior
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-display-lg font-normal text-white text-balance md:text-display-xl">
            Cuidar da saúde mental começa pelo acolhimento.
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-sans text-sm font-light leading-relaxed text-white/85 md:text-base">
            Um espaço tranquilo, humano e individualizado para desacelerar,
            reorganizar a mente e construir um vínculo terapêutico duradouro.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/agendar" className="btn-cta">
              Agendar sessão
            </Link>
            <Link href="/espaco" className="btn-ghost">
              Conheça o espaço
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <span className="block h-10 w-px animate-pulse bg-white/50" aria-hidden />
      </div>
    </section>
  );
}
