import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CategoryTabs from "../components/CategoryTabs";
import HeroArticle from "../components/HeroArticle";
import { useNewsCategory } from "../hooks/useNews"; // Your TanStack Query hook

const CategoryPage = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useNewsCategory(slug || "general");

  const articles = data?.articles || [];

  const renderMagazineFeed = () => {
    const sections = [];
    const articlesPerSection = 9;

    for (let i = 0; i < articles.length; i += articlesPerSection) {
      const chunk = articles.slice(i, i + articlesPerSection);
      const sectionHero = chunk[0];
      const sectionGrid = chunk.slice(1);

      sections.push(
        <section
          key={i}
          className="space-y-12 pt-16 border-t border-neutral-100 dark:border-neutral-900"
        >
          <HeroArticle article={sectionHero} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionGrid.map((art, idx) => (
              <ArticleCard
                key={art.url}
                article={art}
                index={idx}
                variant="horizontal"
              />
            ))}
          </div>
        </section>,
      );
    }
    return sections;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-neutral-500 font-medium animate-pulse">
          Fetching latest {slug} news...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">Oops!</h2>
        <p className="text-neutral-500">
          Failed to load news. Check your connection.
        </p>
      </div>
    );
  }

  return (
    <>
      <title>{`THE REACT NEWS | ${slug}`}</title>
      <div className="space-y-10 pb-20 px-4 sm:px-6 lg:px-8">
        <CategoryTabs />

        <header>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-title capitalize tracking-tight"
          >
            {slug?.replace("-", " ")}
          </motion.h1>
          <p className="text-neutral-500 mt-2">
            Latest updates and deep dives in {slug}.
          </p>
        </header>

        {articles.length > 0 ? (
          <div className="flex flex-col gap-24">{renderMagazineFeed()}</div>
        ) : (
          <div className="py-20 text-center text-neutral-500">
            No articles found in this category.
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
