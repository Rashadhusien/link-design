
import AnimateImage from "./AnimateImage";
import Image from "next/image";

import ContactForm from "./ContactForm";

function Book() {

  return (
    <div className="bg-gray flex  justify-center items-center md:h-lvh text-slate ">
      <div className="basis-full md:basis-3/6  h-full py-10 px-5 md:p-14  relative ">
        <ContactForm  />
        <Image
          src={"/contact-shape.png"}
          alt="contact"
          width={200}
          height={200}
          className=" absolute bottom-0 left-0 w-[200px] h-[200px] rtl:right-1  "
        />
      </div>
      <div className=" hidden md:block basis-3/6  border-slate h-full">
        <AnimateImage />
      </div>
    </div>
  );
}

export default Book;
