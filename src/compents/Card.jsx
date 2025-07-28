
import { styleEffect } from 'motion'
import {motion} from "motion/react"
import React from 'react'

const Card = ({style,text,image,containerRef}) => {
  return image &&!text ?(
  <motion.img
   className='absolute w-15 cursor-grab' 
   src={image} alt=""
    style={style}
    whileHover = {{ scale:1.05}}
    drag
    dragConstraints = {containerRef}
    dragElastic={1}
    /> ):(
    <motion.div 
     whileHover = {{ scale:1.05}}
    drag
    dragConstraints = {containerRef}
    dragElastic={1}
    className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab ' 
    style={style}>
        {text}
    </motion.div>
  )
}

export default Card