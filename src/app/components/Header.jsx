"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

import { auth } from "../../../firebaseConfig";

import { signOut } from "firebase/auth";

// MUI Components
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
import useMediaQuery from "@mui/material/useMediaQuery";

import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthState } from "react-firebase-hooks/auth";

import { navData } from "../data/data";

function Header() {
  const [user] = useAuthState(auth);
  const pathname = usePathname();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Detect screen size after client-side render
  const isLgScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setIsClient(true); // Ensures correct rendering after hydration
  }, []);

  // Toggle drawer state
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Navbar scroll effect
  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 160) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  // Mobile Navigation List
  const renderMobileNav = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="mt-20"
    >
      {navData.map(({ href, icon, text }) => (
        <List key={text} disablePadding className="group relative">
          <Link
            href={href}
            className={`relative ${pathname === href ? "active-small" : ""}`}
          >
            <ListItem dir="ltr">
              <ListItemButton>
                <ListItemIcon
                  className={`group-hover:text-darkBlue ${
                    pathname === href ? "active-small" : ""
                  }`}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  className={`text-right group-hover:text-darkBlue capitalize text-[#757575] ${
                    pathname === href ? "active-small" : ""
                  }`}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      ))}
      <div className="w-full flex justify-center items-center flex-col gap-5 mt-3">
        {user ? (
          <button
            className={
              " btn-style p-3 mx-auto   cursor-pointer lg:p-3 text-md md:p-4 lg:text-lg  text-primary  border-4 border-primary  hover:text-slate hover:bg-primary lg:inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg"
            }
            onClick={() => {
              signOut(auth);
              console.log("signed out");
            }}
          >
            <LogoutIcon />
            تسجيل الخروج
          </button>
        ) : (
          <>
            <Link
              href={"/sign-in"}
              className="w-[90%] flex justify-center items-center"
            >
              <button
                className={
                  " btn-style p-3  cursor-pointer lg:p-3 text-md  lg:text-lg  hover:text-primary  border-4 border-primary  text-slate bg-primary  font-bold capitalize z-10 relative transition-all duration-300 rounded-lg "
                }
              >
                تسجيل الدخول
              </button>
            </Link>

            <Link
              href={"/sign-up"}
              className="w-[100%] flex justify-center items-center"
            >
              <button
                className={
                  " btn-style py-3 px-5  cursor-pointer lg:p-3 text-md md:p-4 lg:text-lg  text-primary  border-4 border-primary  hover:text-slate hover:bg-primary  font-bold capitalize z-10 relative transition-all duration-300 rounded-lg"
                }
              >
                انشاء حساب
              </button>
            </Link>
          </>
        )}
      </div>
    </Box>
  );

  // Desktop Navigation List
  const renderDesktopNav = navData.map(({ text, href }) => (
    <li key={text} className="relative">
      <Link
        href={href}
        className={`py-3 px-5 rounded-lg hover:text-whitep hover:bg-primary duration-200 capitalize ${
          pathname === href ? "active" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <nav
      role="navigation"
      className={`sticky w-full top-0 left-0 z-[500] bg-slate shadow-md transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-96"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-2 h-[70px] lg:h-[90px]">
        {/* Mobile Menu Button (Only visible on mobile after hydration) */}
        {isClient && !isLgScreen && (
          <Button onClick={toggleDrawer(true)} className="block">
            <MenuIcon className="text-black text-[25px]" />
          </Button>
        )}

        {/* Mobile Drawer */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <CloseIcon
            onClick={toggleDrawer(false)}
            className="border p-1 text-[35px] cursor-pointer absolute right-9 top-9"
          />
          {renderMobileNav}
        </Drawer>

        <div className="lg:flex gap-10">
          {user ? (
            <button
              className={
                "hidden btn-style  cursor-pointer lg:p-3 text-md md:p-4 lg:text-lg  text-primary  border-4 border-primary  hover:text-slate hover:bg-primary lg:inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg"
              }
              onClick={() => {
                signOut(auth);
                console.log("signed out");
              }}
            >
              <LogoutIcon />
              تسجيل الخروج
            </button>
          ) : (
            <div className="flex items-center gap-6 ">
              <Link href={"/sign-in"}>
                <button
                  className={
                    "hidden btn-style  cursor-pointer p-2 xl:p-3 text-md  xl:text-lg  hover:text-primary border-2 xl:border-4 border-primary  text-slate bg-primary lg:inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg "
                  }
                >
                  تسجيل الدخول
                </button>
              </Link>

              <Link href={"/sign-up"}>
                <button
                  className={
                    "hidden btn-style  cursor-pointer p-2 xl:p-3 text-md xl:text-lg  text-primary border-2 xl:border-4 border-primary  hover:text-slate hover:bg-primary lg:inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg"
                  }
                >
                  انشاء حساب
                </button>
              </Link>
            </div>
          )}

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-evenly items-center gap-3 text-lg">
            {renderDesktopNav}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" rel="noopener noreferrer">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[50px] lg:w-[80px]"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
