"use client";
import Image from "next/image";
import React, { useState } from "react";

import CountUp from "react-countup";

import ScrollTrigger from "react-scroll-trigger";

import { NumberOfClientsData } from "../data/data";

import { motion } from "framer-motion";

function NumberOfClients() {
  const [conterON, setConterON] = useState(false);

  return (
    <div className="clients-comp bg-primary  -z-10 relative  ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20 lg:justify-center lg:items-center py-28   overflow-hidden text-white">
        <div className="flex-1">
          <motion.h2
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              damping: 100,
              mass: 100,
              delay: 0.5,
            }}
            className="text-3xl sm:text-4xl md:text-5xl text-center sm:text-start xl:text-6xl  font-bold mt-5 leading-[40px] sm:leading-[50px]  md:leading-[70px] xl:leading-[80px] mb-10"
          >
            نحن نقدم دائمًا خدمات مختلفة عن الخدمات الأخرى.
          </motion.h2>
          <div className="client-bg mx-auto sm:mx-0 py-5 px-9 rounded-xl flex items-center justify-center w-fit ">
            <h3 className="text-6xl font-bold text-[#f4b81c]">5k</h3>
            <div className="mr-5">
              <Image
                src={"/star.png"}
                alt="star"
                width={1000}
                height={1000}
                className="w-[80px]"
              />
              <p className=" mt-1">مراجعة العميل</p>
            </div>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => setConterON(true)}
          onExit={() => setConterON(false)}
        >
          <div className="flex-1  grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-y-20 gap-x-10 relative  client-bg-before  ">
            {NumberOfClientsData.map((client, i) => {
              const { countNumber, src, txt, IsThousand, plus } = client;
              return (
                <div
                  key={src}
                  className="flex justify-center sm:justify-normal lg:justify-center items-center gap-5"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,

                      delay: i / 4,
                    }}
                  >
                    <Image
                      src={src}
                      alt={src}
                      width={1000}
                      height={1000}
                      className="w-[80px] h-[80px]  transform scale-x-[-1]"
                    />
                  </motion.div>
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
