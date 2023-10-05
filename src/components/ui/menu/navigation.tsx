import React from 'react'
import { motion } from 'framer-motion';
import MenuItem from '@/components/ui/menu/menu-item';
const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
}

const Navigation = () => {
  return (
    <motion.ul variants={variants} className='p-[25px] absolute top-[100px] w-[230px]'>
      {navItems.map(({label, href}) => (
        <MenuItem key={label} label={label} href={href} />
      ))}
    </motion.ul>
  )
}

export default Navigation