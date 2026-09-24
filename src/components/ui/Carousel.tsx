"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CarouselProps = {
  children: ReactNode;
  className?: string;
  showDots?: boolean;
  align?: "start" | "center";
};

export function Carousel({
  children,
  className,
  showDots = true,
  align = "start",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align,
    containScroll: "trimSnaps",
    dragFree: false,
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
        <div className="flex touch-pan-y gap-4">{children}</div>
      </div>
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
