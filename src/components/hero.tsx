"use client";
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AnimatedTextWord from "@/components/ui/animated-text-word";
import { typingVariants } from "@/lib/animations";
import { AiOutlineCalendar, AiOutlineHome } from "react-icons/ai";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { randomIndex } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Triangles from '@/components/triangles';
import Circles from '@/components/circles';
const Hero = () => {

  return (
    <section id="hero" className="relative bg-gradient-primary py-24 md:pt-0">
        <Circles />
        <Triangles />
        <Triangles reverse/>
      <div className="container">
        <Card className="flex flex-col gap-6 overflow-hidden shadow-lg shadow-white/30 md:mx-0 md:translate-y-[45%] md:flex-row md:items-center md:gap-12 md:px-8">
          <div className="md:flex-1">
            <CardHeader className="uppercase text-slate-600">
              <CardTitle>
                <AnimatedTextWord
                  wordByWord={false}
                  staggerChildren={0.1}
                  childVariants={typingVariants}
                  className="inline text-sm font-normal tracking-widest text-slate-800"
                >
                  hello everyone, i am
                </AnimatedTextWord>
                <AnimatedTextWord delayChildren={2} className="mt-2">
                  Mohamed Mostafa
                </AnimatedTextWord>
              </CardTitle>
              <CardDescription className="text-slate-600">
                <span className="normal-case">a</span> front-end web developer
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8 sm:flex-row md:max-w-[45ch] md:flex-col">
              <p>
                In this digital revolution era, everyone deserves to have
                his/her own spot on the web. I&apos;m here to collaborate with
                you to build your online success, and to make your digital spot
                an attractive and efficient place.
              </p>
              <ul className="space-y-2">
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <div>
                    <AiOutlineCalendar />
                  </div>
                  <span>17th May, 1998</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <div>
                    <HiOutlinePhone />
                  </div>
                  <span>20 (010) 276 112 26</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <div>
                    <HiOutlineMail />
                  </div>
                  <span>mohamedmostafakhudari@gmail.com</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <div>
                    <AiOutlineHome />
                  </div>
                  <span>Cairo, Egypt</span>
                </li>
              </ul>
            </CardContent>
          </div>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{
              damping: 100,
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
            }}
            className={`md:order-0 -order-1 min-h-[400px] rounded-md bg-[url('/assets/istockphoto-956073060-612x612.jpg')] bg-cover bg-center bg-no-repeat p-6 pb-0 md:flex-1 md:p-0`}
          />
        </Card>
      </div>
    </section>
  );
}

export default Hero