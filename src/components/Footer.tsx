import {
  Code,
  GitHub,
  KeyboardArrowUp,
  Storage,
  Terminal,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { config } from "../config/env.config";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-lg">
            <Link
              to="/"
              className="font-title text-3xl tracking-[0.25em] block hover:opacity-80 transition-opacity"
            >
              THE REACT <span className="text-blue-600">NEWS</span>
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-[0.3em] font-bold">
              Typescript Edition
            </p>
          </div>

          {/* DEVELOPER & TECH STACK BOX */}
          <div className="flex flex-col gap-6 bg-neutral-50 dark:bg-neutral-900/40 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 w-full md:w-auto min-w-[340px]">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2">
                Build Information
              </h5>

              <div className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                <Code fontSize="inherit" className="text-blue-600" />
                <span>
                  Developed by{" "}
                  <span className="font-bold">{config.devName}</span>
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                <Terminal fontSize="inherit" className="text-blue-600 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>
                    Stack: <span className="font-bold">React 19 + Vite</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase">
                    TypeScript • Tailwind • Framer Motion
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                <Storage fontSize="inherit" className="text-blue-600" />
                <span>
                  Data:{" "}
                  <a
                    href="https://newsapi.org"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-blue-600 transition-colors"
                  >
                    NewsAPI.org
                  </a>
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={config.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-fit"
                >
                  <GitHub fontSize="inherit" /> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase">
          <div className="flex items-center gap-6">
            <p className="opacity-60">© {currentYear} THE REACT NEWS</p>
            <Link
              to="/privacy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors group"
          >
            Back to Top
            <KeyboardArrowUp
              fontSize="small"
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
