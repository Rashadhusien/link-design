"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CldImage } from "next-cloudinary";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SkeletonContent from "./OneServiceSkeleton";

function Service({ service, isLoading }) {
  // Memoize the content rendering
  const renderContent = useMemo(() => {
    if (!service?.serviceContent) return null;

    return service.serviceContent.map((serviceContent) => (
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
          {serviceContent?.imgs?.map((img, i) => (
            <SwiperSlide key={i} className="max-w-full flex justify-center">
              {img && (
                <CldImage
                  src={img}
                  alt="Service Image"
                  quality={90}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="service-img w-full object-cover rounded-sm"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pt-8">
          <h1 className="text-gray text-3xl capitalize font-bold pb-8">
            {serviceContent?.title}
          </h1>
          <p className="text-grayp leading-8 text-md">
            {serviceContent?.description} {/* Fixed typo */}
          </p>
        </div>
      </div>
    ));
  }, [service?.serviceContent]); // Ensure re-render only when data changes

  return (
    <div className="w-full lg:max-w-[70%]">
      {isLoading ? (
        <SkeletonContent />
      ) : service?.serviceContent?.length > 0 ? (
        renderContent
      ) : (
        <p className="text-center">Service Not Found</p>
      )}
    </div>
  );
}

export default Service;
