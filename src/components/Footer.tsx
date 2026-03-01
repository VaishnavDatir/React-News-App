import { Code, GitHub, KeyboardArrowUp, Storage } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP: BRANDING & BIO */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="space-y-4 max-w-lg">
            <Link
              to="/"
              className="font-title text-3xl tracking-[0.25em] block hover:opacity-80 transition-opacity"
            >
              THE REACT <span className="text-blue-600">NEWS</span>
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-widest font-medium">
              Independent Journalism • Est. 2024 • Global Edition
            </p>
          </div>

          {/* DEVELOPER INFO BOX */}
          <div className="flex flex-col gap-4 bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 w-full md:w-auto">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
                <Code fontSize="inherit" className="text-blue-600" />
                <span>
                  Built by <span className="font-bold">Vaishnav Datir</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300">
                <Storage fontSize="inherit" className="text-blue-600" />
                <span>
                  Content aggregated via{" "}
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
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold uppercase bg-neutral-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:opacity-80 transition-all w-fit"
                >
                  <GitHub fontSize="inherit" /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: MINIMAL LEGAL & UTILITY */}
        <div className="pt-10 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase">
          <div className="flex items-center gap-6">
            <p>© {currentYear} THE REACT NEWS</p>
            <Link
              to="/privacy"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
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
