
"use client";

import React from 'react'
import { TypographyLarge } from '@/components/ui/typography';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import Link from 'next/link';
import Icon from '@/components/ui/Icon';
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

const Footer = () => {
  return (
    <footer className="pt-16 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container max-w-screen-lg">
        <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap sm:justify-between">
          <div className='space-y-8 max-w-[42ch]'>
            <TypographyLarge>About Me</TypographyLarge>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, dolorem.
            </p>
            <p>Copyright &copy;2023 All rights reserved</p>
          </div>
          <div className="space-y-8">
            <TypographyLarge>Let Us Be Friends</TypographyLarge>
            <div className="flex gap-2">
              {socials.map(({ label, icon, href }) => (
                <Icon
                  key={label}
                  IconComp={icon}
                  href={href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-white/5 mt-12">
          Made with &lt;3 by <Link href="#" className="text-sky-600 duration-200 ease-in-out hover:text-sky-500">Mohamed Mostafa</Link>
      </div>
    </footer>
  );
}

export default Footer