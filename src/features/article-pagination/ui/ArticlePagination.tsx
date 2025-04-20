import { ARTICLES_LIMIT } from "@/constants";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui";

import { useArticlePagination } from "../model";

export const ArticlePagination = () => {
  const { page, canNext, canPrev, handlePageChange, onNext, onPrev, total } =
    useArticlePagination();
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={onPrev}
            className={!canPrev ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        {Array.from(
          { length: Math.ceil(total / ARTICLES_LIMIT) },
          (_, index) => (
            <PaginationItem
              key={index}
              className="px-4 text-sm to-muted-foreground"
              onClick={() => handlePageChange(index + 1)}
            >
              <PaginationLink isActive={page === index + 1}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            onClick={onNext}
            className={!canNext ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
