import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getArticles } from "@/entities/article/model";
import { AppDispatch, RootState } from "@/app/stores/store";

export const useArticleList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { page, searchQuery, articles, isLoading } = useSelector(
    (state: RootState) => state.article,
  );

  useEffect(() => {
    dispatch(getArticles({ page, searchQuery }));
  }, [dispatch, page, searchQuery]);

  return { articles, isLoading };
};
