"use client";

import Link from "next/link";
import Image from "next/image";
import { painMoments } from "@/content/home";
import { FadeIn } from "@/components/ui/FadeIn";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";

function MomentCard({
  title,
  href,
  image,
  alt,
}: (typeof painMoments)[number]) {
  return (
    <Link href={href} className="group relative block aspect-[3/4] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-xl text-white md:text-2xl">{title}</h3>
      </div>
    </Link>
  );
}

export function PainMoments() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ubari">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-display-md text-ubari-ink text-balance">
            Talvez você esteja vivendo um destes momentos
          </h2>
          <p className="mt-5 font-sans text-sm font-light text-ubari-mute">
            A ansiedade não precisa controlar a forma como você vive, trabalha
            ou se relaciona.
          </p>
        </FadeIn>

        <div className="md:hidden">
          <Carousel>
            {painMoments.map((m) => (
              <CarouselSlide key={m.slug} className="basis-[78%]">
                <MomentCard {...m} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>

        <div className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-4">
          {painMoments.map((m, i) => (
            <FadeIn key={m.slug} delay={i * 0.04}>
              <MomentCard {...m} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
