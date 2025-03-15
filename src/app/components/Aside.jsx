"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";

import AsideSkeleton from "./AsideSkeleton";

function Aside({ currentServiceId }) {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services"); // Adjust API endpoint
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchServices();
  }, []);

  if (isLoading) return <AsideSkeleton />;

  return (
    <div className="sm:w-96 lg:container lg:mx-auto flex flex-col items-center gap-10 sm:px-4">
      <div className="w-full">
        <h5 className="relative text-2xl mb-8 font-bold capitalize pb-5 text-gray after:right-16 before:right-0 before:bg-primary before:w-14 before:h-1 before:absolute before:bottom-0 before:rounded-xl after:bg-[#f2f2f2] after:w-2/3 sm:after:w-4/5 after:h-1 after:absolute after:bottom-0 after:rounded-xl">
          خدماتنا
        </h5>
        <ul className="flex flex-col gap-5 w-full">
          {services.map(
            ({ id, title }) =>
              id !== currentServiceId && (
                <li
                  key={id}
                  className="hover:pr-1 text-md hover:text-primary duration-200 capitalize text-grayp"
                >
                  <Link href={`/services/${id}`}>{title}</Link>
                </li>
              )
          )}
        </ul>
      </div>

      <div className="p-8 w-full text-slate bg-darkBlue rounded-sm">
        <h2 className="text-3xl my-5">تواصل معنا</h2>
        <p className="text-sm leading-6 capitalize mb-5">
          نحن شركة سباكة تعمل في هذا المجال منذ ما يقرب من 20 عامًا منذ بدايتنا
        </p>
        <Button className="border-2 py-3 px-5 mb-5">
          <Link href="/contact">اتصل بنا</Link>
        </Button>
      </div>
    </div>
  );
}

export default Aside;
