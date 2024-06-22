"use client";
import Image from "next/image";
import { Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

function ImageAndTextAbout() {
  const { t } = useTranslation(["about"]);

  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row gap-10  ">
        <Image
          src={"/master.jpg"} // about-img-2
          alt="about-Image-2"
          width={500}
          height={500}
          className="max-w-[100%] object-contain"
        />
        <div className="pl-0 py-10 pr-10  lg:p-10">
          <Typography
            variant="p"
            className=" flex items-center gap-3 font-bold tracking-wide text-primary pb-5"
          >
            <span className="w-10 h-[0.8px] bg-primary block" />
            {t("howarewe")}
            <span className="w-10 h-[0.8px] bg-primary block" />
          </Typography>
          <Typography
            variant="h3"
            className="text-gray font-bold mb-9 text-4xl sm:text-6xl lg:text-4xl xl:text-6xl"
          >
            {t("aboutTitle")}
          </Typography>
          <p className="text-gray mb-6 max-w-[680px]  tracking-wider leading-6 text-sm sm:text-md xl:text-lg">
            {t("aboutDescFirstOne")} <strong>{t("aboutDescFirstTwo")}</strong>
            {t("aboutDescFirstThree")}
          </p>
          <p className="text-gray  max-w-[680px] tracking-wider leading-6 text-sm sm:text-md xl:text-lg">
            {t("aboutDescSecondOne")} <strong>{t("aboutDescSecondTwo")}</strong>
            {t("aboutDescSecondThree")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageAndTextAbout;

// We have years of experience and a good reputation so you can rest assured you are

{
  /* <strong>Your home and plumbing system are safe</strong> */
}
// , hands downReliable. So we can get your plumbing system back on trackQuickly and correctly.

//  We specialize in plumbing service from Bloomco, ready for all workPlumbing needs you may have.
//  <strong>If we don't arrive on time, you won't pay a dime!</strong>
//  Save on water heaters. Schedule an application now. Services: Exchange Cleaning, water filter, water heater repair, water heater installed.
