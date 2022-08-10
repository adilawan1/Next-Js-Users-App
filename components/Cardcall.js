import React, { useState, useEffect } from "react";
import Cardc from "./Cardc";
import ReactPaginate from "react-paginate";
export default function Cardcall(props) {
  const [currentPage, setCurrentPage] = useState(0);

  const [posts, setPosts] = useState(props.users ? [] : props.users);
  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;
  const currentPagedat = props.users.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(props.users.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <div>
      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={" d-flex justify-content-center Page"}
        previousLinkClassName={"btn btn-light"}
        nextLinkClassName={"btn btn-light"}
        disabledClassName={"text-muted"}
        activeClassName={"activ"}
      />
      <div className="cards">
        {currentPagedat.map((result) => (
          <Cardc user={result} />
        ))}
      </div>
    </div>
  );
}
