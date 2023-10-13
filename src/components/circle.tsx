import React from 'react'
import { motion } from 'framer-motion';

const Circle = ({i, reverse} : {i : number; reverse ?: boolean}) => {
  return (
    <motion.div
      initial={
        reverse
          ? { rotate: 0, y: -300, x: -300 }
          : { rotate: 360, y: -300, x: -300 }
      }
      animate={
        reverse
          ? { rotate: 360, y: -300, x: -300 }
          : { rotate: 0, y: -300, x: -300 }
      }
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      }}
      className="absolute top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1rem] border-sky-600/10 border-l-transparent"
      style={{left: i * 600}}
    ></motion.div>
  );
}

export default Circle