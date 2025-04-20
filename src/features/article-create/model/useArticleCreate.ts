import { useDispatch } from "react-redux";

import { AppDispatch } from "@/app/stores/store";
import { addArticle, IArticle } from "@/entities/article/model";

export const useArticleCreate = () => {
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (formData: Omit<IArticle, "id">) => {
    const { body, title } = formData;
    dispatch(addArticle({ title, body }));
  };

  return { onSubmit };
};
