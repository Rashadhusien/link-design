"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function SectionTitle({ title, style }) {
  // Memoize title to prevent unnecessary re-renders
  const memoizedTitle = useMemo(() => title, [title]);

  return (
    <div className={style}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto py-10 flex items-center justify-center gap-5 text-center text-3xl sm:text-5xl font-bold uppercase"
      >
        {/* Decorative spans for styling */}
        <span
          className="h-[1.5px] inline-block w-8 md:w-12 bg-primary text-primary"
          aria-hidden="true"
        />
        {memoizedTitle}
        <span
          className="h-[1.5px] inline-block w-8 md:w-12 bg-primary text-primary"
          aria-hidden="true"
        />
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
