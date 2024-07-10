"use client";
import React from "react";
import ServiceCard from "./components/ServiceCard";
import PageTitle from "../components/PageTitle";

import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <PageTitle title={t("services")} />
      <div className="py-32 bg-[#F5F8FE] ">
        <div className="container mx-auto  ">
          <ServiceCard />
        </div>
      </div>
    </>
  );
}

export default Services;
