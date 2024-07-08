"use client";

import { useEffect, useState } from "react";

import axiosInstance from "../../config/axios.config";
import PageTitle from "../../components/PageTitle";
import Aside from "./components/Aside";

import { useTranslation } from "react-i18next";
import Service from "./components/Service";

function ShowService({ params }) {
  const { i18n } = useTranslation(["common"]);
  const currentLang = i18n.language;

  const { locale, serviceId } = params;

  const [service, setService] = useState({});

  const [servicesContent, setservicesContent] = useState();

  useEffect(() => {
    async function getOneService() {
      try {
        const res = await axiosInstance.get(
          `/services/${serviceId}?locale=${locale}&populate=*`
        );

        const serviceObj = res?.data?.data;

        setService(serviceObj);
        setservicesContent(serviceObj?.attributes?.servicecontents?.data);
      } catch (error) {
        console.log(error);
      }
    }

    getOneService();
  }, [locale, serviceId, currentLang]);

  // console.log(service?.attributes?.servicecontents?.data);

  const title = service?.attributes?.title;
  const currentApiLang = service?.attributes?.locale;
  const titleLang =
    service?.attributes?.localizations?.data[0]?.attributes?.title;

  return (
    <>
      <PageTitle title={currentLang == currentApiLang ? title : titleLang} />
      <div className="container mx-auto flex flex-col lg:flex-row py-32 gap-10">
        <Service serviceId={serviceId} />
        <Aside currentServiceId={Number(serviceId)} />
      </div>
    </>
  );
}

export default ShowService;
