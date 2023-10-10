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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            amount: 0.8,
            once: true,
          }}
          variants={sectionVariants}
          className="flex-1"
        >
          <div>
            <TypographyH2>About Me</TypographyH2>
            <p>
              Hi, I&apos;m Mohamed, a passionate and competent front-end web
              developer based in Egypt. Being self-taught gave me two critical skills every developer should have, Research and Adaptability. As the
              quote says &ldquo;wherever passion is, there you will find
              success&rdquo;, and I found my passion in this craft. In my journey I acquired
              a great diverse skill-set in different technologies which
              allows me to provide a professional custom web development
              solutions. I believe that my work is a reflection of myself,
              therefore my philosophy is &ldquo;Quality First&rdquo;. In my free
              time I like to do sports, reading books, you can find me surfing
              the web, hanging out on social media, or hiding in a bush in
              Fortnite 😁.
            </p>
          </div>
          <Link
            href="./mohamed-mostafa-resume.pdf"
            download="mohamed-mostafa-resume"
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