"use client";

import { Avatar } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

import { testimonials } from "../../data/data";

function TestemonialsCards() {
  const testemonialsJSX = testimonials.map((testemonial) => {
    return (
      <SwiperSlide key={testemonial?.id} className="mx-auto">
        <div className="mx-auto w-fit">
          <div
            className={`p-10 mb-10 relative max-w-[450px]  bg-[#f5f8fe] -z-20 arrow-down-ar `}
          >
            <SentimentSatisfiedAltIcon
              className={` absolute left-1/2 top-1/2 text-[150px] text-[#e7f0fe] -z-10 -translate-x-1/2 -translate-y-1/2  opacity-70`}
            />
            <p className="text-grayp leading-8 text-start">
              {testemonial?.message}
            </p>
          </div>
          <div className="flex justify-start px-8 items-center gap-2 mx-auto mb-14">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 5,
                mass: 1,
                stiffness: 40,
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={testemonial?.imgSrc}
                sx={{ width: 50, height: 50 }}
              />
            </motion.div>
            <h3 className="text-2xl text-gray">{testemonial?.name}</h3>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {testemonialsJSX}
      </Swiper>
      {/* <TestemonilasSkelton isLoading={isLoading} /> */}
    </div>
  );
}

export default TestemonialsCards;
