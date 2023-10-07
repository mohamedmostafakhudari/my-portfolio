"use client";
import React from 'react'
import { TypographyH2 } from "@/components/ui/typography";
import Link from 'next/link';
import { BsDownload } from 'react-icons/bs';
import  SkillProgressItem from '@/components/skill-progress-item';
import { motion } from 'framer-motion';
import { skills } from "@/data";
import {sectionVariants} from "@/lib/animations";

const About = () => {
  return (
    <section id="about" className="py-24 md:pt-64">
      <div className="container flex flex-col gap-16 md:flex-row">
        <motion.div initial="hidden" whileInView="show" viewport={{
          amount: 0.8,
        }} variants={sectionVariants} className="flex-1">
          <div>
            <TypographyH2>About Me</TypographyH2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos obcaecati laboriosam vitae esse, expedita sunt velit
              inventore nesciunt quia vero incidunt, ad ea autem molestias
              quibusdam, dolore deserunt eius dicta consequuntur laborum sequi
              aut labore. Velit maxime nisi magnam? Vel?
            </p>
          </div>
          <Link
            href="./pdf-template-referral-fee-agreement-template.pdf"
            download="pdf-template-referral-fee-agreement-template"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-fit items-center gap-2 rounded bg-gradient-primary p-2 px-4"
          >
            Download My Resume
            <BsDownload />
          </Link>
        </motion.div>
        <div className="flex-1">
          <ul className="space-y-4">
            {skills.map(({ title, progressValue }) => (
              <SkillProgressItem
                key={title}
                title={title}
                value={progressValue}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About