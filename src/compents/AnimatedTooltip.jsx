"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"; // ✅ make sure you're importing from 'framer-motion'

const items = [
  {
    name: "Gmail",
    href: "mailto:08manvender@gmail.com",
    icon: "/assets/socials/gmail.svg",
    designation: "Email",
  },
  {
    name: "Github",
    href: "https://github.com/Manv8",
    icon: "/assets/socials/github100.svg",
    designation: "Developer",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/manvender-singhh/",
    icon: "/assets/socials/linkedIn.svg",
    designation: "Professional Network",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/manvendra_.08/",
    icon: "/assets/socials/instagram.svg",
    designation: "Socials",
  },
];

export const AnimatedTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className="flex gap-1">
      {items.map((item, idx) => (
        <div
          className="group relative"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                key={`tooltip-${item.name}`}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className=" absolute -bottom-15 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center  bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                {item.designation && (
                  <div className="text-xs text-white">{item.designation}</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.icon}
              alt={item.name}
              className="h-8 w-8  rounded-full  object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
