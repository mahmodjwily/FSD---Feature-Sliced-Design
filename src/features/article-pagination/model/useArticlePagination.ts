import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ARTICLES_LIMIT } from "@/constants";
import { AppDispatch, RootState } from "@/app/stores/store";
import { getArticles, setPage } from "@/entities/article/model";

export const useArticlePagination = () => {
  const dispatch: AppDispatch = useDispatch();

  const { page, total, isLoading, searchQuery } = useSelector(
    (state: RootState) => state.article,
  );

  const canNext = page < Math.ceil(total / ARTICLES_LIMIT);
  const canPrev = page > 1;

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) dispatch(setPage(newPage));
  };

  const onPrev = () => {
    if (canPrev) dispatch(setPage(page - 1));
  };

  const onNext = () => {
    if (canNext) dispatch(dispatch(setPage(page + 1)));
  };

  useEffect(() => {
    dispatch(getArticles({ page, searchQuery }));
  }, [dispatch, page, searchQuery]);

  return {
    page,
    canNext,
    canPrev,
    isLoading,
    total,
    handlePageChange,
    onPrev,
    onNext,
  };
};
