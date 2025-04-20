import { IArticle } from "./types";
import articleReducer, { setPage, setSearchQuery } from "./articleSlice";
import { addArticle, deleteArticle, editArticle, getArticles } from "./thunks";

export type { IArticle };
export {
  articleReducer,
  setPage,
  setSearchQuery,
  getArticles,
  addArticle,
  deleteArticle,
  editArticle,
};
