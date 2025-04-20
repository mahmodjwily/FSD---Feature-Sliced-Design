import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/app/stores/store";
import { editArticle, IArticle } from "@/entities/article/model";

export const useEditArticle = () => {
  const { id } = useParams<{ id: string }>();

  const { articles } = useSelector((state: RootState) => state.article);
  const article = articles.find((a) => a.id === id);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formData: IArticle) => {
    dispatch(editArticle({ ...formData, id: id ?? "" }));
    toast.success("Change Saved");
    navigate("/");
  };

  return { isLoading: !article, article, onSubmit };
};
