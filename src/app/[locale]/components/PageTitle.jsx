import { Typography } from "@mui/material";
import Image from "next/image";
function PageTitle({ title }) {
  return (
    <div className="overflow-hidden relative h-80 ">
      <Image
        src={"/page-title.jpg"}
        alt="page-title"
        width={500}
        height={500}
        className="w-full h-full object-cover"
        priority={true}
        quality={100}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-60  " />
      <Typography
        variant="h2"
        className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-whitep font-bold text-4xl sm:text-5xl md:text-6xl "
      >
        {title}
      </Typography>
    </div>
  );
}

export default PageTitle;
