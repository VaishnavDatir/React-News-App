import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Article } from "../types/news";
import SmartImage from "./SmartImage";

interface Props {
  article: Article;
}

const HeroArticle = ({ article }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.title)}`, {
      state: article,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
      className="cursor-pointer group flex flex-col"
    >
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-900">
        <SmartImage
          src={article.urlToImage ?? ""}
          alt={article.title}
          containerClassName="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] 
                             object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      <div className="mt-6 md:mt-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
            Featured
          </span>
          <span className="text-xs text-neutral-500 font-medium">
            {article.source.name} • 5 min read
          </span>
        </div>

        <h2
          className="font-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
                       leading-[1.1] tracking-tight group-hover:text-blue-600 
                       dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2"
        >
          {article.title}
        </h2>

        <p
          className="mt-4 md:mt-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 
                      line-clamp-2 md:line-clamp-none leading-relaxed"
        >
          {article.description}
        </p>

        <div className="mt-6 flex items-center text-sm font-bold border-b-2 border-current w-fit pb-1 group-hover:translate-x-2 transition-transform">
          READ FULL STORY
        </div>
      </div>
    </motion.div>
  );
};

export default HeroArticle;
