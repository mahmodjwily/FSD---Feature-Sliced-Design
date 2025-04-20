import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useDebounce } from "@/shared/lib";
import { AppDispatch, RootState } from "@/app/stores/store";
import { getArticles, setSearchQuery } from "@/entities/article/model";

export const useArticleSearch = () => {
  const dispatch: AppDispatch = useDispatch();

  const globalSearch = useSelector(
    (state: RootState) => state.article.searchQuery,
  );

  const [search, setSearch] = useState(globalSearch);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearch));
    dispatch(getArticles({ searchQuery: debouncedSearch }));
  }, [dispatch, debouncedSearch]);

  return {
    search,
    setSearch,
  };
};
