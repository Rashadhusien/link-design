"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import { useTranslation } from "react-i18next";

function ServiceCard({ imageUrl, textHead, textBody }) {
  const { t, i18n } = useTranslation(["common"]);

  return (
    <div className="bg-[#ffffff] shadow-sm max-w-[550px] rounded-3xl p-6  ">
      <div className="overflow-hidden rounded-3xl duration-500 transition-all">
        <Image
          src={imageUrl}
          alt="service-thumb"
          width={500}
          height={500}
          className="rounded-3xl object-cover hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="pt-10 pb-4">
        <Typography
          variant="h5"
          className="font-bold mb-3 hover:text-primary w-fit duration-300"
        >
          <Link href={`/services/${textHead}`}>{textHead}</Link>
        </Typography>

        <Typography variant="p" className="line-clamp-3">
          {textBody}
        </Typography>
        <Link href={`/services/${textHead}`}>
          <p
            className={`${
              i18n.language == "ar" ? "flex-row-reverse" : "flex-row"
            } flex w-fit hover:text-primary duration-300 mt-10 font-bold text-darkBlue`}
          >
            {t("readmore")} <KeyboardDoubleArrowRightIcon />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
