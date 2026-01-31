"use client";

import { Icon } from "@iconify/react";

interface PaginationProps {
  page: number;
  totalPages: number;
  totalItems?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  page,
  totalPages,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (page > 4) pages.push("...");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (page < totalPages - 3) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
      {totalItems !== undefined && (
        <p className="text-sm text-gray-500">
          Halaman <span className="font-medium">{page}</span> dari{" "}
          <span className="font-medium">{totalPages}</span> • Total{" "}
          <span className="font-medium">{totalItems}</span> data
        </p>
      )}

      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg border text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-gray-50 transition"
        >
          <Icon icon="solar:arrow-left-bold" className="w-4 h-4" />
          Prev
        </button>

        {/* Pages */}
        {getPages().map((p, i) =>
          p === "..." ? (
            <span
              key={`dots-${i}`}
              className="px-2 text-gray-400 select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p as number)}
              className={`min-w-[36px] h-9 px-3 rounded-lg text-sm border transition
                ${
                  page === p
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "hover:bg-gray-50"
                }
              `}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg border text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-gray-50 transition"
        >
          Next
          <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
