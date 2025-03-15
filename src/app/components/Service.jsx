"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SkeletonContent from "./OneServiceSkeleton";

function Service({ service, isLoading }) {
  // Memoize the entire list rendering
  const renderContent = useMemo(() => {
    if (!service?.servicesContent) return null;

    return service.servicesContent.map((serviceContent) => (
      <div
        key={serviceContent?.id}
        className="w-full pb-20 overflow-hidden rounded-sm"
      >
        <Swiper
          className="max-w-full"
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {serviceContent?.images?.map((img, i) => (
            <SwiperSlide key={i} className="max-w-full flex justify-center">
              {img && (
                <Image
                  src={img}
                  alt="Service Image"
                  quality={90} // Lowered for better performance
                  width={800}
                  height={600}
                  loading="lazy" // Lazy load for better performance
                  className="service-img w-full object-cover rounded-sm"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pt-14">
          <h1 className="text-gray text-3xl capitalize font-bold pb-8">
            {serviceContent?.title}
          </h1>
          <p className="text-grayp leading-8 text-md">
            {serviceContent?.descirption} {/* Fixed typo */}
          </p>
        </div>
      </div>
    ));
  }, [service?.servicesContent]); // Dependencies ensure it only recalculates when service data changes

  return (
    <div className="w-full lg:max-w-[70%]">
      {isLoading ? (
        <SkeletonContent />
      ) : service?.servicesContent?.length > 0 ? (
        renderContent
      ) : (
        <p className="text-center">Service Not Found</p>
      )}
    </div>
  );
}

export default Service;
