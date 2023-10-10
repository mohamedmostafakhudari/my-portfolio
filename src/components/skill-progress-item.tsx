import React, { useEffect } from 'react'
import { Progress } from "@/components/ui/progress";
import { MotionValue, animate, progress, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const SkillProgressItem = ({title, value, progressAnimation} : {
  title: string;
  value: number;
  progressAnimation: boolean;
}) => {
  const [currentPercentage, setCurrentPercentage] = React.useState(0);
   const count = useMotionValue(0);
   const rounded : MotionValue<number> = useTransform(count, (latest) => Math.round(latest));
   useMotionValueEvent(count, "change", (latest) => {
    setCurrentPercentage(latest);
  });
   useEffect(() => {
     const controls = animate(count, value, {
       duration: 2,
       ease: "easeInOut",
     });
     
       if (progressAnimation) {
        controls.play();
       } else {
         controls.pause();
       }
    
     return controls.stop;
   }, [progressAnimation, value, count]);
  return (
    <li>
      {title} <motion.span>{rounded}</motion.span>%
      <Progress value={currentPercentage} className="mt-1" />
    </li>
  );
}

export default SkillProgressItem