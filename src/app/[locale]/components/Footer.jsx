"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";

import { useTranslation } from "react-i18next";

import axiosInstance from "../config/axios.config";

import { v4 as uuid } from "uuid";

function Footer() {
  const { t, i18n } = useTranslation(["footer", "common"]);
  // data

  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(
          `/services?locale=${i18n.language}`
        );
        const servicesAPI = res?.data?.data;
        setServices(servicesAPI);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [i18n.language]);

  const quickLinks = [
    {
      id: uuid(),
      href: "/about",
      content: t("common:about"),
    },
    {
      id: uuid(),
      href: "/services",
      content: t("common:services"),
    },
    {
      id: uuid(),
      href: "/contact",
      content: t("common:contact"),
    },
    {
      id: uuid(),
      href: "/projects",
      content: t("common:projects"),
    },
  ];

  const soceial = [
    {
      id: uuid(),
      href: "https://www.facebook.com/enghusseinrashad/",
      title: "facebook",
      icon: <FacebookRoundedIcon className=" group-hover:text-gray" />,
    },
    {
      id: uuid(),
      href: "/",
      title: "twitter",
      icon: <XIcon className=" group-hover:text-gray" />,
    },
    {
      id: uuid(),
      href: "/",
      title: "instagram",
      icon: <InstagramIcon className=" group-hover:text-gray" />,
    },
    {
      id: uuid(),
      href: "/",
      title: "LinkedIn",
      icon: <LinkedIn className=" group-hover:text-gray" />,
    },
  ];

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
              {soceial.map((link) => {
                const { id, href, icon, title } = link;
                return (
                  <li
                    key={id}
                    className="group  bg-grayHover hover:bg-slate p-1 rounded-full flex items-center justify-center"
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
              {t("quicklinks")}
            </Typography>
            <ul className="flex flex-col md:pl-3 gap-5">
              {quickLinks.map((link) => {
                const { id, href, content } = link;

                return (
                  <Link href={href} key={id}>
                    <li
                      className={`  ${
                        i18n.language === "en" ? "hover:pl-2" : "hover:pr-2"
                      } flex gap-2 items-center hover:pl-2 duration-300`}
                    >
                      {i18n.language === "en" ? (
                        <KeyboardDoubleArrowRightIcon />
                      ) : (
                        <KeyboardDoubleArrowLeftIcon />
                      )}
                      {content}
                    </li>
                  </Link>
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
              {t("ourservices")}
            </Typography>
            <ul className="flex flex-col md:pl-3 gap-4">
              {services.map((serv) => {
                const {
                  id,
                  attributes: { title },
                } = serv;

                return (
                  <Link href={`/services/${id}`} key={id}>
                    <li
                      className={`flex gap-2 items-center ${
                        i18n.language === "en" ? "hover:pl-2" : "hover:pr-2"
                      } duration-300`}
                    >
                      {i18n.language === "en" ? (
                        <KeyboardDoubleArrowRightIcon />
                      ) : (
                        <KeyboardDoubleArrowLeftIcon />
                      )}
                      {title}
                    </li>
                  </Link>
                );
              })}
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
