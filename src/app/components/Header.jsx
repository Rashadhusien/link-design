"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

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

import { navData } from "../data/data";

function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
            <ListItem>
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
                  className={`group-hover:text-darkBlue capitalize text-[#757575] ${
                    pathname === href ? "active-small" : ""
                  }`}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      ))}
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
        {/* Mobile Menu Button */}
        <Button onClick={toggleDrawer(true)} className="block lg:hidden">
          <MenuIcon className="text-black text-[25px]" />
        </Button>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <CloseIcon
            onClick={toggleDrawer(false)}
            className="border p-1 text-[35px] cursor-pointer absolute right-9 top-9"
          />
          {renderMobileNav}
        </Drawer>

        {/* Logo */}
        <Link href="/" rel="noopener noreferrer">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[70px] lg:w-[100px]"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-evenly items-center gap-3 text-lg">
          {renderDesktopNav}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
