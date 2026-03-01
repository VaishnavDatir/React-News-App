import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme";

// MUI Icons
import { Close, GitHub, Menu } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* MOBILE MENU BUTTON (LEFT) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-700 dark:text-neutral-200"
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>

        {/* SEARCH (DESKTOP ONLY LEFT) */}
        <div className="hidden md:flex items-center gap-6 text-neutral-700 dark:text-neutral-200">
          <button className="hover:opacity-70 transition">
            <SearchIcon fontSize="medium" />
          </button>
        </div>

        {/* CENTER LOGO - Responsive Scaling */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link
            to="/"
            className="font-title text-lg md:text-xl tracking-widest hover:scale-105 transition-transform duration-200 block"
          >
            THE REACT <span className="text-blue-600">NEWS</span>
          </Link>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3 sm:gap-6 text-neutral-700 dark:text-neutral-200">
          <button className="hidden sm:block hover:opacity-70 transition">
            <GitHub />
          </button>
          <span className="hidden sm:block opacity-30">|</span>
          <button onClick={toggleTheme} className="hover:opacity-70 transition">
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
          {/* Mobile Search Icon */}
          <button className="md:hidden hover:opacity-70 transition">
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex flex-col p-6 gap-4 font-title tracking-widest text-sm">
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex gap-4">
                <GitHub />
                <span>GITHUB</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
