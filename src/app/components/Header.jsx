"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { navData } from "../data/data";
import DropDown from "./DropDown";
import AppSidebar from "./AppSidebar";

function Header() {
  const [user] = useAuthState(auth);
  const pathname = usePathname();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

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

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setIsAdmin(userSnap.data().role === "admin");
        }
      }
    };
    fetchUserRole();
  }, [user]);

  // Desktop Navigation List
  const renderDesktopNav = navData.map(({ text, href }) => (
    <li key={text}>
      <Link
        href={href}
        className={`py-3 px-5 rounded-lg hover:text-white hover:bg-primary duration-200 capitalize ${
          pathname === href ? "active" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <nav
      className={`sticky w-full top-0 left-0 z-[500] bg-slate shadow-md transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-96"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-2 h-[70px] lg:h-[90px]">
        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="block lg:hidden">
          {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <AppSidebar
            toggleDrawer={toggleDrawer}
            navData={navData}
            user={user}
            isAdmin={isAdmin}
          />
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {user ? (
            <DropDown user={user} isAdmin={isAdmin} />
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <Button variant="default" className="text-white bg-primary">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="outline">انشاء حساب</Button>
              </Link>
            </div>
          )}
          <ul className="flex gap-3">{renderDesktopNav}</ul>
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
