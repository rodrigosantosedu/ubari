import Image from "next/image";
import { spacePhotos } from "@/content/home";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";

export function SpaceGallery() {
  return (
    <section className="mt-[60px] bg-white min-[480px]:mt-0">
      <div className="mx-[5%] min-[1920px]:mx-[10%]">
        <h2 className="font-serif text-[36px] font-normal leading-[1.25] tracking-[-0.02em] min-[480px]:text-[39px] min-[480px]:leading-[49px]">
          Estrutura interna e externa
        </h2>
      </div>
      <div className="mt-8">
        <Carousel showDots={false} showArrows dragFree trackClassName="pl-[5%] min-[1920px]:pl-[10%]">
          {spacePhotos.map((photo) => (
            <CarouselSlide
              key={photo.title + photo.image}
              className="w-[90vw] min-[480px]:w-[70vw] min-[992px]:w-[32rem]"
            >
              <figure>
                <div className="relative h-[400px] overflow-hidden min-[992px]:h-[460px]">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 479px) 90vw, 32rem"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[3px]">
                  {photo.title}
                </figcaption>
              </figure>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
