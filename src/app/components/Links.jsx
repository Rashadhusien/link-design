"use client";
/*-----------Icons------------- */
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import CallIcon from '@mui/icons-material/Call';
/*-----------End Icons------------- */


import { social } from "../data/data";



function Links() {


  /* ---------------- Handlers ------------------- */

  const renderSocial = social.map((s) => {
    const { id, href, title, icon } = s;
    return (
      <li key={id} >
        <a href={href} title={title} target="_blank" >
          {icon}
        </a>
      </li>
    );
  });

  return (
    <div className="bg-darkBlue text-whitep shadow-md" id="back-to-top-anchor">
      <div className="container mx-auto  flex flex-col md:gap-5 md:flex-row justify-between items-center p-3 ">
        <div className="mail-location-social text-[13px] lg:text-[16px] flex flex-1 flex-col sm:flex-row items-center gap-1 ">
          <div className="location flex  items-center">
            <PlaceIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
            <a
              href="https://maps.app.goo.gl/mbaWaiQkMJw5WaKx9"
              target="_blank"
              className="text-xs lg:text-sm "
            >
              ٣ شارع حسن فخري، الزهراء، مصر القديمة
            </a>
          </div>
          <div className="flex mt-1 gap-2">
          <span className="hidden sm:block mx-1">|</span>
          <div className="mail flex gap-2 items-center">
            <a href="mailto:0linkdesign0@gmail.com" target="_blank">
              0linkdesign0@gmail.com
            </a>
            <EmailIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
          </div>
          <span className="hidden sm:block mx-1">|</span>
          <div className="mail flex gap-2 items-center">
            <a href="tel:+201003905069" >
              01003905069
            </a>
            <CallIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
          </div>
          </div>
        </div>
        <div className="flex justify-end lg:justify-around">
          <ul className="hidden md:flex gap-5">{renderSocial}</ul>
          {/* <div className="hidden lg:block"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Links;
