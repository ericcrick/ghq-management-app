// Pagination.tsx

import Link from "next/link";
import PaginationDropdown from "./pagination-dropdown";

export default function Pagination() {
  return (
    <nav
      className="relative flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-xs text-gray-400">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">10</span> of{" "}
          <span className="font-medium">20</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <div className="flex items-center px-6 space-x-2 text-sm font-semibold">
          <span> Rows Per Page</span>
          <PaginationDropdown />
        </div>
        <Link
          href="#"
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Previous
        </Link>
        <Link
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Next
        </Link>
      </div>
    </nav>
  );
}

