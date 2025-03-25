"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react"; // Replacing MUI icon
import { quickLinks, social } from "../data/data";

function Footer() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <footer role="contentinfo">
      <div className="bg-[#253041] text-white py-14 px-5 md:px-0">
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
            <p lang="ar" className="leading-7 mb-6">
              تتضمن إدارة السباكة مجموعة واسعة من الأنشطة، وغالبًا ما تحدد
              العديد من الشركات وأعضائها هذه الممارسات.
            </p>
            <ul className="flex gap-5 justify-center md:justify-start">
              {social.map(({ id, href, icon, title }) => (
                <li
                  key={id}
                  className="group bg-grayHover w-10 h-10 rounded-full flex items-center justify-center"
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
            <span className="text-lg font-bold tracking-wide mb-8 block capitalize">
              روابط سريعة
            </span>
            <nav>
              <ul className="flex flex-col md:pl-3 gap-5">
                {quickLinks.map(({ id, href, content }) => (
                  <li
                    key={id}
                    className="hover:pr-2 flex gap-2 items-center hover:pl-2 duration-300 hover:underline"
                  >
                    <Link href={href} className="flex items-center">
                      <ArrowLeftCircle size={18} className="ml-2" />
                      {content}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Services */}
          <section>
            <span className="text-lg font-bold tracking-wide mb-5 block capitalize">
              الخدمات
            </span>
            <nav>
              <ul className="flex flex-col md:pl-3 gap-4 max-h-[400px] flex-wrap">
                {services.length > 0 ? (
                  services.map(({ id, title }) => (
                    <li
                      key={id}
                      className="hover:pr-2 duration-300 hover:underline"
                    >
                      <Link
                        href={`/services/${id}`}
                        className="flex items-center"
                      >
                        <ArrowLeftCircle size={18} className="ml-2" />
                        {title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>Loading services...</li>
                )}
              </ul>
            </nav>
          </section>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#212c3c] w-full text-white py-3 shadow-sm">
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
