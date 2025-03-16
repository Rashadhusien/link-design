"use client";
import Image from "next/image";

import Link from "next/link";
import { navData } from "../../data/data";

import { usePathname } from "next/navigation";

import { CldImage } from "next-cloudinary";

import { motion } from "framer-motion";

import Button from "../../components/ui/Button";

function ImageAndTextAbout() {
  const pathname = usePathname();

  return (
    <div>
      <div className=" flex flex-col justify-between overflow-hidden xl:flex-row gap-10 relative ">
        <CldImage
          src={"master_cebvdg"} // about-img-2
          alt="about-Image-2"
          width={500}
          height={500}
          className="max-w-[100%] object-contain"
        />
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: [0.25, 0.25, 0.25, 0.75],
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="pl-0 py-10 pr-2  lg:p-10"
        >
          <p className=" flex items-center gap-3 font-bold text-primary pb-5">
            <span className="w-1 h-[0.8px] bg-primary block" />
            <span>من نحن ؟</span>
            <span className="w-1 h-[0.8px] bg-primary block" />
          </p>
          <h1 className="text-gray font-extrabold mb-6 text-2xl sm:text-3xl md:text-4xl leading-tight">
            أكثر من 25 عامًا من الخبرة في خدمات السباكة ومكافحة الحرائق
          </h1>

          <p className="text-gray mb-4 max-w-[680px] mx-auto xl:mx-0 text-sm sm:text-md lg:text-lg xl:text-xl leading-relaxed">
            لدينا سنوات من الخبرة والسمعة الطيبة، لذا يمكنك أن تطمئن إلى أن{" "}
            <strong>منزلك ونظام السباكة آمنان وموثوقان.</strong> نحن نعمل بكفاءة
            لإعادة نظام السباكة الخاص بك إلى المسار الصحيح بسرعة وبشكل صحيح.
          </p>
          <p className="text-gray max-w-[680px] mx-auto xl:mx-0 text-sm sm:text-md lg:text-lg xl:text-xl leading-relaxed">
            إذا لم نصل في الوقت المحدد،{" "}
            <strong>فلن تتحمل أي تكلفة إضافية!</strong> نحن نقدم خصومات على
            سخانات المياه. احجز الآن للاستفادة من خدماتنا، والتي تشمل: تنظيف
            الصرف، فلاتر المياه، إصلاح وتركيب سخانات المياه.
          </p>
          {pathname == "/" && (
            <Link href={navData[1].href}>
              <Button>قراءة المزيد</Button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ImageAndTextAbout;
