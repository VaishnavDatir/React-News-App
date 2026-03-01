import React from "react";
import ArticleCard from "../components/ArticleCard";
import CategoryTabs from "../components/CategoryTabs";
import HeroArticle from "../components/HeroArticle";
import { dummyNews } from "../data/dummyNews";

const Home: React.FC = () => {
  const articles = dummyNews.articles;

  // Visual layout strategy:
  const hero = articles[0];
  const topSidebar = articles.slice(1, 5); // 4 articles beside the hero
  const remaining = articles.slice(5); // The rest in a balanced grid

  return (
    <div className="space-y-12 sm:space-y-20 pb-20">
      <CategoryTabs />

      {/* HERO SECTION: Focus & Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Feature */}
        <div className="col-span-12 lg:col-span-8">
          <HeroArticle article={hero} />
        </div>

        {/* Sidebar: Trending / Top Stories */}
        <div className="col-span-12 lg:col-span-4 border-l border-neutral-100 dark:border-neutral-900 lg:pl-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-neutral-500">
              Trending Stories
            </h3>
          </div>

          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
            {topSidebar.map((article, index) => (
              <ArticleCard key={article.url} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* BELOW FOLD GRID */}
      <section className="space-y-10">
        <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-900 pb-4">
          <h2 className="font-title text-2xl">Latest Updates</h2>
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            {remaining.length} Articles Found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {remaining.map((article, index) => (
            <ArticleCard
              key={article.url}
              article={article}
              index={index}
              variant="vertical" // THE MAGIC SWITCH
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
