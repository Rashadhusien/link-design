"use client";
import Image from "next/image";
import { Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Link from "next/link";
import { quickLinks, services, social } from "../data/data";

function Footer() {
  return (
    <footer role="contentinfo">
      {/* Main Footer Section */}
      <div className="bg-[#253041] text-whitep py-14 px-5 md:px-0">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Logo & Social Links */}
          <section>
            <Link href="/" rel="noopener noreferrer">
              <Image
                src="/logo.png"
                alt="logo"
                width={130}
                height={100}
                className="mx-auto mb-5 lg:mx-0"
                priority
              />
            </Link>
            <Typography lang="ar" className="leading-7 mb-6">
              تتضمن إدارة السباكة مجموعة واسعة من الأنشطة، وغالبًا ما تحدد
              العديد من الشركات وأعضائها هذه الممارسات.
            </Typography>
            <ul className="flex gap-5 justify-center md:justify-start">
              {social.map(({ id, href, icon, title }) => (
                <li
                  key={id}
                  className="group bg-grayHover w-[40px] h-[40px] rounded-full flex items-center justify-center"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Links */}
          <section>
            <Typography
              variant="h5"
              className="font-bold tracking-wide mb-8 capitalize"
            >
              روابط سريعة
            </Typography>
            <nav>
              <ul className="flex flex-col md:pl-3 gap-5">
                {quickLinks.map(({ id, href, content }) => (
                  <li
                    key={id}
                    className="hover:pr-2 flex gap-2 items-center hover:pl-2 duration-300 hover:underline"
                  >
                    <Link href={href}>
                      <span className="flex items-center">
                        <KeyboardDoubleArrowLeftIcon />
                        {content}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Services */}
          <section>
            <Typography
              variant="h5"
              className="font-bold tracking-wide mb-5 capitalize"
            >
              الخدمات
            </Typography>
            <nav>
              <ul className="flex flex-col md:pl-3 gap-4 max-h-[400px] flex-wrap">
                {services.map(({ id, title }) => (
                  <li
                    key={id}
                    className="hover:pr-2 duration-300 hover:underline"
                  >
                    <Link href={`/services/${id}`}>
                      <span className="flex items-center">
                        <KeyboardDoubleArrowLeftIcon />
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#212c3c] w-full text-whitep py-3 shadow-sm">
        <div className="container mx-auto">
          <p className="text-center p-1 text-sm tracking-wide">
            &copy; حقوق النشر 2024 | جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
