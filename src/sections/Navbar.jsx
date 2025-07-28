import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Added AnimatePresence
import { mySocials } from "../constants";
import { AnimatedTooltip } from "../compents/animated-tooltip";

function Navigation() {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <li>
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link" href="#project">
          Projects
        </a>
      </li>
      <li>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-primary/40 backdrop-blur-lg shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-3">
          {/* Logo / Brand */}
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            Manvender Singh
          </a>


     <div className=" flex gap-3">
      <AnimatedTooltip>
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
        </AnimatedTooltip>
      </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex items-center justify-center focus:outline-none"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block w-full bg-primary/60 text-center backdrop-blur-sm sm:hidden overflow-x-hidden shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-4 pb-4">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
