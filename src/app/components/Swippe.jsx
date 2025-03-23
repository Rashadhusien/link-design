"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { CldImage } from "next-cloudinary";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="h-[60vh] sm:h-[70vh] md:h-screen">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="relative w-full h-full"
      >
        {slides.map(({ id, image, text }) => (
          <SwiperSlide key={id} className="relative">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <CldImage
                src={image}
                alt={`slide-${id}`}
                fill
                className="object-cover w-full h-full"
              />
              {/* Overlay */}
              <div className="absolute inset-0  bg-black/20"></div>
            </div>

            {/* Text Content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8 md:min-w-[800px]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug lg:leading-relaxed w-full">
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
