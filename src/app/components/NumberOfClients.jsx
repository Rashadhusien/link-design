"use client";

import React, { useState, useCallback } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { NumberOfClientsData } from "../data/data";
import { motion } from "framer-motion";

import Image from "next/image";

import { CldImage } from "next-cloudinary";

function NumberOfClients() {
  const [conterON, setConterON] = useState(false);

  // Memoized functions for performance
  const handleEnter = useCallback(() => setConterON(true), []);
  const handleExit = useCallback(() => setConterON(false), []);

  return (
    <div className="clients-comp bg-primary relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20 lg:justify-center lg:items-center py-28 overflow-hidden text-white">
        {/* Left Section */}
        <div className="flex-1">
          <motion.h2
            initial={false} // Prevent hiding initially
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center lg:text-start text-3xl lg:text-4xl xl:text-5xl font-bold mt-5 leading-[50px] md:leading-[70px] xl:leading-[80px] mb-10"
          >
            نحن نقدم دائمًا خدمات مختلفة عن الخدمات الأخرى.
          </motion.h2>
          <div className="client-bg mx-auto sm:mx-0 py-5 px-9 rounded-xl flex items-center justify-center w-fit">
            <h3 className="text-6xl font-bold text-[#f4b81c]">5k</h3>
            <div className="mr-5">
              <CldImage
                src="star.png"
                alt="star"
                width={80}
                height={80}
                className="w-[80px]"
                loading="lazy"
              />
              <p className="mt-1">مراجعة العميل</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-y-20 gap-x-10 relative client-bg-before">
            {NumberOfClientsData.map((client, i) => {
              const { countNumber, src, txt, IsThousand, plus } = client;

              return (
                <div
                  key={src}
                  className="flex justify-center sm:justify-normal lg:justify-center items-center gap-5"
                >
                  <div>
                    <CldImage
                      src={src}
                      alt={src}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] transform scale-x-[-1]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-6xl font-bold">
                      {conterON && (
                        <CountUp
                          start={0}
                          end={countNumber}
                          duration={3}
                          delay={0.2}
                        />
                      )}
                      {IsThousand && "k"}
                      {plus && "+"}
                    </span>
                    <p className="mt-1">{txt}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default NumberOfClients;
