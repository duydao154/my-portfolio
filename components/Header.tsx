"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYpos: any = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.addEventListener("scroll", scrollYpos);
  });
  return (
    <div className="relative">
      <header
        className={`${
          header
            ? "py-4 bg-white shadow-lg dark:bg-neutral-800 fixed w-full"
            : "py-6 dark:bg-transparent"
        }  top-0 z-30 transition-all`}
      >
        <NavBar underlineStyles="absolute left-0 top-full h-[2px] bg-red-400 w-full" />
      </header>
    </div>
  );
};

export default Header;
