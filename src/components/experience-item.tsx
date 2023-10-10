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
    <div
      className={cn(
        "isolate flex w-full flex-col items-center md:w-auto md:flex-row",
        startDate.getFullYear() === endDate?.getFullYear() && "md:ml-6",
      )}
    >
      <motion.div
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          amount: 0.5,
        }}
        className={cn(
          "relative w-full flex-1 place-items-center border-b-4 border-white/30 pb-12 text-center",
          "md:mr-12 md:w-auto md:border-b-0 md:border-r-4 md:px-6 md:py-[8rem] md:pr-10 md:text-left",
        )}
      >
        {formattedDate} {!endDate && "to present"}
        {/* bullet */}
        <div
          className={cn(
            "absolute right-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-[calc(50%_-_2px)] rounded-full bg-white",
            "md:right-0 md:top-1/2 md:translate-x-[6px]",
          )}
        >
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
      </motion.div>
      <motion.div
        initial={{
          y: 70,
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          amount: 0.5,
          delay: 0.3,
        }}
        className={cn(
          "group relative -z-10 h-[300px] w-full max-w-[20rem] items-center space-y-6 overflow-x-hidden overflow-y-clip bg-transparent",
          "md:w-auto md:min-w-[42ch] md:max-w-none",
        )}
      >
        <div
          data-card="inner"
          className="relative h-full w-full duration-300 ease-in-out group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            data-card="front"
            className="absolute grid min-h-full w-full place-items-center rounded-lg bg-background p-4 text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <TypographyH3>{title}</TypographyH3>
          </div>
          <div
            data-card="back"
            className="absolute min-h-full w-full overflow-hidden rounded-lg bg-white p-4 text-sm text-background [transform:rotateY(180deg)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceItem