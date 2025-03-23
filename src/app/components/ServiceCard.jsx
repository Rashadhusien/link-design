"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useMemo } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ServiceSkeleton from "./ServiceSkeleton";

// Fetch function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

// Framer Motion Variants
const serviceVariants = {
  hidden: { y: -5, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: i / 5, ease: [0.25, 0.25, 0.25, 0.75] },
  }),
};

function ServiceCard() {
  const { data: services, error } = useSWR("/api/services", fetcher);

  // Memoize service card list to avoid unnecessary re-renders
  const renderServicesCard = useMemo(() => {
    return services?.map((service, i) => (
      <motion.div
        variants={serviceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={i}
        key={service.id}
        className="bg-[#ffffff] shadow-sm max-w-[430px] mx-auto rounded-3xl p-5"
      >
        <div className="overflow-hidden rounded-3xl duration-500 transition-all">
          <CldImage
            src={service?.banner}
            alt="service-thumb"
            width={1000}
            height={1000}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            className="rounded-3xl max-h-[200px] object-cover hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="pt-10 pb-4 relative">
          <h2 className="font-bold mb-3 hover:text-primary w-fit underline decoration-1 underline-offset-2 duration-300 text-gray text-2xl xl:text-3xl">
            <Link href={`/services/${service?.id}`}>{service?.title}</Link>
          </h2>
          <p className="line-clamp-4 text-grayp text-[16px] leading-7">
            {service?.description}
          </p>
          <div className="mt-10 flex items-center justify-between">
            <Link href={`/services/${service?.id}`}>
              <p className="flex-row flex w-fit hover:text-primary duration-300 font-bold text-darkBlue">
                <KeyboardDoubleArrowRightIcon className="mt-[2px]" />
                قراءة المزيد
              </p>
            </Link>
            <CldImage
              src={service.iconurl}
              alt="funfact"
              width={50}
              height={50}
              className="opacity-20"
            />
          </div>
        </div>
      </motion.div>
    ));
  }, [services]);

  if (error)
    return (
      <p className="text-center text-lg font-semibold text-gray-500">
        ❌ Failed to load services.
      </p>
    );

  if (!services) return <ServiceSkeleton isLoading={true} />;

  return (
    <div className="bg-[#F5F8FE] container mx-auto px-1 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.length > 0 ? (
        renderServicesCard
      ) : (
        <p className="text-center text-lg font-semibold text-gray-500">
          ❌ No services found.
        </p>
      )}
    </div>
  );
}

export default ServiceCard;
