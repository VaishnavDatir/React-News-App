import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SmartImage from "../components/SmartImage";
import type { Article } from "../types/news";
import NotFound from "./NotFound";

const ArticleDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const article = location.state as Article;

  useEffect(() => {
    if (article) window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return <NotFound />;
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 py-10"
    >
      <title>The React News</title>

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-blue-600 transition-colors mb-8"
      >
        <ArrowBackIcon fontSize="inherit" /> Back
      </button>

      <div className="space-y-6">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-600 uppercase tracking-widest">
          <span>{article.source.name}</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-500">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>

        <h1 className="font-title text-4xl md:text-6xl leading-tight tracking-tight">
          {article.title}
        </h1>

        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <SmartImage
            src={article.urlToImage}
            alt={article.title}
            containerClassName="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-serif italic">
              {article.description}
            </p>
            <div className="text-lg text-neutral-800 dark:text-neutral-200 leading-loose">
              {article.content?.replace(/\[\+\d+ chars\]/g, "") ||
                "No further content available."}
            </div>

            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-all"
            >
              Read Full Report at {article.source.name}
            </a>
          </div>

          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-neutral-100 dark:border-neutral-900 lg:pl-10 pt-10 lg:pt-0">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Author
            </h4>
            <p className="font-bold">{article.author || "Editorial Staff"}</p>
          </aside>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleDetail;
