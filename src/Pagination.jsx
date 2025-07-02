const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="pagination">
        <button onClick={handlePrevious} >
          Previous
        </button>
        <span className="current-page">{currentPage}</span>
        <button onClick={handleNext} >
          Next
        </button>
      </div>

  );
};

export default Pagination;
