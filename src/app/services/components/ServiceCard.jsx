"use client";
import Image from "next/image";
import Link from "next/link";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import { services } from "../../data/data";

import { motion } from "framer-motion";

function ServiceCard() {
  const renderServicesCard = services.map((service, i) => {
    return (
      <motion.div
        initial={{ y: -5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          type: "tween",
          duration: 1.2,
          delay: i / 4,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        key={service.id}
        className="bg-[#ffffff] shadow-sm max-w-[430px] mx-auto rounded-3xl p-5  "
      >
        <div className="overflow-hidden rounded-3xl duration-500 transition-all">
          <Image
            src={service?.imgSrc}
            alt="service-thumb"
            width={1000}
            height={1000}
            className="rounded-3xl max-h-[200px] object-cover hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="pt-10 pb-4 relative">
          <h2 className="font-bold mb-3 hover:text-primary w-fit underline decoration-1 underline-offset-2 duration-300 text-gray text-2xl  xl:text-3xl">
            <Link href={`/services/${service?.id}`}>{service?.title}</Link>
          </h2>
          <p className="line-clamp-4 text-grayp text-[16px] leading-7">
            {service?.description}
          </p>
          <div className="mt-10 flex items-center justify-between">
            <Link href={`/services/${service?.id}`}>
              <p
                className={`flex-row flex w-fit hover:text-primary duration-300  font-bold text-darkBlue`}
              >
                <KeyboardDoubleArrowRightIcon className="mt-[2px]" />
                قراءة المزيد
              </p>
            </Link>
            <Image
              src={service.iconUrl}
              alt="funfact"
              width={50}
              height={50}
              className=" opacity-20"
            />
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <>
      <div className="bg-[#F5F8FE] container  mx-auto px-1 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
        {renderServicesCard}
      </div>
    </>
  );
}

export default ServiceCard;
