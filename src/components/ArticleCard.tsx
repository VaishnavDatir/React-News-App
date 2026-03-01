import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Article } from "../types/news";
import SmartImage from "./SmartImage";

interface ArticleCardProps {
  article: Article;
  index: number;
  variant?: "horizontal" | "vertical";
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  index,
  variant = "horizontal",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.url)}`, {
      state: article,
    });
  };

  // Vertical = Grid style (Top image, bottom text)
  // Horizontal = Sidebar style (Left image, right text)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={handleClick}
      className={`group cursor-pointer flex gap-4 ${
        variant === "vertical" ? "flex-col" : "flex-row items-center"
      }`}
    >
      <div
        className={`overflow-hidden rounded-xl flex-shrink-0 ${
          variant === "vertical"
            ? "w-full aspect-video"
            : "w-24 h-20 sm:w-32 sm:h-24"
        }`}
      >
        <SmartImage
          src={article.urlToImage}
          alt={article.title}
          containerClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
          <span className="text-blue-600 dark:text-blue-400">
            {article.source.name}
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span className="text-neutral-500">
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString()
              : "Recent"}
          </span>
        </div>

        <h3
          className={`font-body font-bold leading-tight group-hover:text-blue-600 transition-colors ${
            variant === "vertical"
              ? "text-lg line-clamp-2"
              : "text-sm line-clamp-3"
          }`}
        >
          {article.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
