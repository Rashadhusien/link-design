"use client";
import PageTitle from "../../components/PageTitle";

import Aside from "../../components/Aside";

import { useState, useEffect } from "react";

import Service from "../../components/Service";

function ShowService({ params }) {
  const { serviceId } = params;

  // const currentservice = services.filter(
  //   (service) => service.id === Number(serviceId)
  // );

  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!serviceId) return; // Ensure serviceId exists before fetching

    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${serviceId}`); // Dynamic API call
        if (!res.ok) throw new Error("Failed to fetch service");
        const data = await res.json();
        setService(data);
      } catch (e) {
        console.error("Failed to fetch service:", e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  return (
    <div>
      <PageTitle title={service.title} />

      <div className="container mx-auto flex flex-col lg:flex-row py-32 gap-10">
        <Service service={service} isLoading={isLoading} />
        <Aside currentServiceId={Number(serviceId)} />
      </div>
    </div>
  );
}

export default ShowService;
