"use client";
import { MotionDiv, MotionSpan } from "@/app/use-client";
import React from "react";

const AnimatedTextWord = ({ children }: { children: React.ReactNode }) => {
  const words = (children as string).split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <MotionDiv
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex overflow-hidden"
    >
      {words.map((word, i) => (
        <MotionSpan key={i} variants={child} className="mr-2">
          {word}
        </MotionSpan>
      ))}
    </MotionDiv>
  );
};

export default AnimatedTextWord;
