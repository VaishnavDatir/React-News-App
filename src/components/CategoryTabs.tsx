import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { categories } from "../constants/categories";

const CategoryTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const active = categories.find((c) => c.path === pathname)?.id || "home";

  const handleCategoryClick = (
    id: string,
    path: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    navigate(path);

    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="top-16 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-6 sm:px-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-4 sm:py-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={(e) =>
                handleCategoryClick(category.id, category.path, e)
              }
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
