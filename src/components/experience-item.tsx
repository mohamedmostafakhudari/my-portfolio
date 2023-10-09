"use client";
import React from 'react'
import { MotionDiv } from '@/app/use-client';
import { TypographyH3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
interface ExperienceProps {
  startDate: Date;
  endDate?: Date;
  title: string;
  children: React.ReactNode;
}
const ExperienceItem = ({startDate, endDate, title, children}: ExperienceProps) => {
  const options = {month: 'long', year: 'numeric'} as const;
  const dateTimeFormat = new Intl.DateTimeFormat('en', options);
  let formattedDate = null;
  if (endDate) {
    formattedDate = dateTimeFormat
      .formatRange(startDate, endDate)
      .replace("–", "to");
  } else {
    formattedDate = dateTimeFormat.format(startDate);
  }
  return (
    <div className={cn("flex items-center", startDate.getFullYear() === endDate?.getFullYear() && "ml-6")}>
      <div className="relative mr-12 min-h-[160px] flex-1 place-items-center border-r-4 border-white/30 px-6 py-[8rem]">
        {formattedDate} {!endDate && "to present"}
        {/* bullet */}
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-[6px] rounded-full bg-white">
          <MotionDiv
            initial={{
              opacity: 0,
              x: "-50%",
              y: "-50%",
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
            }}
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
          ></MotionDiv>
        </div>
      </div>
      <div className="group h-[300px] min-w-[42ch] items-center space-y-6 overflow-x-hidden overflow-y-clip bg-transparent">
        <motion.div
          data-card='inner'
          className="relative h-full w-full duration-300 ease-in-out group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            data-card="front"
            className="absolute p-4 min-h-full w-full bg-background grid place-items-center rounded-lg text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <TypographyH3>{title}</TypographyH3>
          </div>
          <div
            data-card='back'
            className="absolute p-4 min-h-full text-sm w-full bg-white text-background rounded-lg overflow-hidden [transform:rotateY(180deg)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExperienceItem