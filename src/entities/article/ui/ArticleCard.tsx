import { ReactNode } from "react";

import { Link } from "react-router";

import { IArticle } from "../model";

interface IArticleCardProps {
  article: IArticle;
  children?: ReactNode;
}
export const ArticleCard = ({ article, children }: IArticleCardProps) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold">
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h2>
      <p className="text-muted-foreground">{article.body.slice(0, 100)}</p>
      <div className="mt-4 flex justify-between items-center">{children}</div>
    </div>
  );
};
