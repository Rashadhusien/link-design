"use client";
import { motion } from "framer-motion";
function SectionTitle({ title, style, currentLang }) {
  return (
    <div className={style}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className={`container mx-auto  ${style} py-10  flex items-center justify-center gap-5 text-center text-3xl sm:text-5xl font-bold  uppercase`}
      >
        <span className="h-[1.5px] inline-block w-8 md:w-12 bg-primary text-primary" />
        {title}
        <span className="h-[1.5px] inline-block w-8 md:w-12 bg-primary text-primary" />
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
