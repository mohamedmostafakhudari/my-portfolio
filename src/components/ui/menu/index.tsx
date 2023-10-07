import { MotionDiv } from "@/app/use-client";
import { useDimensions } from "@/lib/hooks/use-dimensions";
import { Cycle, Variants } from "framer-motion";
import React, { RefObject, useRef } from "react";
import Navigation from "@/components/ui/navigation";
import { MenuToggle } from "@/components/ui/menu/menu-toggle";
import { cn } from "@/lib/utils";
import NavItem from "@/components/ui/nav-item";
import { menuItemVariants, menuVariants } from "@/lib/animations";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
interface propTypes {
  isOpen: boolean;
  toggleOpen: Cycle;
  className?: string;
}
const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Menu = ({ isOpen, toggleOpen, className }: propTypes) => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <MotionDiv
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 top-0 w-[300px] text-slate-900",
        className,
      )}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <MotionDiv
        className="absolute bottom-0 left-0 top-0 w-[300px] min-h-screen  bg-white"
        variants={sidebarVariants}
      />
      <Navigation
        className="absolute top-[100px] w-[230px] p-[25px]"
        variants={menuVariants}
      >
        {navItems.map(({ label, href }) => (
          <NavItem
            key={`${label}-menu`}
            label={label}
            href={href}
            variants={menuItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn("pointer-events-none", isOpen && "pointer-events-auto")}
          />
        ))}
      </Navigation>
      <MenuToggle toggle={() => toggleOpen()} />
    </MotionDiv>
  );
};

export default Menu;
