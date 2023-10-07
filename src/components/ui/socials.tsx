"use client";

import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {IoShareSocialOutline} from "react-icons/io5";
import Icon from "@/components/ui/Icon";
import {socialsVariants, socialItemsVariants} from '@/lib/animations';
import { cn } from '@/lib/utils';

const socials = [
  {
    label: "Github",
    icon: FaGithub,
    href: "#",
  },
  {
    label: "Linkedin",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    label: "Twitter",
    icon: FaXTwitter,
    href: "#",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
];

const Socials = ({className, ...props} : {
  className: string,
}) => {
  const [isOpen, toggleOpen] = useCycle(true, false);
  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "show": "hidden"}
      variants={socialsVariants}
      className={cn("bg-background/50 px-4 py-8", className)}
      {...props}
    >
      {socials.map(({ label, icon, href }) => (
        <Icon
          key={label}
          IconComp={icon}
          href={href}
          variants={socialItemsVariants}
        />
      ))}
      <button className="absolute right-full top-0 bg-white rounded block w-fit p-2" onClick={toggleOpen}><IoShareSocialOutline  className="text-black w-6 h-6"/></button>
    </motion.div>
  );
}

export default Socials