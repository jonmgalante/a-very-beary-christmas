
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const photos = [
  {
    id: 1,
    src: "/lovable-uploads/17c9577f-b691-4b33-a1a4-6e31fcbf1974.png",
    alt: "Christmas tree with festive decorations",
  },
  {
    id: 2,
    src: "/lovable-uploads/532483d9-4299-413c-b2ac-6f0900f04465.png",
    alt: "Christmas tree image",
  },
  // Using sample images for the remaining photos as shown in the screenshot
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1543589077-47d81606c1bf",
    alt: "Couple by Christmas tree",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1576497631993-7b1a2b2256e7",
    alt: "Person holding Christmas decoration",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1575569591780-88b428e54c97",
    alt: "Family exchanging gifts",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
    alt: "Christmas decoration",
  },
];

export const PhotoAlbum: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 mb-10 bg-[#4d6574] py-16 px-10 rounded-md">
      <h2 className="text-5xl md:text-6xl font-kaushan text-gray-700 mb-10">Photos</h2>
      
      {/* Mobile Carousel (visible on small screens) */}
      <div className="block md:hidden">
        <Carousel>
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id}>
                <div className="p-1">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Grid Layout (visible on medium screens and up) */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-md">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
