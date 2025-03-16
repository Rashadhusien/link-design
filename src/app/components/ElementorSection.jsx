"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const animationSettings = (delay) => ({
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5, delay, mass: 0.1, type: "tween" },
});

function ElementorSection() {
  return (
    <div className="elementor-section max-w-[1110px] mx-auto grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 text-center gap-9 lg:gap-24">
      {[
        {
          src: "/calendar.svg",
          alt: "calendar",
          link: "/contact",
          text: "اتصل بينا",
          delay: 0.2,
        },
        {
          src: "/delivery.svg",
          alt: "express-delivery",
          text: "هانيجي في الوقت",
          delay: 0.4,
        },
        {
          src: "/prototype.svg",
          alt: "prototype",
          text: "و نحل المشكلة",
          delay: 0.6,
        },
      ].map(({ src, alt, link, text, delay }, index) => (
        <motion.div
          key={index}
          {...animationSettings(delay)}
          className={`box ${
            index === 1 ? "bg-primary justify-self-start " : "bg-PaleBlue  "
          } w-[200px] h-[200px] mx-auto md:w-[240px] md:h-[240px] lg:w-[270px] lg:h-[270px] rounded-full flex justify-center items-center relative ${
            index === 1 ? "sm:mt-24 xl:mt-0 " : ""
          }`}
        >
          <div className="flex flex-col items-center ">
            <Image
              src={src}
              alt={alt}
              width={50}
              height={50}
              className={`md:w-20 md:h-20  ${
                index === 1 && "transform scale-x-[-1] "
              }`}
            />
            {index !== 2 && (
              <Image
                src="/arrow.png"
                alt="arrow"
                width={100}
                height={100}
                className="hidden xl:block rotate-[-90deg] sm:rotate-0 -translate-x-14 -translate-y-1/2  absolute sm:top-1/2 sm:-left-16 transform scale-x-[-1]"
              />
            )}
            {link ? (
              <Link href={link}>
                <p className="animate-pulse text-[#0075ff] pt-3 text-xl md:text-2xl hover:text-primary duration-300">
                  {text}
                </p>
              </Link>
            ) : (
              <p
                className={`text-xl md:text-2xl ${
                  index === 1
                    ? "text-white "
                    : "text-[#0075ff] cursor-default hover:text-primary pt-3 "
                }`}
              >
                {text}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ElementorSection;
