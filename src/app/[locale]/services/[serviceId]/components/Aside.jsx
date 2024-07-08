"use client";

import { useTranslation } from "react-i18next";

import axiosInstance from "../../../config/axios.config";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../../../components/ui/Button";
import AsideSkeleton from "./AsideSkeleton";

function Aside({ currentServiceId }) {
  const { t, i18n } = useTranslation(["common"]);

  const currentLang = i18n.language;

  const [services, setServices] = useState([]);
  // const [asideSerivces, setAsideServices] = useState([]);

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
  }, [i18n.language, currentServiceId]);

  const servicesJSX = services.map((service) => {
    const { id, attributes } = service;

    // console.log(attributes);

    // console.log(currentServiceId);
    // console.log(id);

    return (
      currentServiceId != id && (
        <li
          key={id}
          className={` ${
            currentLang == "en" ? `hover:pl-1` : `hover:pr-1`
          } text-md hover:text-primary    duration-200 capitalize text-grayp`}
        >
          <Link href={`/services/${id}`}>{attributes?.title}</Link>
        </li>
      )
    );
  });

  return (
    <div className="sm:w-96 lg:container lg:mx-auto flex flex-col items-center gap-10 sm:px-4 ">
      <div className="w-full">
        <h5
          className={` ${
            currentLang === "en"
              ? ` after:left-16 before:left-0`
              : ` after:right-16 before:right-0`
          } 
              text-gray relative text-2xl mb-8 font-bold capitalize pb-5 before:bg-primary before:w-14 before:h-1 before:absolute   before:bottom-0 before:rounded-xl after:bg-[#f2f2f2] after:w-2/3 sm:after:w-4/5 after:h-1 after:absolute  after:bottom-0 after:rounded-xl `}
        >
          {t("ourservices")}
        </h5>

        <ul className="flex flex-col gap-5">{servicesJSX}</ul>
        <AsideSkeleton isLoading={isLoading} />
      </div>
      <div className="p-8 lg:max-w-64 text-slate bg-darkBlue">
        <h2 className="text-3xl my-5">{t("contact")}</h2>
        <p className="text-sm leading-6 capitalize mb-5">
          {t("contactparagraph")}
        </p>
        <Button style={"border-2 py-3 px-5 mb-5 "}>
          <Link href={"/contact"}>{t("contact")}</Link>
        </Button>
      </div>
    </div>
  );
}

export default Aside;
