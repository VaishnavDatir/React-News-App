import ArticleCard from "../components/ArticleCard";
import CategoryTabs from "../components/CategoryTabs";
import HeroArticle from "../components/HeroArticle";
import { useNewsCategory } from "../hooks/useNews";

const Home = () => {
  const { data, isLoading, isError } = useNewsCategory("general");

  const articles = data?.articles || [];

  const hero = articles[0];
  const topSidebar = articles.slice(1, 5);
  const remaining = articles.slice(5);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-neutral-500 font-medium animate-pulse">
          Fetching latest news...
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
    <div className="space-y-12 sm:space-y-20 pb-20">
      <CategoryTabs />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="col-span-12 lg:col-span-8">
          <HeroArticle article={hero} />
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6 lg:border-l lg:border-neutral-100 lg:dark:border-neutral-900 lg:pl-8">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            Trending Now
          </h3>
          <div className="flex flex-col gap-6">
            {topSidebar.map((article, index) => (
              <ArticleCard
                key={article.url}
                article={article}
                index={index}
                variant="horizontal"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-900 pb-4">
          <h2 className="font-title text-2xl tracking-wide">Latest Updates</h2>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            {remaining.length} Articles Found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {remaining.map((article, index) => (
            <ArticleCard
              key={article.url}
              article={article}
              index={index + 5}
              variant="vertical"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
