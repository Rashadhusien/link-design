"use client";
/*-----------Icons------------- */
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import { v4 as uuid } from "uuid";
/*-----------End Icons------------- */


// className="hover:scale-105 duration-300"

const soceial = [
  {
    id: uuid(),
    href: "https://www.facebook.com/enghusseinrashad/",
    title: "facebook",
    icon: <FacebookRoundedIcon />,
  },
  {
    id: uuid(),
    href: "/",
    title: "twitter",
    icon: <XIcon />, // className="hover:scale-105 duration-300 text-[20px]"
  },
  {
    id: uuid(),
    href: "/",
    title: "instagram",
    icon: <InstagramIcon />,
  },
  {
    id: uuid(),
    href: "/",
    title: "LinkedIn",
    icon: <LinkedIn />,
  },
];

function Links() {
  // const { t } = useTranslation(["links"]);

  /* ---------------- Handlers ------------------- */

  const renderSocial = soceial.map((s) => {
    const { id, href, title, icon } = s;
    return (
      <li key={id}>
        <a href={href} title={title} target="_blank">
          {icon}
        </a>
      </li>
    );
  });

  return (
    <div className="bg-darkBlue text-whitep shadow-md" id="back-to-top-anchor">
      <div className="container mx-auto  flex flex-col gap-5 md:flex-row justify-between items-center p-3 ">
        <div className="mail-location-social text-[13px] lg:text-[16px] flex flex-1 flex-col sm:flex-row items-center gap-1 ">
          <div className="location flex  items-center">
            <PlaceIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
            <a
              href="https://maps.app.goo.gl/mbaWaiQkMJw5WaKx9"
              target="_blank"
              className="text-sm "
            >
              {"٣ شارع حسن فخري، الزهراء، مصر القديمة"}
              {/* {t("address")} */}
            </a>
          </div>
          <span className="hidden sm:block mx-3">|</span>
          <div className="mail flex gap-2 items-center">
            <EmailIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
            <a href="mailto:rashadhusein440@gmail.com " target="_blank">
              0linkdesign0@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-end lg:justify-around items-center flex-1">
          <ul className="flex gap-5">{renderSocial}</ul>
          <div className="hidden lg:block">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
