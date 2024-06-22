"use client";
import ServiceCard from "./ServiceCard";

import { v4 as uuid } from "uuid";

import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation(["services", "common"]);
  const serviceContent = [
    {
      id: uuid(),
      ImageUrl: "/service-thumb-1.jpg",
      textHead: t("common:KitchenPlumbing"),
      textBody: t("servonebody"),
    },
    {
      id: uuid(),
      ImageUrl: "/service-thumb-2.jpg",
      textHead: t("common:GasLineServices"),
      textBody: t("servonebody"),
    },
    {
      id: uuid(),
      ImageUrl: "/service-thumb-3.jpg",
      textHead: t("common:BathroomPlumbing"),
      textBody: t("servonebody"),
    },
    {
      id: uuid(),
      ImageUrl: "/service-thumb-4.jpg",
      textHead: t("common:BasementPlumbing"),
      textBody: t("servonebody"),
    },
    {
      id: uuid(),
      ImageUrl: "/service-thumb-5.jpg",
      textHead: t("common:RemodelingService"),
      textBody: t("servonebody"),
    },
    {
      id: uuid(),
      ImageUrl: "/service-thumb-6.jpg",
      textHead: t("common:RemodelingService"),
      textBody: t("servonebody"),
    },
  ];

  return (
    <div className="bg-[#F5F8FE] container mx-auto px-1 sm:px-5 py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
      {serviceContent.map((service) => {
        const { id, textBody, textHead, ImageUrl } = service;

        return (
          <ServiceCard
            key={id}
            imageUrl={ImageUrl}
            textBody={textBody}
            textHead={textHead}
          />
        );
      })}
    </div>
  );
}

export default Service;
