import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 1;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className=" my-1">
      {/* <div className="my-4">
        <h2 className="text-lg font-semibold">Page {currentPage + 1}</h2>
      </div> */}

      <ReactPaginate
        breakLabel="..."
        breakClassName="bg-white font-bold text-center border border-white rounded-md px-3 py-1"
        nextLabel="Next >"
        nextClassName="border border-[#005656]  space-x-2 items-center  flex text-[#005656] px-4 py-1 ml-2"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous "
        previousClassName="border border-[#005656]  space-x-2 items-center  flex text-[#005656] px-4 py-1 mr-2"
        renderOnZeroPageCount={null}
        containerClassName=""
        className="flex justify-center text-emdmsPrimary  items-end md:justify-end  mr-5 mb-4  "
        pageLinkClassName="px-3 py-2 "
        pageClassName="bg-white py-1 rounded-md border border-[#005656] mx-1"
        activeLinkClassName="text-white w-full rounded-md px-2 bg-emdmsPrimary"
        activeClassName="bg-emdmsPrimary text-white"
      />
    </div>
  );
};

export default PaginationComponent;
