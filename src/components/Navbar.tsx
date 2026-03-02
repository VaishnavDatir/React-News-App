import { AnimatePresence, motion } from "framer-motion";
import React, { type FormEvent, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTheme } from "../context/useTheme";

// MUI Icons
import { Close, GitHub, Menu } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { config } from "../config/env.config";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("title") || "",
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?title=${encodeURIComponent(searchValue.trim())}`);
      setIsSearchOpen(false);
      setSearchValue("");
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-700 dark:text-neutral-200 p-1"
          >
            {isOpen ? <Close /> : <Menu />}
          </button>

          <div className="hidden md:flex items-center">
            <AnimatePresence mode="wait">
              {!isSearchOpen ? (
                <motion.button
                  key="search-btn"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="text-neutral-700 dark:text-neutral-200 hover:text-blue-600 transition-colors"
                >
                  <SearchIcon />
                </motion.button>
              ) : (
                <motion.form
                  key="search-form"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 300, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearchSubmit}
                  className="flex items-center relative"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search headlines..."
                    className="w-full bg-neutral-100 dark:bg-neutral-900 border-none rounded-full py-1.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-blue-600/20 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchValue("");
                    }}
                    className="absolute right-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-white"
                  >
                    <Close sx={{ fontSize: 16 }} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            to="/"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchValue("");
            }}
            className="font-title text-lg md:text-xl tracking-[0.2em] hover:scale-105 transition-transform duration-200 block whitespace-nowrap"
          >
            THE REACT <span className="text-blue-600">NEWS</span>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3 sm:gap-6 flex-1 text-neutral-700 dark:text-neutral-200">
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block hover:text-blue-600 transition-colors"
          >
            <GitHub />
          </a>
          <span className="hidden sm:block opacity-20">|</span>
          <button
            onClick={toggleTheme}
            className="hover:text-blue-600 transition-colors p-2"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </motion.div>
          </button>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden hover:text-blue-600 transition-colors"
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black"
          >
            <form onSubmit={handleSearchSubmit} className="p-4">
              <input
                type="text"
                autoFocus
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-lg px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-600"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
