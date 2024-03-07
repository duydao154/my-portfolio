import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
  active: boolean;
  selectTab: any;
  children: any;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const underline = active
    ? "underline decoration-red-400 underline-offset-8 w-full"
    : "";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-neutral-400 ${underline}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
