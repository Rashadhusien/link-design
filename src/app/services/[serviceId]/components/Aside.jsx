"use client";



import Link from "next/link";
import Button from "../../../components/ui/Button";


import { services } from "../../../data/data";


function Aside({ currentServiceId }) {




  const servicesJSX = services.map((service) => {
    const { id, title} = service;

    return (
      currentServiceId != id && (
        <li
          key={id}
          className={`hover:pr-1 text-md hover:text-primary  duration-200 capitalize text-grayp`}
        >
          <Link href={`/services/${id}`}>{title}</Link>
        </li>
      )
    );
  });

  return (
    <div className="sm:w-96 lg:container lg:mx-auto flex flex-col items-center gap-10 sm:px-4 ">
      <div className="w-full">
        <h5
          className={`after:right-16 before:right-0 text-gray relative text-2xl mb-8 font-bold capitalize pb-5 before:bg-primary before:w-14 before:h-1 before:absolute   before:bottom-0 before:rounded-xl after:bg-[#f2f2f2] after:w-2/3 sm:after:w-4/5 after:h-1 after:absolute  after:bottom-0 after:rounded-xl `}
        >
          خدماتنا
        </h5>

        <ul className="flex flex-col gap-5">{servicesJSX}</ul>
        {/* <AsideSkeleton isLoading={isLoading} /> */}
      </div>
      <div className="p-8 lg:max-w-64 text-slate bg-darkBlue">
        <h2 className="text-3xl my-5">تواصل معنا</h2>
        <p className="text-sm leading-6 capitalize mb-5">
        نحن شركة سباكة تعمل في هذا المجال منذ ما يقرب من 20 عامًا منذ بدايتنا
        </p>
        <Button style={"border-2 py-3 px-5 mb-5 "}>
          <Link href={"/contact"}>اتصل بنا</Link>
        </Button>
      </div>
    </div>
  );
}

export default Aside;
