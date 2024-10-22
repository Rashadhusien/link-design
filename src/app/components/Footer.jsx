"use client";
import Image from "next/image";

import { Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Link from "next/link";

import { quickLinks, services } from "../data/data";

import { social } from "../data/data";

import { motion } from "framer-motion";

function Footer() {
  return (
    <footer role="contentinfo">
      <div
        aria-hidden="true"
        className=" bg-[#253041] text-whitep py-14 px-5 md:px-0 "
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* part 1 */}
          <div className="">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="logo"
                width={1000}
                height={1000}
                className=" mx-auto mb-5 lg:mx-0 w-[130px] h-[100px] "
                priority={true}
              />
            </Link>
            <p className="leading-7 mb-6">
              تتضمن إدارة السباكة مجموعة واسعة من الأنشطة، وغالبًا ما تحدد
              العديد من الشركات وأعضائها هذه الممارسات.
            </p>
            <ul className="flex gap-5  justify-center md:justify-start">
              {social.map((link) => {
                const { id, href, icon, title } = link;
                return (
                  <li
                    key={id}
                    className="group  bg-grayHover  w-[40px] h-[40px]  rounded-full flex items-center justify-center"
                  >
                    <a href={href} target="_blank" title={title}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* part 1 */}
          {/* part 2 */}
          <div>
            <Typography
              variant="h5"
              className="font-bold tracking-wide mb-8 capitalize"
            >
              روابط سريعة
            </Typography>
            <ul className="flex flex-col md:pl-3 gap-5">
              {quickLinks.map((link) => {
                const { id, href, content } = link;
                return (
                  <li
                    className={`  hover:pr-2 flex gap-2 items-center hover:pl-2 duration-300 hover:underline`}
                    key={id}
                  >
                    <Link href={href}>
                      <KeyboardDoubleArrowLeftIcon />

                      {content}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* part 2 */}
          {/* part 3 */}
          <div>
            <Typography
              variant="h5"
              className="font-bold tracking-wide mb-5 capitalize"
            >
              الخدمات
            </Typography>
            <ul className="flex flex-col md:pl-3 gap-4 max-h-[400px] flex-wrap ">
              {services.map((serv) => {
                return (
                  <li
                    className={` hover:pr-2 duration-300 hover:underline`}
                    key={serv.id}
                  >
                    <Link href={`/services/${serv.id}`}>
                      <KeyboardDoubleArrowLeftIcon />

                      {serv.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* part 3 */}
        </div>
      </div>
      <div className="bg-[#212c3c] w-full text-whitep py-3 shadow-sm">
        <div className="container mx-auto ">
          <p className="text-center p-1 text-sm tracking-wide">
            &copy; حقوق النشر 2024 | جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
