/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="my-4 flex justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Prev"
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName="flex items-center gap-2 flex-wrap justify-center"
        pageClassName="px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700 text-sm md:text-base cursor-pointer"
        activeClassName="bg-blue-600 font-bold"
        previousClassName="px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700 text-sm md:text-base cursor-pointer"
        nextClassName="px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700 text-sm md:text-base cursor-pointer"
        breakClassName="text-gray-400 text-sm md:text-base"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
