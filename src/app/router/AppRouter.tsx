import { Route, Routes } from "react-router";
import { ROUTES } from "../../shared/config";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { ArticleReadPage } from "../pages/article-read";
import { ArticleEditPage } from "../pages/article-edit";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ARTICLE_READ} element={<ArticleReadPage />} />
      <Route path={ROUTES.ARTICLE_EDIT} element={<ArticleEditPage />} />
    </Routes>
  );
};
