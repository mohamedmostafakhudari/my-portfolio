import React from 'react'
import Icon from "@/components/ui/Icon";
import { BsEye } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { TypographyH4 } from "@/components/ui/typography";
import { TypographySmall } from "@/components/ui/typography";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectCard } from '@/lib/animations';
interface ProjectCardTypes {
  name: string;
  desc: string;
  thumbnailSrc: string;
  demoHref: string;
  githubHref: string;
}
// ! This solution of manually adding assetPrefix won't work with vercel, consider removing it later ! //
const isProd = process.env.NODE_ENV === "production";

const ProjectCard = ({name, desc, thumbnailSrc, demoHref, githubHref} : ProjectCardTypes) => {
  return (
    <motion.div variants={projectCard} className="flex flex-col overflow-hidden rounded-[6px_6px_0_0]">
      <div className="relative flex-1 min-h-[20rem]">
        <Image src={`${isProd ? "/my-portfolio": ''}${thumbnailSrc}`} width={250} height={400} alt={desc} className="object-cover object-center w-full h-full"/>
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-r from-primary/50 to-[hsl(15_70%_49%_/50%)] opacity-0 duration-200 ease-in-out hover:opacity-100">
          <div className="">
            <Icon IconComp={BsEye} href={demoHref} />
            <Icon IconComp={BiCodeAlt} href={githubHref} />
          </div>
        </div>
      </div>
      <div className="rounded-[0_0_6px_6px] bg-white/5 p-4">
        <TypographyH4>{name}</TypographyH4>
        <TypographySmall className="text-slate-400">
          {desc}
        </TypographySmall>
      </div>
    </motion.div>
  );
}

export default ProjectCard