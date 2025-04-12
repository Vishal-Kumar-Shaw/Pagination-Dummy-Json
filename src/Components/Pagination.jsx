import { use, useEffect, useState } from "react";

export default Pagination = ({ totalProducts, setStart, setEnd }) => {
  const PRODUCT_PER_PAGE = 10;
  const NO_OF_PAGES = Math.ceil(totalProducts / PRODUCT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const handleStartChange = (n) => {
    setStart(n * PRODUCT_PER_PAGE + 1);
    setEnd((n + 1) * PRODUCT_PER_PAGE);
    setCurrentPage(n);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      handleStartChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < NO_OF_PAGES - 1) {
      handleStartChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={currentPage == 0}>
        ⏮️
      </button>
      {[...Array(NO_OF_PAGES).keys()].map((n) => (
        <button
          key={n}
          className={`page-numbers ${currentPage === n ? "active" : ""}`}
          onClick={() => handleStartChange(n)}
        >
          {n}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage == NO_OF_PAGES - 1}>
        ⏭️
      </button>
    </div>
  );
};
