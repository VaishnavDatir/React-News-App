import { motion } from "framer-motion";
import { useState } from "react";
import { categories } from "../constants/categories";
const CategoryTabs = () => {
  const [active, setActive] = useState("top");

  const handleCategoryClick = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setActive(id);

    // Smoothly center the clicked tab in the scroll container
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    // Changed top-4 to sticky top-16 to sit under the Navbar
    <div className="top-16 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto relative">
        {/* Gradients ... */}

        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 px-6 sm:px-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-4 sm:py-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={(e) => handleCategoryClick(category.id, e)}
              className={`
                relative px-1 py-1 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-200
                ${
                  active === category.id
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-400"
                }
              `}
            >
              {category.label}
              {active === category.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-blue-600 dark:bg-blue-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryTabs;
