import Image from "next/image";
import { cn } from "@/lib/cn";

type TreeWatermarkProps = {
  className?: string;
};

export function TreeWatermark({ className }: TreeWatermarkProps) {
  return (
    <Image
      src="/brand/tree-mark.png"
      alt=""
      width={120}
      height={120}
      className={cn("watermark-tree", className)}
      aria-hidden
    />
  );
}
