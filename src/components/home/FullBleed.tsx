import Image from "next/image";
import Link from "next/link";

type FullBleedProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function FullBleed({
  eyebrow,
  title,
  body,
  image,
  alt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: FullBleedProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden text-center text-white">
      <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_13%,rgba(0,0,0,0.11)_79%),linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35))]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-6 py-24">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">{eyebrow}</p>
        <h2 className="mt-4 font-serif text-[42px] font-normal leading-[1.1] tracking-[-0.01em] text-white min-[480px]:text-[61px] min-[480px]:leading-[71px]">
          {title}
        </h2>
        <p className="mt-6 max-w-xl font-sans text-base leading-[26px] text-white">{body}</p>
        <div className="mt-[25px] flex flex-col items-center gap-[18px] min-[480px]:flex-row min-[480px]:gap-[25px]">
          <Link href={primaryHref} className="btn-outline-light">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn-outline-light">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
