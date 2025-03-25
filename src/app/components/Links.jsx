"use client";

/*-----------Icons------------- */
import { MapPin, Mail, PhoneCall } from "lucide-react"; // Replacing MUI icons
/*-----------End Icons------------- */

import { social } from "../data/data";

function Links() {
  return (
    <nav className="px-4 bg-darkBlue text-white shadow-md">
      <div className="container mx-auto flex flex-row justify-between items-center p-3">
        {/* Contact Section */}
        <div className="flex flex-1  items-center gap-5 md:gap-1 text-[13px] lg:text-[16px]">
          {/* Location */}
          <a
            href="https://maps.app.goo.gl/mbaWaiQkMJw5WaKx9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs lg:text-sm flex justify-center gap-1 items-center"
          >
            <MapPin
              size={18}
              className="hover:scale-105 duration-300 inline-block "
            />
            <span className="hidden md:block"> القاهرة , الزهراء</span>
          </a>

          <span className="hidden sm:block mx-1">|</span>

          {/* Email */}
          <a
            href="mailto:0linkdesign0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <span className="hidden md:block"> 0linkdesign0@gmail.com</span>
            <Mail size={18} className="hover:scale-105 duration-300" />
          </a>

          <span className="hidden sm:block mx-1">|</span>

          {/* Phone */}
          <a href="tel:+201003905069" className="flex gap-2 items-center">
            <span className="hidden md:block">01003905069</span>
            <PhoneCall size={18} className="hover:scale-105 duration-300" />
          </a>
        </div>

        {/* Social Icons */}
        <ul className="flex gap-5">
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
