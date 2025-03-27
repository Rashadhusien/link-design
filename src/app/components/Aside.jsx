"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";

import AsideSkeleton from "./AsideSkeleton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { LogOutIcon } from "lucide-react";

import { signOut } from "firebase/auth";

function Aside({ currentServiceId }) {
  const [user] = useAuthState(auth);

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services"); // Adjust API endpoint
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchServices();
  }, []);

  if (isLoading) return <AsideSkeleton />;

  return (
    <div className=" overflow-hidden lg:container lg:mx-auto flex rounded-md flex-col bg-bgtestemonial items-center gap-10 sm:px-4">
      <div className="w-full pt-3">
        <h5 className="relative text-2xl mb-8 font-bold capitalize pb-5 text-gray after:right-16 before:right-0 before:bg-primary before:w-14 before:h-1 before:absolute before:bottom-0 before:rounded-xl after:bg-[#f2f2f2] after:w-2/3 sm:after:w-4/5 after:h-1 after:absolute after:bottom-0 after:rounded-xl">
          خدماتنا
        </h5>
        <ul className="flex flex-col gap-5 w-full">
          {services.map(
            ({ id, title }) =>
              id !== currentServiceId && (
                <li
                  key={id}
                  className="hover:pr-1 text-md hover:text-primary duration-200 capitalize text-grayp"
                >
                  <Link href={`/services/${id}`}>{title}</Link>
                </li>
              )
          )}
        </ul>
      </div>

      <div className="p-8 w-full text-slate bg-darkBlue rounded-sm">
        <h2 className="text-3xl my-5">تواصل معنا</h2>
        <p className="text-sm leading-6 capitalize mb-5">
          نحن شركة سباكة تعمل في هذا المجال منذ ما يقرب من 20 عامًا منذ بدايتنا
        </p>
        <Button className="border-2 py-3 px-5 mb-5">
          <Link href="/contact">اتصل بنا</Link>
        </Button>
      </div>
      <div className="p-8 w-full text-darkBlue bg-bgtestemonial rounded-sm">
        {user ? (
          <h2 className="text-3xl my-5">تسجيل الخروج</h2>
        ) : (
          <h2 className="text-3xl my-5">تسجيل الدخول</h2>
        )}
        {user ? (
          <Link href={"/sign-in"}>
            <button
              className={
                "btn-style  cursor-pointer p-3 text-md md:p-4 lg:text-lg  text-primary  border-4 border-primary  hover:text-slate hover:bg-primary flex gap-3 items-center font-bold capitalize z-10 relative transition-all duration-300 rounded-lg"
              }
              onClick={() => {
                signOut(auth);
                console.log("signed out");
              }}
            >
              <LogOutIcon />
              تسجيل الخروج
            </button>
          </Link>
        ) : (
          <div className="flex items-center gap-6 flex-col w-full ">
            <Link href={"/sign-in"} className="w-full">
              <button
                className={
                  " btn-style w-full cursor-pointer p-3 xl:p-3 text-md  xl:text-lg  hover:text-primary border-2 xl:border-4 border-primary  text-slate bg-primary lg:inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg "
                }
              >
                تسجيل الدخول
              </button>
            </Link>

            <Link href={"/sign-up"} className="w-full">
              <button
                className={
                  " btn-style w-full cursor-pointer p-3 xl:p-3 text-md xl:text-lg  text-primary border-2 xl:border-4 border-primary  hover:text-slate hover:bg-primary lg:inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg"
                }
              >
                انشاء حساب
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Aside;
