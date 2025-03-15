"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import SkeletonContent from "./OneServiceSkeleton";

function Service({ service, isLoading }) {
  const renderContent = service?.servicesContent?.map((serviceContent) => {
    const renderImages = serviceContent?.images?.map((img, i) => {
      return (
        <SwiperSlide key={i} className="max-w-full flex justify-center">
          {img && (
            <Image
              src={img}
              alt="Service Image"
              quality={100}
              width={800}
              height={600}
              className="service-img w-full object-cover rounded-sm"
              
            />
          )}
        </SwiperSlide>
      );
    });

    return (
      <div
        key={serviceContent?.id}
        className="w-full pb-20 overflow-hidden rounded-sm"
      >
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
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {renderImages}
          </Swiper>
        </div>
        <div className="pt-14">
          <h1 className="text-gray text-3xl capitalize font-bold pb-8">
            {serviceContent.title}
          </h1>
          <p className="text-grayp leading-8 text-md">
            {serviceContent.descirption}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full lg:max-w-[70%] ">
      {isLoading ? (
        <SkeletonContent />
      ) : service?.servicesContent?.length > 0 ? (
        renderContent
      ) : (
        <p className=" text-center ">Service Not Found</p>
      )}
    </div>
  );
}

export default Service;
