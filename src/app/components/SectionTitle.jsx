import { Typography } from "@mui/material";

function SectionTitle({ title, style, currentLang }) {
  return (
    <div className={style}>
      <Typography
        variant="h3"
        className={`container mx-auto  ${style} py-10  flex items-center justify-center gap-5 text-center text-3xl sm:text-5xl font-bold  uppercase`}
      >
        <span className="h-[1.5px] inline-block w-8 md:w-12 bg-primary text-primary" />
        {title}
        <span className="h-[1.5px] inline-block w-8 md:w-12 bg-primary text-primary" />
      </Typography>
    </div>
  );
}

export default SectionTitle;
