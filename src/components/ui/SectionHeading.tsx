import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light && "text-white/60")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-serif text-display-sm md:text-display-md text-balance",
          light ? "text-white" : "text-ubari-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 font-sans text-sm font-light leading-[1.8] md:text-base",
            light ? "text-white/75" : "text-ubari-mute"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
