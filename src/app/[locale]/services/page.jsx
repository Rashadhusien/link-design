import React from "react";
import Service from "./components/ServiceSkeleton";
import ServiceCard from "./components/ServiceCard";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

function Services() {
  return (
    <>
      <PageTitle title={"service"} />
      <div className="py-32 bg-[#F5F8FE] ">
        <div className="container mx-auto  ">
          <ServiceCard />
        </div>
      </div>
    </>
  );
}

export default Services;
