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


import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { navData } from "../data/data";
import { Settings } from "@mui/icons-material";



function Header() {


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


  const list = (anchor) => (
    <div className="block lg:hidden">
      <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className="mt-20 "
      >
        {navData?.map((nav) => {
          const { href, icon, text } = nav;

          // const ref =
          //   currentLang === "ar" && href !== "/ar" ? `/ar${href}` : href;

          return (
            <List key={text} disablePadding className="group relative" dir="ltr">
              {/* li */}
              <Link
                href={href}
                className={`${pathname === href ? " active-small " : ""} relative ${text == "المشاريع" && "soon"} `}
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon
                      className={`${
                        pathname === href ? " active-small " : ""
                      } group-hover:text-darkBlue`}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      className={`${
                        pathname === href ? " active-small " : ""
                      } group-hover:text-darkBlue capitalize text-[#757575]`}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
              {text == "المشاريع" && <Settings className="absolute animate-spin right-4 top-5" />}

              {/* li */}
            </List>
          );
        })}
      </Box>
    </div>
  );


  const lgList = navData?.map((li) => {
    const { text, href } = li;


    return (
      <li key={text} className="relative">
        <Link
          href={href}
          className={`${
            pathname === href ? "active" : ""
          } ${text == "المشاريع" && "soon"}  py-3 px-5 rounded-lg   hover:text-whitep hover:bg-primary duration-200 cursor-pointer capitalize`}
        >
          {text}
        </Link>
        {text == "المشاريع" && <Settings className="animate-spin  absolute -top-3 right-2 w-[20px]" />}
      </li>
    );
  });

  return (
    <div className=" bg-slate shadow-md">
      <div
        className={` container mx-auto flex  lg:flex-row justify-between items-center p-2  h-[70px] lg:h-[90px] overflow-hidden `}
      >
        <div className="block lg:hidden">
          <Button onClick={toggleDrawer("right", true)}>
            <MenuIcon className="text-black text-[25px] " />
          </Button>
        </div>
        <div className="block lg:hidden">
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            className="block lg:hidden"
          >
            <CloseIcon
              onClick={() => setState({ right: false })}
              className="border p-1 text-[35px] cursor-pointer  absolute right-9 top-9"
            />

            {list("right")}
          </Drawer>
        </div>


        <Link href={"/"}>
          <Image
            // src={"/tr-logo.svg"}
            src={'/logo.png'}
            alt="logo"
            width={1000}
            height={1000}
            className="w-[100px] lg:w-[150px]"
            priority={true}
          />
          {/* <span className="text-[#ff0000] text-5xl">Link <span className="text-primary">Design</span></span> */}
        </Link>

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
