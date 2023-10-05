import React from 'react'
import { motion } from 'framer-motion';
interface propsTypes {
  label: string,
  href: string,
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
const MenuItem = ({label, href}: propsTypes) => {
  return (
    <motion.li variants={variants} whileHover={{scale: 1.1 }} whileTap={{ scale: 0.95 }} className='pointer-events-auto'>
      <a href={href} className='py-2 block'>{label}</a>
    </motion.li>
  )
}

export default MenuItem