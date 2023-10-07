"use client";
import { MotionDiv, MotionSpan } from "@/app/use-client";
import { cn } from "@/lib/utils";
import React from "react";
import { Variants, motion } from 'framer-motion';

const AnimatedTextWord = ({
  className,
  children,
  wordByWord = true,
  containerVariants,
  childVariants,
  staggerChildren, 
  delayChildren
}: {
  className?: string;
  containerVariants?: Variants;
  childVariants?: Variants;
  wordByWord?: Boolean;
  staggerChildren?: number;
  delayChildren?: number;
  children: React.ReactNode;
}) => {
  const letters = (children as string).split('');
  const words = (children as string).split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren || 0.4, delayChildren: delayChildren || 0 },
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
    <motion.div
      variants={containerVariants || container}
      initial="hidden"
      animate="visible"
      className={cn("flex overflow-hidden", className)}
    >
      {wordByWord
        ? words.map((word, i) => (
            <motion.span
              key={i}
              variants={childVariants || child}
              className="mr-2"
            >
              {word}
            </motion.span>
          ))
        : letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={childVariants || child}
              className="mr-2"
            >
              {letter}
            </motion.span>
          ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
