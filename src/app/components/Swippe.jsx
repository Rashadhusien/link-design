"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { CldImage } from "next-cloudinary";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "slide-1",
    text: "أفضل خدمات مكافحة الحرائق وبأسعار مناسبة",
  },
  {
    id: 2,
    image: "slide-2",
    text: "خدمة سباكة احترافية يمكنك الوثوق بها.",
  },
];

function Swippe() {
  return (
    <div className="h-[50vh] md:h-screen">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper mb-20 max-h-[70vh] md:max-h-full w-full"
      >
        {slides.map(({ id, image, text }) => (
          <SwiperSlide key={id} className="relative">
            <CldImage
              src={image}
              alt={`slide-${id}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 sm:-translate-x-[80%] -translate-y-1/2 text-start text-white">
              <h2 className="text-swipper font-bold mt-2 mb-4 sm:mb-7 text-2xl md:text-5xl lg:text-6xl">
                {text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swippe;
