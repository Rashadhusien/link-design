import AnimateImage from "./AnimateImage";
import Image from "next/image";

import ContactForm from "./ContactForm";

function Book() {
  return (
    <div className="bg-gray flex   justify-center items-center md:h-lvh text-slate ">
      <div className="basis-full md:basis-3/6  h-full py-10 px-5 md:p-14  relative z-0 ">
        <ContactForm />
        <Image
          src={"/contact-shape.png"}
          alt="contact"
          width={200}
          height={200}
          className=" absolute bottom-0 left-14 z-[-1]  opacity-50 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-[250] lg:h-[250]   "
        />
      </div>
      <div className=" hidden md:block basis-3/6  border-slate h-full">
        <AnimateImage />
      </div>
    </div>
  );
}

export default Book;
