"use client";

import { useState } from "react";
import { faq } from "@/content/faq";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

export function FaqSection({
  items = faq,
  id = "faq",
}: {
  items?: typeof faq;
  id?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-ubari max-w-3xl">
        <FadeIn className="mb-12 text-center">
          <h2 className="font-serif text-display-md text-ubari-ink">
            Perguntas frequentes
          </h2>
        </FadeIn>
        <FadeIn>
          <ul>
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.question} className="border-t border-ubari-line last:border-b">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-ubari-ink md:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "mt-1 shrink-0 text-ubari-gold transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 font-sans text-sm font-light leading-relaxed text-ubari-mute">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
