import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


type Partner = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

const Partners: React.FC = () => {
  const partners: Partner[] = [
    { id: 1, name: 'Westin', src:"/underamour.png", alt: 'Westin Hotels & Resorts' },
    { id: 2, name: 'Summit', src: '/adidas.png', alt: 'Summit' },
    { id: 3, name: 'Holcim', src: '/nike.png', alt: 'Holcim' },
    { id: 4, name: 'ETV', src: '/reebok.png', alt: 'ETV' },
  ];

  return (
    <section className="text-center py-10 bg-slate-100">
      <h2 className="text-2xl font-semibold mb-4 font-kanit">CivicTrack Partners</h2>
      <Carousel className="relative max-w-4xl mx-auto">
        <CarouselContent className="flex gap-4">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="flex-shrink-0 w-full md:w-1/3">
              <div className="bg-white shadow-lg rounded-lg p-4 flex justify-center items-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150} // Adjust width based on your design
                  height={80} // Adjust height based on your design
                  className="mx-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">Previous</CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">Next</CarouselNext>
      </Carousel>
    </section>
  );
};

export default Partners;