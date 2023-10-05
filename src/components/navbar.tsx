"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/app/use-client";
import { Variants, useCycle } from "framer-motion";
import Menu from "@/components/ui/menu/";
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
const socials = [
  {
    icon: FaGithub,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
  {
    icon: FaFacebookF,
    href: "#",
  }
]
const socialsVariants: Variants = {
  hidden: {
    x: 100,
  },
  show: {
    x: 0,
    transition: {
      delay: 1,
      delayChildren: 1.4,
      staggerChildren: 0.2,
    }
  }
}
const socialItemsVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 100,
  }
}

function Navbar () {
  const [isOpen, toggleOpen] = useCycle(false, true)
  
  const pathname = usePathname();
  return (
    <nav className="text-foreground ">
      <div className="container flex items-center justify-between">
        <div className="flex-1">
          <ul className="items-center justify-center gap-2 hidden md:flex">
            {navItems.map(({ label, href }) => (
              <li key={label} className="flex-1 text-center">
                <Link
                  href={href}
                  className={cn(
                    "group relative block py-4",
                    pathname === href &&
                      "[&>:last-child]:left-0 [&>:last-child]:right-0",
                  )}
                >
                  {label}
                  {/* underline */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-white duration-200 ease-in-out",
                      "group-hover:left-0 group-hover:right-0",
                    )}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-4">
            <Menu isOpen={isOpen} toggleOpen={toggleOpen} className={'md:hidden'}/>
          </div>
        </div>
        <MotionDiv initial="hidden" animate="show" variants={socialsVariants} className="flex flex-col gap-4 absolute right-0 top-12 mt-8 bg-foreground/5 px-4 py-8">
          {socials.map(({icon, href}) => (
            <Icon key={href} IconComp={icon} href={href} variants={socialItemsVariants}/>
          ))} 
        </MotionDiv>
      </div>
    </nav>
  );
};

export default Navbar;
