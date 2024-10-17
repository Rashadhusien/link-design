"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

function ElementorSection() {
  return (
    <div className="elementor-section max-w-[1110px] mx-auto grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 text-center gap-5 lg:gap-24  ">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          mass: 0.1,
          type: "tween",
        }}
        className="box bg-PaleBlue w-[200px] h-[200px] mx-auto md:w-[240px] md:h-[240px] lg:w-[270px] lg:h-[270px] rounded-full flex justify-center items-center relative"
      >
        <div className="flex flex-col items-center ">
          <Image
            src={"/calendar.svg"}
            alt="calendar"
            width={1000}
            height={1000}
            className="w-[50px] h-[50px] md:w-20  md:h-20"
          />

          <Image
            src={"/arrow.png"}
            alt="arrow."
            width={1000}
            height={1000}
            className="  rotate-[-90deg] sm:rotate-0 -bottom-[25px] -left-[55px]  sm:hidden xl:block w-24 absolute sm:top-1/2 sm:-translate-x-1/2  sm:-left-16 transform scale-x-[-1]"
          />

          <Link href={"/contact"}>
            <p className="animate-pulse text-[#0075ff]  pt-3 text-xl md:text-2xl hover:text-primary duration-300">
              اتصل بينا
            </p>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          mass: 0.1,
          type: "tween",
        }}
        className="box bg-primary w-[200px] h-[200px] mx-auto md:w-[240px] md:h-[240px] sm:mt-24 xl:mt-0  lg:w-[270px] lg:h-[270px]  rounded-full flex justify-center items-center relative"
      >
        <div className=" flex flex-col items-center ">
          <Image
            src={"/delivery.svg"}
            alt="express-delivery-2"
            width={1000}
            height={1000}
            className="w-[50px] h-[50px] md:w-24 md:h-24 transform scale-x-[-1] "
          />

          <Image
            src={"/arrow.png"}
            alt="arrow."
            width={1000}
            height={1000}
            className="  rotate-[-90deg] scale-y-[-1] sm:scale-y-[1] -bottom-[25px]  -right-[55px] sm:right-60   sm:rotate-0 sm:hidden xl:block w-24 absolute sm:top-1/2 sm:-translate-x-1/2  sm:-left-20 transform scale-x-[-1]"
          />

          <p className="text-white cursor-default text-xl md:text-2xl">
            هانيجي في الوقت
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          mass: 0.1,
          type: "tween",
        }}
        className="box bg-PaleBlue w-[200px] h-[200px] mx-auto md:w-[240px] md:h-[240px] lg:w-[270px] lg:h-[270px]  rounded-full flex justify-center items-center "
      >
        <div className="flex flex-col items-center">
          <Image
            src={"/prototype.svg"}
            alt="prototype"
            width={1000}
            height={1000}
            className="w-[50px] h-[50px] md:w-20  md:h-20"
          />
          <p className="text-[#0075ff] cursor-default hover:text-primary pt-3 text-xl  md:text-2xl">
            و نحل المشكلة
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ElementorSection;
