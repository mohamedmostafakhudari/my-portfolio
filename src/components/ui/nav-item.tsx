import React from "react";
import { Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface propsTypes {
  label: string;
  href: string;
  variants?: Variants;
  className?: string;
  pathname?: string;
  whileHover?: {
    scale: number;
  };
  whileTap?: {
    scale: number;
  };
}

const NavItem = ({
  label,
  href,
  className,
  pathname,
  ...props
}: propsTypes) => {
  return (
    <motion.li className={cn("", className)} {...props}>
      <Link
        href={href}
        className={cn(
          "block py-2",
          "group [nav_&]:relative [nav_&]:py-4 text-background",
          pathname === href &&
            "text-sky-700 [&>:last-child]:left-0 [&>:last-child]:right-0 [&>:last-child]:bg-sky-700",
        )}
      >
        {label}
        {/* underline */}
        <div
          className={cn(
            "absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-background duration-200 ease-in-out",
            "group-hover:left-0 group-hover:right-0",
            "[&:not(nav_&)]:hidden",
          )}
        ></div>
      </Link>
    </motion.li>
  );
};

export default NavItem;
