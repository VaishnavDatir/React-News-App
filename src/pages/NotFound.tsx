import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 text-center">
      <title>THE REACT NEWS | 404</title>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="relative flex justify-center mb-8">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="text-neutral-100 dark:text-neutral-900 absolute -z-10 top-1/2 -translate-y-1/2"
          >
            <ErrorOutlineIcon sx={{ fontSize: 240 }} />
          </motion.div>
          <h1 className="font-title text-[120px] md:text-[180px] leading-none tracking-tighter opacity-10 dark:opacity-20 select-none">
            404
          </h1>
        </div>

        <div className="space-y-6">
          <h2 className="font-title text-3xl md:text-5xl tracking-tight">
            Headline <span className="text-blue-600 italic">Missing</span>
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed text-sm md:text-base">
            The story you are looking for has been archived, moved, or never
            existed. Check the URL or return to our homepage for the latest
            updates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-blue-600/10"
            >
              <ArrowBackIcon sx={{ fontSize: 16 }} /> Back to Home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3.5 border border-neutral-200 dark:border-neutral-800 font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
            >
              Try Reloading
            </button>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 pt-10 border-t border-neutral-100 dark:border-neutral-900 w-full max-w-xs opacity-50">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
          The React News • Error Protocol 404
        </p>
      </div>
    </div>
  );
};

export default NotFound;
