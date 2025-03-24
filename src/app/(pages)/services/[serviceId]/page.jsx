"use client";
import { useState, useEffect } from "react";
import PageTitle from "../../../components/PageTitle";

import Aside from "../../../components/Aside";
import Service from "../../../components/Service";

function ShowService({ params }) {
  const { serviceId } = params;

  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceId) return;

    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${serviceId}`);
        if (!res.ok) throw new Error("Failed to fetch service");
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error("Error fetching service:", err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  console.log(service);

  return (
    <div>
      <PageTitle title={service?.title || "..."} />

      <div className="container mx-auto flex flex-col lg:flex-row py-32 gap-10">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Service service={service} isLoading={isLoading} />
        )}
        <Aside currentServiceId={serviceId} />
      </div>
    </div>
  );
}

export default ShowService;
