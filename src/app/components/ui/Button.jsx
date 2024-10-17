import { motion } from "framer-motion";
function Button({ children, style, ...rest }) {
  return (
    <motion.button
      whileTap={{ scale: [0.8, 1] }}
      transition={{
        duration: 0.1,
        type: "spring",
        damping: 0.5,
      }}
      {...rest}
      className={`${style} btn-style  cursor-pointer p-3 text-md md:p-4 md:text-lg mt-10  hover:text-primary  border-4 border-primary  text-slate bg-primary inline-block font-bold capitalize z-10 relative transition-all duration-300 rounded-lg`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
