"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/hooks/useScrollProgress";
import { transform } from "next/dist/build/swc";

interface TemplateProps {
  children: any;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  const completion: any = useScrollProgress();
  console.log(completion);

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
        <span
          style={{ transform: `translateY(${completion - 100}%)` }}
          className="fixed z-50 bg-red-400 w-1 top-0 right-0 bottom-0 transition-all duration-700"
        ></span>
      </motion.main>
    </>
  );
};

export default Template;
