"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../../../../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import TestimonialsSkeleton from "./TestemonilasSkelton";
import { Smile } from "lucide-react";

function TestemonialsCards() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "testimonials"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(data);
        setIsLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const testimonialsJSX = useMemo(
    () =>
      testimonials.map(({ id, description, name }, index) => (
        <SwiperSlide key={id} className="mx-auto">
          <div
            className={`mx-auto mb-10 w-fit flex flex-col justify-between items-start transition-all duration-300 ${
              activeIndex === index
                ? "scale-105 lg:scale-100  "
                : "scale-95 opacity-10 lg:opacity-50"
            }`}
          >
            <Card className="p-10 mb-5 relative max-w-[450px] bg-[#f5f8fe]">
              <Smile className="absolute left-1/2 top-1/2 text-[150px] text-[#e7f0fe] -z-10 -translate-x-1/2 -translate-y-1/2 opacity-70" />
              <CardContent>
                <p className="text-gray-600 leading-8 text-start">
                  {description}
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-start px-8 items-center gap-2 ">
              <Avatar className="bg-primary">
                <AvatarFallback className="bg-primary text-white">
                  {name[0]}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl text-gray-700">{name}</h3>
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
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
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
