"use client";
import React from "react";
import Image from "next/image";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";

import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation(["footer", "common"]);

  return (
    <>
      <div className=" bg-[#253041] text-whitep py-14 px-4 md:px-0 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* part 1 */}
          <div className="">
            <Image
              src={"/footer-logo.png"}
              alt="logo"
              width={250}
              height={250}
              className=" mb-9"
              priority={true}
            />
            <p className="leading-7 md:max-w-[250px] mb-6">{t("footerHead")}</p>
            <ul className="flex gap-5  justify-center md:justify-start">
              <li className="group  bg-grayHover hover:bg-slate p-1 rounded-full flex items-center justify-center">
                <a href="/">
                  <FacebookRoundedIcon className="text-whitep group-hover:text-gray duration-300 text-md " />
                </a>
              </li>
              <li className="group bg-grayHover hover:bg-slate p-1 px-[6px] rounded-full flex items-center justify-center">
                <a href="/">
                  <XIcon className="text-whitep group-hover:text-gray duration-300 text-[20px]" />
                </a>
              </li>
              <li className="group bg-grayHover hover:bg-slate p-1 rounded-full flex items-center justify-center">
                <a href="/">
                  <InstagramIcon className="text-whitep group-hover:text-gray duration-300" />
                </a>
              </li>
              <li className="group bg-grayHover hover:bg-slate p-1 rounded-full flex items-center justify-center">
                <a href="/">
                  <LinkedIn className="text-whitep group-hover:text-gray duration-300" />
                </a>
              </li>
            </ul>
          </div>
          {/* part 1 */}
          {/* part 2 */}
          <div>
            <Typography
              variant="h5"
              className="font-bold tracking-wide mb-8 capitalize"
            >
              {t("quicklinks")}
            </Typography>
            <ul className="flex flex-col md:pl-3 gap-5">
              <Link href={"/about"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:about")}
                </li>
              </Link>
              <Link href={"/services"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:services")}
                </li>
              </Link>
              <Link href={"/Contact"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:contact")}
                </li>
              </Link>
              <Link href={"/projects"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:projects")}
                </li>
              </Link>
            </ul>
          </div>
          {/* part 2 */}
          {/* part 3 */}
          <div>
            <Typography
              variant="h5"
              className="font-bold tracking-wide mb-5 capitalize"
            >
              {t("ourservices")}
            </Typography>
            <ul className="flex flex-col md:pl-3 gap-4">
              <Link href={"/"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:RemodelingService")}
                </li>
              </Link>
              <Link href={"/"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:BasementPlumbing")}
                </li>
              </Link>
              <Link href={"/"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:BathroomPlumbing")}
                </li>
              </Link>
              <Link href={"/"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:GasLineServices")}
                </li>
              </Link>
              <Link href={"/"}>
                <li className="flex gap-2 items-center hover:pl-2 duration-300">
                  <KeyboardDoubleArrowRightIcon />
                  {t("common:KitchenPlumbing")}
                </li>
              </Link>
            </ul>
          </div>
          {/* part 3 */}
        </div>
      </div>
      <div className="bg-[#212c3c] w-full text-whitep py-3 shadow-sm">
        <div className="container mx-auto ">
          <p className="text-center p-3 text-lg tracking-wide">
            &copy; {t("copyRight")}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
