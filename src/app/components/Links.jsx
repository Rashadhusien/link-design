"use client";

/*-----------Icons------------- */
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
/*-----------End Icons------------- */

import { social } from "../data/data";

function Links() {
  return (
    <nav className="px-4 bg-darkBlue text-whitep shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-3">
        {/* Contact Section */}
        <div className="flex flex-1 flex-col sm:flex-row items-center gap-1 text-[13px] lg:text-[16px]">
          {/* Location */}
          <div className="flex items-center gap-1">
            <PlaceIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
            <a
              href="https://maps.app.goo.gl/mbaWaiQkMJw5WaKx9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm"
            >
              الزهراء، مصر القديمة
            </a>
          </div>

          <div className="flex mt-1 gap-2 items-center">
            <span className="hidden sm:block mx-1">|</span>

            {/* Email */}
            <div className="flex gap-2 items-center">
              <a
                href="mailto:0linkdesign0@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                0linkdesign0@gmail.com
              </a>
              <EmailIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
            </div>

            <span className="hidden sm:block mx-1">|</span>

            {/* Phone */}
            <div className="flex gap-2 items-center">
              <a href="tel:+201003905069">01003905069</a>
              <CallIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <ul className="hidden md:flex gap-5">
          {social.map(({ id, href, title, icon }) => (
            <li key={id}>
              <a
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Links;
