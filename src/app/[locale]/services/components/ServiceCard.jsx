"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import axiosInstance from "../../config/axios.config";

import ServiceSkeleton from "./ServiceSkeleton";

function ServiceCard() {
  const { t, i18n } = useTranslation(["common"]);

  const [services, setServices] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await axiosInstance.get(
          `/services?populate=*&locale=${i18n.language}`
        );
        const servicesContent = res?.data?.data;

        setServices(servicesContent);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchServices();
  }, [i18n.language]);

  // Handlers

  // console.log(services);

  const renderServicesCard = services.map((service) => {
    return (
      <div
        key={service.id}
        className="bg-[#ffffff] shadow-sm max-w-[430px] mx-auto rounded-3xl p-5  "
      >
        <div className="overflow-hidden rounded-3xl duration-500 transition-all">
          <Image
            src={service?.attributes?.serviceImage?.data?.attributes?.url}
            alt="service-thumb"
            width={service?.attributes?.serviceImage?.data?.attributes?.width}
            height={service?.attributes?.serviceImage?.data?.attributes?.height}
            className="rounded-3xl object-cover hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="pt-10 pb-4 relative">
          <Typography
            variant="h5"
            className="font-bold mb-3 hover:text-primary w-fit underline decoration-1 underline-offset-2 duration-300 text-gray text-2xl  xl:text-3xl"
          >
            <Link href={`/services/${service?.id}`}>
              {service?.attributes?.title}
            </Link>
          </Typography>
          <Typography
            variant="p"
            className="line-clamp-3 text-grayp text-[16px] leading-7"
          >
            {service?.attributes?.description}
          </Typography>
          <div className="mt-10 flex items-center justify-between">
            <Link href={`/services/${service?.id}`}>
              <p
                className={`${
                  i18n.language == "ar" ? "flex-row-reverse" : "flex-row"
                } flex w-fit hover:text-primary duration-300  font-bold text-darkBlue`}
              >
                {t("readmore")} <KeyboardDoubleArrowRightIcon />
              </p>
            </Link>
            <Image
              src={service?.attributes?.iconimage?.data?.attributes?.url}
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

        <ServiceSkeleton isLoading={isLoading} />
      </div>
    </>
  );
}

export default ServiceCard;
