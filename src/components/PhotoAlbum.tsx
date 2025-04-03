
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const photos = [
  {
    id: 1,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2F1ifbyland.jpg?alt=media&token=96085274-86cf-4214-be66-4d129bfa286a",
    alt: "One if By Land",
  },
  {
    id: 2,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fmoony.jpg?alt=media&token=8a32b41a-b3b4-4b41-a7e1-38f0125f0bfd",
    alt: "Mooney the Manatee",
  },
  // Using sample images for the remaining photos as shown in the screenshot
  {
    id: 3,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fhanukkah3.jpg?alt=media&token=e1823508-49af-4d64-b52c-35e8c5c9b681",
    alt: "Hanukkah treats",
  },
  {
    id: 4,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Ftallin2.jpg?alt=media&token=3d5b3461-3b93-4c2a-9498-2a5e3c7e1d45",
    alt: "Tallin Food Market",
  },
  {
    id: 5,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Frock3.jpg?alt=media&token=353a3efe-717c-4687-9baa-ffb3a4e6508b",
    alt: "Rock Center Selfie",
  },
  {
    id: 6,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fseoul.jpg?alt=media&token=a6991090-ea0f-4f12-b8e6-df28d6c9e6f3",
    alt: "Seoul!",
  },
  {
    id: 7,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fknotel.jpg?alt=media&token=8d6f6b9b-e314-4bd9-b9fc-d5c811925505",
    alt: "Knotel Holiday Party",
  },
  {
    id: 8,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fhanukkah2.jpg?alt=media&token=54a1f5c5-c096-4ed0-885b-730382d33892",
    alt: "Our Menorah",
  },
  {
    id: 9,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fhome.jpg?alt=media&token=81329879-abb8-4f3f-983f-34eb0adcb009",
    alt: "Home",
  },
  {
    id: 10,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fleo.jpg?alt=media&token=c30ec592-51f3-4503-bab6-c9638e64b865",
    alt: "Leo",
  },
  {
    id: 11,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fhome2024.jpg?alt=media&token=c2d3270a-8a50-44aa-8196-d2a12dd0592b",
    alt: "Our Tree in 2024",
  },
  {
    id: 12,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fchallah.jpg?alt=media&token=84f634ca-e5ac-490a-91df-6db9ccda3ad8",
    alt: "Happy Challahdays",
  },
  {
    id: 13,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fvietnam.jpg?alt=media&token=85ec4d59-70da-489d-aaf0-4b20bbae265c",
    alt: "Christmas in Vietnam",
  },
  {
    id: 14,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fhometree3.jpg?alt=media&token=c157ec20-3829-4db7-8a9f-19c659a59fb1",
    alt: "Our Tree in 2023",
  },
  {
    id: 15,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Frock%202.jpg?alt=media&token=31be3653-7e79-4280-83ab-1ada31069437",
    alt: "Rock Center Selfie",
  },
  {
    id: 16,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Faustria.jpg?alt=media&token=20f03bb6-1995-4e81-a5b5-9d907970b8fc",
    alt: "Christmas shop in Austria",
  },
  {
    id: 17,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fcrew.jpg?alt=media&token=839130b4-7513-4979-a41c-a22f171bada1",
    alt: "The Crew",
  },
  {
    id: 18,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fparis.jpg?alt=media&token=d0aba99d-0495-40d9-a69c-276e19a20ea5",
    alt: "Paris!",
  },
  {
    id: 19,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Ftallin.jpg?alt=media&token=60465ed1-0db2-42fa-987e-6321e8dfc908",
    alt: "Tallin Tree",
  },
  {
    id: 20,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fhanukkah.jpg?alt=media&token=46cd765f-1fed-487f-b66d-c3c8c683d2c3",
    alt: "Hanukkah",
  },
  {
    id: 21,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Frock%20center.jpg?alt=media&token=8ce4ddc3-4d0c-4e2b-9577-8d119ad942a1",
    alt: "Rock Center Tree",
  },
  {
    id: 22,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fpolarbear.jpg?alt=media&token=8605dd3d-5f01-4d64-8cb6-bc9928dd7e75",
    alt: "Polar Bear",
  },
  {
    id: 23,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fcookies.jpg?alt=media&token=8fb5134e-6ead-447a-8b92-c1feef29a2dd",
    alt: "Christmas Cookies",
  },
  {
    id: 24,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fpuzzle.jpg?alt=media&token=5de3e02e-a22c-49d5-a327-d708bb7f6fc1",
    alt: "Puzzle",
  },
  {
    id: 25,
    src: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2Fsubway.jpg?alt=media&token=e33ea526-4459-4ef8-ab21-6912010346e4",
    alt: "Subway",
  },
];

export const PhotoAlbum: React.FC = () => {
  return (
    <div className="w-full mt-16 bg-[#4d6574] py-16 px-10">
      <h2 className="text-5xl md:text-6xl font-kaushan text-white mb-10">Photos</h2>
      
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
