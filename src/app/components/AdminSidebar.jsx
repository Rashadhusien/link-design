"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "firebaseConfig";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const AdminSidebar = () => {
  const [openAdminSide, setOpenAdminSide] = useState(false);
  const router = useRouter();

  return (
    <div className="relative">
      <button
        onClick={() => setOpenAdminSide(true)}
        className={`${
          openAdminSide ? "hidden" : "block"
        }  lg:hidden inline-block absolute top-[45px] cursor-pointer  right-2 bg-darkBlue text-white rounded-md p-1 text-2xl`}
      >
        <IoMenu />
      </button>
      <div
        className={` ${
          openAdminSide ? "block" : "hidden"
        }   w-64  lg:block bg-gray text-white h-screen p-5`}
      >
        <span
          onClick={() => setOpenAdminSide(false)}
          className={`${
            openAdminSide ? "block" : "hidden"
          }  lg:hidden inline-block absolute top-[20px]  cursor-pointer  left-[5px] bg-white text-gray rounded-sm p-1 text-2xl`}
        >
          <IoClose />
        </span>
        <h2 className="text-xl font-bold mb-5 ">لوحة معلومات الإدارة </h2>
        <ul className="space-y-5">
          <li>
            <Link href="/dashboard">الرئيسية</Link>
          </li>
          <li>
            <Link href="/dashboard/services">الخدمات</Link>
          </li>
          <li>
            <Link href="/dashboard/testimonials">اراء العملاء</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
