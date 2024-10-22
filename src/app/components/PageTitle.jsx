import { Typography } from "@mui/material";
import Image from "next/image";
function PageTitle({ title }) {
  return (
    <div className="overflow-hidden relative h-[400px] ">
      <Image
        src={"/page-title.jpg"}
        alt="page-title"
        width={2000}
        height={2000}
        className="w-full h-full object-cover"
        priority={true}
      />
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-primary opacity-60   " />
      <Typography
        variant="h2"
        className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-20 text-nowrap  capitalize text-whitep font-[600] text-3xl sm:text-4xl md:text-5xl "
      >
        {title}
      </Typography>
    </div>
  );
}

export default PageTitle;
