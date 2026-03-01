import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6 text-neutral-400">
          <ErrorOutlineIcon sx={{ fontSize: 80 }} />
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-bold tracking-tight mb-4">404</h1>

        {/* Message */}
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
