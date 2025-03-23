"use client";

import { Avatar } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useMemo, useState } from "react";
import TestimonialsSkeleton from "./TestemonilasSkelton";

function TestemonialsCards() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const testimonialsJSX = useMemo(
    () =>
      testimonials.map(({ id, description, name }, index) => (
        <SwiperSlide key={id} className="mx-auto">
          <div
            className={`mx-auto w-fit transition-all duration-300 ${
              activeIndex === index
                ? "scale-105 lg:scale-100 drop-shadow-md "
                : "scale-95 opacity-10 lg:opacity-50"
            }`}
          >
            <div className="p-10 mb-10 relative max-w-[450px] bg-[#f5f8fe] -z-20 rounded-lg">
              <SentimentSatisfiedAltIcon className="absolute left-1/2 top-1/2 text-[150px] text-[#e7f0fe] -z-10 -translate-x-1/2 -translate-y-1/2 opacity-70" />
              <p className="text-grayp leading-8 text-start">{description}</p>
            </div>
            <div className=" flex justify-start px-8 items-center gap-2 mx-auto mb-14">
              <div>
                <Avatar
                  alt={name}
                  sx={{ width: 50, height: 50, backgroundColor: "#0052da" }}
                >
                  {name[0]}
                </Avatar>
              </div>
              <h3 className="text-2xl text-gray">{name}</h3>
            </div>
          </div>
        </SwiperSlide>
      )),
    [testimonials, activeIndex]
  );

  return (
    <div className="container mx-auto ">
      {isLoading ? (
        <TestimonialsSkeleton />
      ) : testimonials.length > 0 ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonialsJSX}
        </Swiper>
      ) : (
        <p>No Testimonials Found...</p>
      )}
    </div>
  );
}

export default TestemonialsCards;
