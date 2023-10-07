"use client"
import React, { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
interface IconProps {
  className?: string;
}
interface propTypes {
  IconComp: ComponentType<IconProps>;
  href: string;
  className?: string;
  variants?: Variants;
}
function Icon({ IconComp, href, className, ...props }: propTypes) {
  return (
    <motion.a href={href} whileHover={{scale: 1.1}} className={cn("block h-6 w-6", className)} {...props}>
      <IconComp className={"h-full w-full"} />
    </motion.a>
  );
}

export default Icon;
