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
import { Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

function Swippe() {
  const { t } = useTranslation(["swipper"]);

  return (
    <div>
      <div className="hidden sm:block">
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper mb-20"
          autoplay={{
            delay: 5000,
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
            <div className="absolute top-1/2 left-1/2 -translate-x-[80%] -translate-y-1/2  text-start text-whitep  ">
              <Typography
                variant="h2"
                className=" font-bold mt-2 mb-1 sm:mb-10 text-xl sm:text-2xl md:text-5xl lg:text-6xl"
              >
                {t("fireHead")}
              </Typography>
              <p>{t("firedesc")}</p>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-[80%] -translate-y-1/2  text-start text-whitep  ">
              <Typography
                variant="h2"
                className="  font-bold mt-2 mb-1 sm:mb-10 text-xl sm:text-2xl md:text-5xl lg:text-6xl"
              >
                {t("plumbHead")}
              </Typography>
              <p>{t("plumbDesc")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mx-auto block sm:hidden py-32 px-3 relative overflow-hidden ">
        <p className="text-2xl text-primary ">{t("smallSpan")}</p>
        <h1 className="text-5xl font-bold text-gray mt-5 mb-6">
          {t("smallHead")}
          <span className="text-primary ">{t("smallHeadSpan")}</span>
        </h1>
        <p className="text-lg tracking-wide text-gray max-w-[400px]">
          {t("smallDesc")}
        </p>
        <div className="h-[1000%] w-[1000%] bg-[#f5f8fe] absolute -left-5 translate-x-[1%] -z-10 rotate-6 top-10 block sm:hidden" />
      </div>
    </div>
  );
}

export default Swippe;
