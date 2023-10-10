
"use client";

import React from 'react'
import { TypographyLarge } from '@/components/ui/typography';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
const socials = {
  professional: [
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
  ],
  social: [
    {
      label: "Twitter",
      icon: FaXTwitter,
      href: "#",
    },
    {
      label: "Facebook",
      icon: FaFacebookF,
      href: "#",
    }
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white/5 to-transparent pt-16">
      <div className="container max-w-screen-lg">
        <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap sm:justify-between">
          <div className="max-w-[42ch] space-y-8">
            <TypographyLarge>Lets Work Together</TypographyLarge>
            <div className="space-y-4">
              <p>
                I would be delighted to be part of your online success and help
                your business to reach new heights.
              </p>
              <Button asChild>
                <Link href="./contact">I&apos;m In</Link>
              </Button>
            </div>
            <p className="hidden md:block">
              Copyright &copy; 2023 All rights reserved
            </p>
          </div>
          <div>
            <div className="space-y-8">
              <TypographyLarge>My Professional Profiles</TypographyLarge>
              <div className="flex gap-2">
                {socials.professional.map(({ label, icon, href }) => (
                  <Icon key={label} IconComp={icon} href={href} />
                ))}
              </div>
              <div className="space-y-8">
                <TypographyLarge>Let Us Be Friends</TypographyLarge>
                <div className="flex gap-2">
                  {socials.social.map(({ label, icon, href }) => (
                    <Icon key={label} IconComp={icon} href={href} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 block md:hidden">
          Copyright &copy; 2023 All rights reserved
        </p>
      </div>
      <div className="mt-12 bg-white/5 py-4 text-center">
        Made with &lt;3 by{" "}
        <Link
          href="#"
          className="text-sky-600 duration-200 ease-in-out hover:text-sky-500"
        >
          Mohamed Mostafa
        </Link>
      </div>
    </footer>
  );
}

export default Footer