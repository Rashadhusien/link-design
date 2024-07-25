"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";


import { services } from "../../data/data";


// import ServiceSkeleton from "./ServiceSkeleton";

function ServiceCard() {


  // const [isLoading, setIsLoading] = useState(true);



  const renderServicesCard = services.map((service) => {
    return (
      <div
        key={service.id}
        className="bg-[#ffffff] shadow-sm max-w-[430px] mx-auto rounded-3xl p-5  "
      >
        <div className="overflow-hidden rounded-3xl duration-500 transition-all">
          <Image
            src={service?.imgSrc}
            alt="service-thumb"
            width={1000}
            height={1000}
            className="rounded-3xl object-cover hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="pt-10 pb-4 relative">
          <Typography
            variant="h5"
            className="font-bold mb-3 hover:text-primary w-fit underline decoration-1 underline-offset-2 duration-300 text-gray text-2xl  xl:text-3xl"
          >
            <Link href={`/services/${service?.id}`}>
              {service?.title}
            </Link>
          </Typography>
          <Typography
            variant="p"
            className="line-clamp-3 text-grayp text-[16px] leading-7"
          >
            {service?.description}
          </Typography>
          <div className="mt-10 flex items-center justify-between">
            <Link href={`/services/${service?.id}`}>
              <p
                className={`flex-row flex w-fit hover:text-primary duration-300  font-bold text-darkBlue`}
              >
                <KeyboardDoubleArrowRightIcon className="mt-[2px]" />قراءة المزيد 
              </p>
            </Link>
            <Image
              src={service.iconUrl}
              alt="funfact"
              width={50}
              height={50}
              className=" opacity-20"
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="bg-[#F5F8FE] container  mx-auto px-1 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
        {renderServicesCard}
        {/* <ServiceSkeleton isLoading={isLoading} /> */}
      </div>
    </>
  );
}

export default ServiceCard;
