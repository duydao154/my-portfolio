"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import ThemeToggler from "./ThemeToggler";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface NavBarProps {
  underlineStyles: string;
}

const NavBar: React.FC<NavBarProps> = ({ underlineStyles }) => {
  const pathname = usePathname();
  const routes = [
    {
      href: `/`,
      label: "About",
      active: pathname == "/",
    },
    /*{
      href: `/my-projects`,
      label: "MyProjects",
      active: pathname == "/my-projects",
    },*/
    {
      href: `/contact`,
      label: "Contact",
      active: pathname == "/contact",
    },
  ];
  return (
    <Container>
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-12 items-center justify-between">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">Duy Dev</p>
        </Link>
        <div className="flex items-center gap-x-6">
          <nav className=" flex items-center gap-x-8 xl:flex">
            {routes.map((route: any) => (
              <Link
                key={route.href}
                href={route.href}
                className="relative hover:text-neutral-400 transition-all"
              >
                {route.active && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className={`${underlineStyles}`}
                  ></motion.span>
                )}
                {route.label}
              </Link>
            ))}
          </nav>
          <ThemeToggler />
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
