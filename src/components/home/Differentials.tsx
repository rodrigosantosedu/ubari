import Image from "next/image";
import { differentials } from "@/content/home";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";

const photos = [
  "/images/espaco/fachada.png",
  "/images/espaco/recepcao.jpg",
  "/images/espaco/sacada.png",
  "/images/equipe/psicologa.jpg",
  "/images/equipe/bruno.png",
  "/images/hero-poster.jpg",
];

export function Differentials() {
  return (
    <section className="bg-white py-16 min-[480px]:py-[66px]">
      <div className="mx-[5%] min-[1920px]:mx-[10%]">
        <h2 className="font-serif text-[36px] font-normal leading-[1.25] tracking-[-0.02em] min-[480px]:text-[39px] min-[480px]:leading-[49px]">
          Diferenciais
        </h2>
        <p className="mt-3 font-sans text-base leading-[26px]">
          O que torna a Ubari um espaço à parte
        </p>
      </div>

      <div className="mt-8">
        <Carousel showDots={false} showArrows dragFree trackClassName="pl-[5%] min-[1920px]:pl-[10%]">
          {differentials.map((item, index) => (
            <CarouselSlide key={item.title} className="w-[300px]">
              <article>
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={photos[index % photos.length]}
                    alt={item.alt}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-sans text-[10px] font-medium uppercase tracking-[3px] text-[#636768]">
                  Ubari
                </p>
                <h3 className="mt-2 font-serif text-[25px] font-normal leading-[35px]">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-base leading-[26px]">{item.description}</p>
              </article>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
