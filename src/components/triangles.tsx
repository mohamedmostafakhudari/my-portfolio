"use client";
import React from 'react'
import { motion } from 'framer-motion';

const Triangles = ({reverse}: {reverse ?: boolean}) => {
  const currentViewWidth = +(typeof window !== "undefined" && window.innerWidth);
  const randomTriPos = Array.from(new Array(10).fill(0), (x) =>
         Math.floor(Math.random() * currentViewWidth),
       );
  return (
    <div>
      {randomTriPos.map((x, i) => {
        return (
          <motion.div
            key={i}
            initial={
              reverse
                ? { left: -60, scale: Math.floor(Math.random()) }
                : { right: -60, scale: Math.floor(Math.random()) }
            }
            animate={
              reverse
                ? { left: 1024, scale: Math.floor(Math.random() * 4) }
                : { right: 1024, scale: Math.floor(Math.random() * 4) }
            }
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6,
            }}
            className="absolute bottom-0 top-0 w-[64px] text-white/5"
          >
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "linear",
              }}
              viewBox="0 0 8 8"
            >
              <path d="M2,8 L5,2 L8,8 l-6,0" fill="currentColor"></path>
            </motion.svg>
          </motion.div>
        );})}
      </div>
  )
}

export default Triangles