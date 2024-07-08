"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import axiosInstance from "../../../config/axios.config";

import SkeltonContent from "./SkeltonContent";

function Service({ serviceId }) {
  const { t, i18n } = useTranslation();

  const [servicesContent, setServicesContent] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getServiceContent() {
      try {
        const res = await axiosInstance.get(
          `services/${serviceId}?populate[servicecontents][populate]=*&locale=${i18n.language}`
        );

        const serviceObj = res?.data?.data?.attributes?.servicecontents?.data;

        console.log(serviceObj);

        setServicesContent(serviceObj);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getServiceContent();
  }, [i18n.language, serviceId]);

  const renderContent = servicesContent.map((serviceContent) => {
    // console.log(serviceContent?.attributes?.locale);
    // console.log(serviceContent?.attributes?.localizations?.data);

    const langObj = serviceContent?.attributes?.localizations?.data.map((t) => {
      return {
        titleLang: t?.attributes?.title,
        descriptionLang: t?.attributes?.description,
      };
    });

    const renderImages = serviceContent?.attributes?.serviceimage?.data.map(
      (img) => {
        // console.log(img?.attributes);
        return (
          <SwiperSlide key={img?.id} className="mx-auto max-w-full ">
            <Image
              src={img?.attributes?.url}
              alt={img?.attributes?.name}
              width={500} //img?.attributes?.width
              height={500} //img?.attributes?.height
              className="w-[500px] h-[500px] object-cover"
            />
          </SwiperSlide>
        );
      }
    );

    return (
      <div key={serviceContent?.id} className="w-full pb-20">
        <div className="">
          <Swiper
            className="max-w-full "
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {renderImages}
          </Swiper>
        </div>
        <div className="pt-14">
          <h1 className="text-gray text-3xl capitalize font-bold pb-8">
            {i18n.language === serviceContent?.attributes?.locale
              ? serviceContent?.attributes?.title
              : langObj[0].titleLang}
          </h1>
          <p className="text-grayp leading-8 text-md">
            {i18n.language === serviceContent?.attributes?.locale
              ? serviceContent?.attributes?.description
              : langObj[0].descriptionLang}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full lg:max-w-[70%] ">
      {renderContent}

      <SkeltonContent isLoading={isLoading} />
    </div>
  );
}

export default Service;
