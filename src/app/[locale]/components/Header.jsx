"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

// mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { headerNav } from "../data/data";

import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";

function Header() {
  const { t, i18n } = useTranslation(["common"]);

  const currentLang = i18n.language;

  const navToggle = currentLang === "ar" ? "right" : "left";

  const pathname = usePathname();

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  // Render

  const navData = [
    {
      href: currentLang === "ar" ? "/ar" : "/",
      icon: <HomeIcon />,
      text: t("home"),
    },
    {
      href: "/about",
      icon: <InfoIcon />,
      text: t("about"),
    },

    {
      href: "/services",
      icon: <BuildIcon />,
      text: t("services"),
    },
    {
      href: "/contact",
      icon: <ContactPageIcon />,
      text: t("contact"),
    },
    {
      href: "/projects",
      icon: <BusinessCenterIcon />,
      text: t("projects"),
    },
    {
      href: "/testemonials",
      icon: <PeopleIcon />,
      text: t("testimonial"),
    },
  ];
  const list = (anchor) => (
    <div className="block lg:hidden">
      <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className="mt-20 "
      >
        {navData.map((nav) => {
          const { href, icon, text } = nav;

          const ref =
            currentLang === "ar" && href !== "/ar" ? `/ar${href}` : href;

          return (
            <List key={text} disablePadding className="group" dir="ltr">
              {/* li */}
              <Link
                href={href}
                className={`${pathname === ref ? "active-small" : ""} `}
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon
                      className={`${
                        pathname === ref ? "active-small" : ""
                      } group-hover:text-darkBlue`}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      className={`${
                        pathname === ref ? "active-small" : ""
                      } group-hover:text-darkBlue capitalize text-[#757575]`}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>

              {/* li */}
            </List>
          );
        })}
      </Box>
    </div>
  );

  const lgList = navData.map((li) => {
    const { text, href } = li;

    const ref = currentLang === "ar" && href !== "/ar" ? `/ar${href}` : href;

    return (
      <li key={text}>
        <Link
          href={href}
          className={`${
            pathname === ref ? "active" : ""
          } py-3 px-5 rounded-lg  hover:text-whitep hover:bg-primary duration-200 cursor-pointer capitalize`}
        >
          {text}
        </Link>
      </li>
    );
  });

  return (
    <div className=" bg-slate shadow-md">
      <div
        className={` container mx-auto flex  lg:flex-row justify-between items-center p-2 `}
      >
        <div className="block lg:hidden">
          <Button onClick={toggleDrawer(navToggle, true)}>
            <MenuIcon className="text-black text-[25px] " />
          </Button>
        </div>
        <div className="block lg:hidden">
          <Drawer
            anchor={navToggle}
            open={state[navToggle]}
            onClose={toggleDrawer(navToggle, false)}
            className="block lg:hidden"
          >
            <CloseIcon
              onClick={() => setState({ right: false })}
              className="border p-1 text-[35px] cursor-pointer  absolute right-9 top-9"
            />

            {list(navToggle)}
            <LanguageChanger />
          </Drawer>
        </div>
        <Link href={"/"}>
          <Image
            src={"/tr-logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-36 md:w-44 lg:w-52"
            priority={true}
          />
        </Link>
        {/* <div className="hidden md:block lg:hidden" /> */}

        <div className="hidden lg:block">
          <ul className="flex justify-evenly items-center gap-3 text-lg ">
            {lgList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
