import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type SplitBandProps = {
  id?: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  imageSide?: "left" | "right";
  href?: string;
  cta?: string;
  compact?: boolean;
};

export function SplitBand({
  id,
  title,
  body,
  image,
  alt,
  imageSide = "right",
  href,
  cta,
  compact = false,
}: SplitBandProps) {
  const imageLeft = imageSide === "left";

  return (
    <section
      id={id}
      className={cn(
        "bg-white",
        compact ? "py-[30px] min-[480px]:py-[66px]" : "py-10 min-[480px]:py-[66px]"
      )}
    >
      <div
        className={cn(
          "min-[992px]:mx-0",
          imageLeft
            ? "mx-[5%] min-[992px]:ml-0 min-[992px]:mr-[5%] min-[1920px]:mr-[10%]"
            : "mx-[5%] min-[992px]:ml-[5%] min-[992px]:mr-0 min-[1920px]:ml-[10%]"
        )}
      >
        <div
          className={cn(
            "mt-10 flex flex-col items-start gap-[50px] min-[992px]:flex-row min-[992px]:justify-between",
            imageLeft && "min-[992px]:flex-row-reverse"
          )}
        >
          <div className="w-full min-[992px]:w-[37%]">
            <Image
              src="/brand/tree-mark.png"
              alt=""
              width={40}
              height={40}
              className="mb-6 h-10 w-10 object-contain opacity-80"
            />
            <h2 className="font-serif text-[36px] font-normal leading-[1.25] tracking-[-0.02em] text-black min-[480px]:text-[39px] min-[480px]:leading-[49px]">
              {title}
            </h2>
            <p className="mt-4 font-sans text-base leading-[26px] text-black">{body}</p>
            {href && cta && (
              <Link href={href} className="btn-outline-dark mt-[30px]">
                {cta}
              </Link>
            )}
          </div>
          <div className="relative h-[280px] w-full overflow-hidden min-[992px]:h-[540px] min-[992px]:w-1/2 min-[992px]:min-w-0">
            <Image src={image} alt={alt} fill sizes="(max-width: 991px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
