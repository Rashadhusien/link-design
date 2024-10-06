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

function Swippe() {
  return (
    <div>
      {/* hidden sm:block */}
      <div className="h-[50vh] md:h-screen">
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
              <Typography
                variant="h2"
                className=" font-bold mt-2 mb-4  sm:mb-7 text-2xl sm:text-2xl md:text-5xl lg:text-6xl"
              >
                أفضل خدمات مكافحة الحرائق وبأسعار مناسبة
              </Typography>
              <p className="text-sm sm:text-md md:text-lg ">
                هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن تم
                تعديل غالبيتها بشكل ما
              </p>
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
              <Typography
                variant="h2"
                className=" font-bold mt-2 mb-4 sm:mb-7 text-2xl sm:text-2xl md:text-5xl lg:text-6xl"
              >
                {/* {t("plumbHead")} */}
                خدمة سباكة احترافية يمكنك الوثوق بها.
              </Typography>
              <p className="text-sm sm:text-md md:text-lg">
                هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن تم
                تعديل غالبيتها بشكل ما
              </p>
              {/*{t("plumbDesc")} */}
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="text-center text-lg relative">
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
                أفضل خدمات مكافحة الحرائق وبأسعار مناسبة
              </Typography>
              <p>
                هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن تم
                تعديل غالبيتها بشكل ما
              </p>
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
                خدمة سباكة احترافية يمكنك الوثوق بها.
              </Typography>
              <p>
                هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن تم
                تعديل غالبيتها بشكل ما
              </p>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Swippe;

// {/* <div className="hero-bg h-[80vh] container mx-auto block sm:hidden py-32 px-3 relative overflow-hidden ">
// <p className="text-2xl text-primary ">: :  كادر مدرب على أعلى مستوى</p>{/*{t("smallSpan")} */}
// <h1 className="text-5xl font-bold text-gray mt-5 mb-6">
//   {/* {t("smallHead")} */}
//   جاهز
//   <span className="text-primary ">لمساعدتك</span>{/* {t("smallHeadSpan")} */}
// </h1>
// <p className="text-lg tracking-wide text-gray max-w-[400px]">
//   {/* {t("smallDesc")} */}
//   نحن شركة معتمدة. نحن نقدم أفضل خدمات السباكة لك ولشركتك.
// </p>
// {/* <div className="h-[1000%] w-[1000%] bg-[#f5f8fe] absolute -left-5 translate-x-[-14%] -z-10 rotate-[50deg] top-10 block sm:hidden" /> */}
// </div> */}
