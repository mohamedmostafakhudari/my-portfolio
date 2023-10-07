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

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-primary py-24 md:pt-0">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat libero quam porro nam quo minus expedita esse
                  ducimus, ullam laboriosam praesentium tenetur itaque labore ad
                  nulla ipsam iure sunt accusamus.
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
            <div className="md:order-0 -order-1 p-6 pb-0 md:flex-1 md:p-0">
              <img
                src="https://unsplash.it/500/500"
                alt="it's me"
                className="w-full object-cover object-center"
              />
            </div>
          </Card>
        </div>
      </section>
  )
}

export default Hero