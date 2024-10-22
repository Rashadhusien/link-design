"use client";
import Image from "next/image";

// import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Swippe() {
  return (
    <div aria-hidden="true">
      <div aria-hidden="true" className="h-[50vh] md:h-screen">
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper mb-20 max-h-[70vh] md:max-h-max :w-full :h-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="text-center text-lg relative">
            <Image
              src={"/slide-2.jpg"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 sm:-translate-x-[80%] -translate-y-1/2  text-start text-whitep  ">
              <h2 className="text-swipper font-bold mt-2 mb-4  sm:mb-7 text-2xl sm:text-2xl md:text-5xl lg:text-6xl">
                أفضل خدمات مكافحة الحرائق وبأسعار مناسبة
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide className="text-center text-lg relative">
            <Image
              src={"/slide-3.jpg"}
              alt="slide-3"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 sm:-translate-x-[80%] -translate-y-1/2  text-start text-whitep  ">
              <h2 className="text-swipper font-bold mt-2 mb-4 sm:mb-7 text-2xl sm:text-2xl md:text-5xl lg:text-6xl">
                خدمة سباكة احترافية يمكنك الوثوق بها.
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Swippe;
