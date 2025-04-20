import { axiosInstance } from "@/shared/api";

import { IArticle } from "../model";

export const getArticleApi = async (params: {
  _page?: number;
  _limit?: number;
  title_like?: string;
}) => {
  const response = await axiosInstance.get("articles", { params });

  return {
    data: response,
    total: response.headers["x-total-count"],
  };
};

export const addArticleApi = async (article: Omit<IArticle, "id">) => {
  const response = await axiosInstance.post<IArticle>("articles", article);

  return response.data;
};

export const editArticleApi = async (article: IArticle) => {
  const response = await axiosInstance.put<IArticle>(
    `articles/${article.id}`,
    article,
  );

  return response.data;
};

export const deleteArticleApi = async (id: string) => {
  await axiosInstance.delete(`articles/${id}`);
};
