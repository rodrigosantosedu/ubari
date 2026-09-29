"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-poster.jpg",
    alt: "Fachada do casarão da Ubari no Taquaral, Campinas",
    kicker: "Um espaço de psicologia, em Campinas",
    title: "Cuidar da saúde mental começa pelo acolhimento.",
  },
  {
    image: "/images/espaco/recepcao.jpg",
    alt: "Recepção da Ubari",
    kicker: "Presencial na Lagoa do Taquaral",
    title: "Um vínculo terapêutico que permanece do início ao fim.",
  },
  {
    image: "/images/espaco/sacada.png",
    alt: "Sacada e jardim da Ubari",
    kicker: "Online no Brasil e no exterior",
    title: "O mesmo cuidado, em português, onde você estiver.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[45rem] items-end justify-center overflow-hidden text-center text-white min-[480px]:h-auto min-[480px]:max-h-[75vh] min-[480px]:min-h-[75vh] min-[480px]:items-center min-[1920px]:max-h-[70vh] min-[1920px]:min-h-[70vh]">
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_13%,rgba(0,0,0,0.11)_79%),linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center px-6 pb-16 min-[480px]:pb-0">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">
          Espaço de psicologia · Taquaral, Campinas
        </p>
        <p className="mt-4 font-serif text-[42px] font-normal leading-[1.1] tracking-[-0.01em] min-[480px]:text-[61px] min-[480px]:leading-[71px]">
          {slides[index].kicker}
        </p>
        <h1 className="mt-2 font-serif text-[42px] font-normal leading-[1.1] tracking-[-0.01em] text-white min-[480px]:text-[61px] min-[480px]:leading-[71px]">
          {slides[index].title}
        </h1>
        <div className="mt-[25px] flex flex-col items-center gap-[18px] min-[480px]:flex-row min-[480px]:gap-[25px]">
          <Link href="/#contato" className="btn-outline-light">
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  );
}
