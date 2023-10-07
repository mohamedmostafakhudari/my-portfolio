import React from 'react'
import { MotionDiv } from '@/app/use-client';
import { TypographyH3 } from '@/components/ui/typography';
interface ExperienceProps {
  startDate: Date;
  endDate?: Date;
  title: string;
  children: string;
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
    <div className="flex items-center">
      <div className="relative mr-12 grid min-h-[160px] flex-1 place-items-center border-r-4 border-white/30 px-6 py-20">
        {formattedDate} {!endDate && 'to present'}
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
      <div className="grid flex-1 items-center space-y-6 max-w-[35ch]">
        <TypographyH3>{title}</TypographyH3>
        <p>
          {children}
        </p>
      </div>
    </div>
  );
}

export default ExperienceItem