import React from "react";
import { Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navigation = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  variants?: Variants;
}) => {
  return (
    <motion.ul className={cn("", className)} {...props}>
      {children}
    </motion.ul>
  );
};

export default Navigation;
