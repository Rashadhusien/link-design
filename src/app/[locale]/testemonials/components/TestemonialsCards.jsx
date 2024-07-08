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

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axiosInstance from "../../config/axios.config";
import TestemonilasSkelton from "./TestemonilasSkelton";

function TestemonialsCards() {
  const { t, i18n } = useTranslation();

  const [testemonials, setTestemonials] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const currentLang = i18n.language;
  useEffect(() => {
    const fetchTestemoinals = async () => {
      try {
        const res = await axiosInstance.get(
          `/testemonials?populate=*&locale=${currentLang}`
        );

        const testemonialsAPI = res?.data?.data;

        setTestemonials(testemonialsAPI);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestemoinals();
  }, [currentLang]);

  const testemonialsJSX = testemonials.map((testemonial) => {
    // console.log(testemonial);

    return (
      <SwiperSlide key={testemonial?.id} className="mx-auto">
        <div key={testemonial.id} className="mx-auto w-fit">
          <div
            className={`p-10 mb-10 relative max-w-[450px]  bg-[#f5f8fe] -z-20  ${
              currentLang === "en" ? "arrow-down" : "arrow-down-ar"
            } `}
          >
            <SentimentSatisfiedAltIcon
              className={` absolute left-1/2 top-1/2 text-[150px] text-[#e7f0fe] -z-10 -translate-x-1/2 -translate-y-1/2  opacity-70`}
            />
            <p className="text-grayp leading-8 text-start">
              {testemonial?.attributes?.message}
            </p>
          </div>
          <div className="flex justify-start px-8 items-center gap-2 mx-auto mb-14">
            <Avatar
              alt="Remy Sharp"
              src={testemonial?.attributes?.icon?.data?.attributes?.url}
              sx={{ width: 50, height: 50 }}
            />
            <h6 className="text-2xl text-gray">
              {testemonial?.attributes?.name}
            </h6>
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
      <TestemonilasSkelton isLoading={isLoading} />
    </div>
  );
}

export default TestemonialsCards;
