import BrokenImageIcon from "@mui/icons-material/BrokenImage"; // Added for a visual cue
import { motion } from "framer-motion";
import { useState } from "react";

interface SmartImageProps {
  src: string | null;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
}

const SmartImage = ({
  src,
  alt,
  containerClassName = "",
  imageClassName = "",
  aspectRatio = "video",
}: SmartImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const showFallback = hasError || !src;

  // Aspect ratio map to prevent Layout Shift
  const ratioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 
                 ${ratioClasses[aspectRatio]} ${containerClassName}`}
    >
      {/* 1. Better Fallback: Modern & Editorial */}
      {showFallback && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center
                     bg-neutral-200 dark:bg-neutral-800 text-neutral-500 p-4"
        >
          <BrokenImageIcon className="opacity-20 mb-2" fontSize="large" />
          <span className="font-title text-[10px] uppercase tracking-tighter opacity-40">
            Image Unavailable
          </span>
        </div>
      )}

      {/* 2. Skeleton: Shimmer effect instead of just pulse */}
      {!isLoaded && !showFallback && (
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent"
          />
        </div>
      )}

      {/* 3. The Image: High-performance loading */}
      {!showFallback && (
        <motion.img
          src={src ?? ""}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full h-full object-cover transition-transform duration-700 
                     ${isLoaded ? "blur-0" : "blur-sm"} ${imageClassName}`}
        />
      )}
    </div>
  );
};

export default SmartImage;
