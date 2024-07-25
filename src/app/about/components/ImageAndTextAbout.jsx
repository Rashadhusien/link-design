import Image from "next/image";
import { Typography } from "@mui/material";


function ImageAndTextAbout() {

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-10 relative ">
        <Image
          src={"/master.jpg"} // about-img-2
          alt="about-Image-2"
          width={500}
          height={500}
          className="max-w-[100%] object-contain"
        />
        <div className="pl-0 py-10 pr-2  lg:p-10">
          <Typography
            variant="p"
            className=" flex items-center gap-3 font-bold tracking-wide text-primary pb-5"
          >
            <span className="w-10 h-[0.8px] bg-primary block" />
            من نحن؟
            <span className="w-10 h-[0.8px] bg-primary block" />
          </Typography>
          <Typography
            variant="h3"
            className="text-gray font-bold mb-9 text-3xl sm:text-4xl"
          >
           أكثر من 25 عاماً من الخبرة في مجال خدمات السباكة ومكافحة الحرائق
          </Typography>
          <p className="text-gray mb-6 max-w-[680px]  tracking-wider leading-7 text-sm sm:text-md lg:text-lg xl:text-xl">
         
            لدينا سنوات من الخبرة والسمعة الطيبة لذا يمكنك أن تطمئن إلى أنك كذلك <strong>منزلك ونظام السباكة آمنان</strong> موثوقة. حتى نتمكن من إعادة نظام السباكة الخاص بك إلى المسار الصحيح بسرعة وبشكل صحيح.

          </p>
          <p className="text-gray  max-w-[680px] tracking-wider  leading-7 text-sm sm:text-md lg:text-lg xl:text-xl">
           
            لدينا سنوات من الخبرة والسمعة الطيبة لذا يمكنك أن تطمئن إلى أنك كذلك <strong>إذا لم نصل في الوقت المحدد، فلن تدفع عشرة سنتات!</strong> انقاذ على سخانات المياه. جدولة الطلب الآن. الخدمات: تنظيف الصرف، فلتر المياه، إصلاح سخان المياه، تركيب سخان المياه.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageAndTextAbout;

