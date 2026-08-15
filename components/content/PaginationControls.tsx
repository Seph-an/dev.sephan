"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationControlsProps = {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationControlsProps) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null;

  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row"
    >
      <p className="text-sm text-white/60" aria-live="polite">
        Showing {firstItem}–{lastItem} of {totalItems}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex min-h-11 items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Previous</span>
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`h-11 min-w-11 rounded-xl border px-3 text-sm font-semibold transition ${
              page === currentPage
                ? "border-emerald-400 bg-emerald-500 text-slate-950"
                : "border-white/10 bg-white/5 text-white hover:border-emerald-400/40 hover:bg-white/10"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex min-h-11 items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Go to next page"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </nav>
  );
}
