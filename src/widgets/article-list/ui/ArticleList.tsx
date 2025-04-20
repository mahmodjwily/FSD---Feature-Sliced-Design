import { Link } from "react-router";
import { Loader } from "lucide-react";
import { useSelector } from "react-redux";

import { Button } from "@/shared/ui";
import { RootState } from "@/app/stores/store";
import { ArticleCard } from "@/entities/article/ui";
import { DeleteArticleButton } from "@/features/article-delete/ui";

import { useArticleList } from "../model";

export const ArticleList = () => {
  const { articles, isLoading } = useArticleList();

  const { user } = useSelector((state: RootState) => state.user);

  if (isLoading) return <Loader />;

  return (
    <div>
      {!articles.length ? (
        <p>No articles</p>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article}>
              {user?.id && (
                <>
                  <Link to={`/articles/${article.id}`}>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <DeleteArticleButton id={article.id} />
                </>
              )}
            </ArticleCard>
          ))}
        </div>
      )}
    </div>
  );
};
