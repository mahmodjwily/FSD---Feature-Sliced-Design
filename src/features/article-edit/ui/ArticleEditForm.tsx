/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { IArticle } from "@/entities/article/model";
import { Button, Input, Textarea } from "@/shared/ui";

import { useEditArticle } from "../model";

const defaultValues = { id: "", body: "", title: "" };

export const ArticleEditForm = () => {
  const { control, handleSubmit, reset } = useForm<IArticle>({
    defaultValues,
  });

  const { onSubmit, article, isLoading } = useEditArticle();

  useEffect(() => {
    if (article) {
      reset(article);
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="p-4">
        <Loader />
      </div>
    );
  }

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
        Edit
      </Button>
    </form>
  );
};
