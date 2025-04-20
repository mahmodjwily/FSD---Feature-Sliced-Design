export interface IArticle {
  id: string;
  title: string;
  body: string;
}

export interface IArticleState {
  isLoading: boolean;
  articles: IArticle[];
  total: number;
  page: number;
  searchQuery: string;
}
