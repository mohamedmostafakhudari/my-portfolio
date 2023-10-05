import React, { ComponentType } from 'react'
import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
interface IconProps {
  className?: string,
}
interface propTypes {
  IconComp: ComponentType<IconProps>,
  href: string,
  className?: string,
  variants?: Variants,
}
function Icon ({IconComp, href, className, ...props}: propTypes) {
  return (
    <motion.a href={href} className={cn('block w-6 h-6', className)} {...props}>
      <IconComp className={"w-full h-full"}/>
    </motion.a>
  )
}

export default Icon