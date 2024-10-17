"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

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

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 160) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

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
            <List
              key={text}
              disablePadding
              className="group relative"
              dir="ltr"
            >
              {/* li */}
              <Link
                href={href}
                className={`${
                  pathname === href ? " active-small " : ""
                } relative  `}
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
          }   py-3 px-5 rounded-lg   hover:text-whitep hover:bg-primary duration-200 cursor-pointer capitalize`}
        >
          {text}
        </Link>
      </li>
    );
  });

  return (
    <div
      aria-hidden="true"
      role="navigation"
      className={`sticky w-full top-0 left-0 z-[500] bg-slate shadow-md transition-all duration-500 ${
        show ? "-translate-y-0 " : " -translate-y-96 "
      }`}
    >
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
            src={"/logo.png"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-[70px] lg:w-[100px]"
            priority={true}
          />
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
