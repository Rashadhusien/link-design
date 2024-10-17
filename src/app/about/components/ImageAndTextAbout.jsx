"use client";
import Image from "next/image";

import Link from "next/link";
import { navData } from "../../data/data";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "../../data/variants";

import Button from "../../components/ui/Button";

function ImageAndTextAbout() {
  const pathname = usePathname();

  return (
    <div>
      <div className=" flex flex-col justify-between overflow-hidden xl:flex-row gap-10 relative ">
        <Image
          src={"/master.jpg"} // about-img-2
          alt="about-Image-2"
          width={500}
          height={500}
          className="max-w-[100%] object-contain"
        />
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="pl-0 py-10 pr-2  lg:p-10"
        >
          <p className=" flex items-center gap-3 font-bold text-primary pb-5">
            <span className="w-10 h-[0.8px] bg-primary block" />
            <span>من نحن؟</span>
            <span className="w-10 h-[0.8px] bg-primary block" />
          </p>
          <h3 className="text-gray font-bold mb-9 text-3xl sm:text-4xl">
            أكثر من 25 عاماً من الخبرة في مجال خدمات السباكة ومكافحة الحرائق
          </h3>

          <p className="text-gray mb-6 max-w-[680px]   text-sm sm:text-md lg:text-lg xl:text-xl">
            لدينا سنوات من الخبرة والسمعة الطيبة لذا يمكنك أن تطمئن إلى أنك كذلك
            <strong>منزلك ونظام السباكة آمنان</strong> موثوقة. حتى نتمكن من
            إعادة نظام السباكة الخاص بك إلى المسار الصحيح بسرعة وبشكل صحيح.
          </p>
          <p className="text-gray  max-w-[680px]   text-sm sm:text-md lg:text-lg xl:text-xl">
            لدينا سنوات من الخبرة والسمعة الطيبة لذا يمكنك أن تطمئن إلى أنك كذلك
            <strong>إذا لم نصل في الوقت المحدد، فلن تدفع عشرة سنتات!</strong>
            انقاذ على سخانات المياه. جدولة الطلب الآن. الخدمات: تنظيف الصرف،
            فلتر المياه، إصلاح سخان المياه، تركيب سخان المياه.
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
