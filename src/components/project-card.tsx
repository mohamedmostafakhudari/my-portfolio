import React from 'react'
import Icon from "@/components/ui/Icon";
import { BsEye } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { TypographyH4 } from "@/components/ui/typography";
import { TypographySmall } from "@/components/ui/typography";
interface ProjectCardTypes {
  name: string;
  desc: string;
  thumbnailSrc: string;
  demoHref: string;
  githubHref: string;
}

const ProjectCard = ({name, desc, thumbnailSrc, demoHref, githubHref} : ProjectCardTypes) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-[6px_6px_0_0]">
      <div className="relative">
        <img src={thumbnailSrc} alt={desc} className='w-full object-cover object-center'/>
        <div className="absolute inset-0 grid cursor-pointer place-items-center bg-gradient-to-r from-primary/50 to-[hsl(15_70%_49%_/50%)] opacity-0 duration-200 ease-in-out hover:opacity-100">
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
    </div>
  );
}

export default ProjectCard