import React from "react";

export default function Pagination({
  handleNextPage,
  handlePrevPage,
  currentPage,
  TOTAL_PAGES,
}) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary me-5"
          onClick={handlePrevPage}
          disabled={currentPage === 1}>
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage == TOTAL_PAGES}>
          Next
        </button>
      </div>
    </>
  );
}
