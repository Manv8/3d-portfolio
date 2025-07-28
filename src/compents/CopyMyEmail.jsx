import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';
const CopyMyEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = "08manveder@gmail.com";

    const copyToCLipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }
    return (
        
        <motion.button
        whileHover={{y:-5}}
        onClick={copyToCLipboard} className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden '>
            <AnimatePresence mode='wait'>
            {copied ? (<motion.p
            key="copied"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className='flex items-center justify-center gap-2'>
                <img className='w-5' src="assets/copy-done.svg" alt="copydone" />
                Email has Copied
            </motion.p>) :
                (<motion.p 
                       key="cop"
                initial={{ opacity: 0 }}
                animate={{ opacity:1  }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1}}
                className="flex items-center justify-center gap-2">
                    <img className='w-5' src="assets/copy.svg" alt="copyIcon" />
                    Copy my Email
                </motion.p>)}
                </AnimatePresence>
        </motion.button >
    )
}

export default CopyMyEmail