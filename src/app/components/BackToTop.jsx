"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-5 right-5 shadow-lg rounded-full z-50"
    >
      {visible && (
        <Button
          onClick={scrollToTop}
          variant="ghost"
          size="icon"
          className="rounded-full p-3 bg-primary text-white hover:bg-primary/90  transition-all"
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </motion.div>
  );
};

export default BackToTop;
