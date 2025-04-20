import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";

import { RootState } from "@/app/stores/store";
import { Button, Input, Textarea } from "@/shared/ui";

import { useArticleCreate } from "../model";

interface ArticleFormData {
  title: string;
  body: string;
}
export const ArticleCreateForm = () => {
  const { isLoading } = useSelector((state: RootState) => state.article);

  const { control, handleSubmit } = useForm<ArticleFormData>({
    defaultValues: { body: "", title: "" },
  });

  const { onSubmit } = useArticleCreate();

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            disabled={isLoading}
            id={field.name}
            placeholder="Title"
            {...field}
          />
        )}
      />
      <Controller
        name="body"
        control={control}
        render={({ field }) => (
          <Textarea
            disabled={isLoading}
            id={field.name}
            placeholder="body"
            {...field}
          />
        )}
      />
      <Button disabled={isLoading} type="submit">
        Create
      </Button>
    </form>
  );
};
