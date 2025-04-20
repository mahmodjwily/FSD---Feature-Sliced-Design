import { toast } from "sonner";

import { ARTICLES_LIMIT } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IArticle } from ".";
import {
  addArticleApi,
  deleteArticleApi,
  editArticleApi,
  getArticleApi,
} from "../api/article-api";

export const getArticles = createAsyncThunk(
  "article/getArticles",
  async (
    {
      page = 1,
      limit = ARTICLES_LIMIT,
      searchQuery = "",
    }: { page?: number; limit?: number; searchQuery?: string },
    thunkApi,
  ) => {
    try {
      const response = await getArticleApi({
        _page: page,
        _limit: limit,
        title_like: searchQuery,
      });

      return { data: response.data.data, total: response.total };
    } catch (error: any) {
      toast.error(error.message);

      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const editArticle = createAsyncThunk(
  "article/editArticle",
  async (article: IArticle, thunkApi) => {
    try {
      const updatedArticle = await editArticleApi(article);

      toast.success("Article Updated");

      return updatedArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (article: Omit<IArticle, "id">, thunkApi) => {
    try {
      const newArticle = await addArticleApi(article);
      toast.success("Article Added");

      return newArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (id: string, thunkApi) => {
    try {
      await deleteArticleApi(id);
      toast.success("Article Deleted");
      return id;
    } catch (error: any) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
