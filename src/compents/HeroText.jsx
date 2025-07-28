import React from 'react'
import { FlipWords } from './FlipWord'
import { motion } from 'motion/react';
import { Cover } from '../compents/Cover'

const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"];
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            {/* desktop view */}
            <div className='flex-col hidden md:flex c-space '>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className='text-4xl font-medium text-neutral-300'>Hi, I'm Manvender </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className='text-5xl font-medium text-neutral-300'>
                    A Developer <br /> Dedicated to Crafting
                </motion.p>
                {/* word changing */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <FlipWords
                        words={words}
                        className="font-black text-white text-8xl"
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className='text-4xl font-medium text-neutral-300'> Web Solutions</motion.p>
            </div>

            {/* mobile view */}
            <div className='flex flex-col space-y-6 md:hidden ' >
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className='text-4xl font-medium '>
                    Hi,I'm Manvender
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className='text-5xl font-black text-neutral-500'>Building</motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <FlipWords
                        words={words}
                        className="font-black text-white text-7xl"
                    /> </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className='text-4xl font-medium text-neutral-500 >Web Applications'> Web-Application</motion.p>
            </div>
        </div>
    )
}

export default HeroText