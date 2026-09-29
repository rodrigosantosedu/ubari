"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CarouselProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  align?: "start" | "center";
  dragFree?: boolean;
};

export function Carousel({
  children,
  className,
  trackClassName,
  showDots = true,
  showArrows = false,
  align = "start",
  dragFree = false,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align,
    containScroll: "trimSnaps",
    dragFree,
  });
  const [selected, setSelected] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={cn("flex touch-pan-y gap-4", trackClassName)}>{children}</div>
      </div>
      {showArrows && (
        <div className="mr-[5%] mt-[25px] flex justify-end gap-3 min-[1920px]:mr-[10%]">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-12 w-12 items-center justify-center transition-opacity hover:opacity-50"
          >
            <Chevron className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Próximo slide"
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-12 w-12 items-center justify-center transition-opacity hover:opacity-50"
          >
            <Chevron />
          </button>
        </div>
      )}
      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-6 flex justify-center gap-2" role="tablist">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === selected ? "bg-ubari-bronze" : "bg-ubari-gold/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden>
      <path
        d="M9 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function CarouselSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0", className)}>{children}</div>
  );
}
