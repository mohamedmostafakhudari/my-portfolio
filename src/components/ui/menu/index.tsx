import { MotionDiv } from '@/app/use-client'
import { useDimensions } from '@/lib/hooks/use-dimensions'
import { Cycle, Variants } from 'framer-motion'
import React, { RefObject, useRef } from 'react'
import Navigation from "@/components/ui/menu/navigation";
import { MenuToggle } from "@/components/ui/menu/menu-toggle";
import { cn } from '@/lib/utils';
interface propTypes {
  isOpen: boolean,
  toggleOpen: Cycle,
  className: string,
}
const sidebarVariants:Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}
const Menu = ({isOpen, toggleOpen, className}: propTypes) => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <MotionDiv className={cn('absolute top-0 pointer-events-none left-0 bottom-0 w-[300px] text-slate-900', className)} initial={false} animate={isOpen ? "open": "closed"}
    custom={height} ref={containerRef}>
      <MotionDiv className='absolute top-0 left-0 bottom-0 w-[300px] bg-white' variants={sidebarVariants}/>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </MotionDiv>
  )
}

export default Menu