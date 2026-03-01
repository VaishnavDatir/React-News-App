import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
// import ArticleDetail from "../pages/ArticleDetail";
// import Home from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/article/:slug" element={<ArticleDetail />} /> */}
        <Route path="*" element={<NotFound />} errorElement />
      </Route>
    </Routes>
  );
};
