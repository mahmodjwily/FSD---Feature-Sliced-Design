import { X } from "lucide-react";

import { Button, Input } from "@/shared/ui";

import { useArticleSearch } from "../modal";

export const ArticleSearch = () => {
  const { search, setSearch } = useArticleSearch();

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search"
        value={search}
        className="pr-10"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setSearch("")}
          className="absolute right-1 top-1/2 -translate-y-1/2 to-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};
