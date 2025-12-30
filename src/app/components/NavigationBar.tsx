"use client";

import Image from "next/image";
import navIcon from "@/../public/icons/nav-phone.svg";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavigationBar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="flex space-x-4 lg:hidden">
      <button
        className="border border-black py-3 px-1 rounded-lg hover:bg-gray-100 transition cursor-pointer relative"
        onClick={() => setActive(!active)}
      >
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={navIcon} alt="Menu" width={24} height={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </nav>
  );
};

export default NavigationBar;
