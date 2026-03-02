import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ArticleDetail from "../pages/ArticleDetail";
import CategoryPage from "../pages/CategoryPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SearchPage from "../pages/SearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} errorElement={<NotFound />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/article/:title" element={<ArticleDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
