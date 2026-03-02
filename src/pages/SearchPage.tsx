import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CategoryTabs from "../components/CategoryTabs";
import { useNewsSearch } from "../hooks/useNews";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("title") || "";
  const { data, isLoading, isError } = useNewsSearch(query);

  const results = data?.articles || [];

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-neutral-500 font-medium animate-pulse">
          Fetching latest {query} news...
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
    <div className="space-y-10 pb-20">
      <title>THE REACT NEWS | Search: {query}</title>

      <CategoryTabs />

      <header className="px-6 space-y-2">
        <h1 className="text-4xl font-title tracking-tight">
          Search Results for <span className="text-blue-600">"{query}"</span>
        </h1>
        <p className="text-neutral-500 text-sm italic">
          Found {results.length} articles matching your search.
        </p>
      </header>

      {results.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6"
        >
          {results.map((article, index) => (
            <ArticleCard
              key={article.url}
              article={article}
              index={index}
              variant="vertical"
            />
          ))}
        </motion.div>
      ) : (
        <div className="py-20 text-center space-y-4">
          <div className="text-6xl text-neutral-200 dark:text-neutral-800 font-title">
            :(
          </div>
          <p className="text-neutral-500">
            We couldn't find anything matching that search.
          </p>
        </div>
      )}

      {query && (
        <button
          onClick={() => (window.location.href = "/")}
          className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:underline"
        >
          Clear Search & Return Home
        </button>
      )}
    </div>
  );
};

export default SearchPage;
