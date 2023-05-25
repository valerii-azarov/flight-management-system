import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../actions/Actions";
import "./Pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage, setFlightsPerPage] = useState(10);

  const totalFlights = useSelector((state) => state.flights.totalFlights);
  const totalPages = Math.ceil(totalFlights / flightsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else {
      dispatch(fetchFlights(currentPage, flightsPerPage));
    }
  }, [dispatch, currentPage, flightsPerPage, totalPages]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLimitChange = (limit) => {
    setFlightsPerPage(limit);
    setCurrentPage(1);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-field">
        <select
          className="pagination-select"
          value={flightsPerPage}
          onChange={(e) => handleLimitChange(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>

      <button
        className="button button--secondary"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Попередня
      </button>

      <div className="pagination-page">
        {currentPage} сторінка
      </div>

      <button
        className="button button--secondary"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || currentPage >= totalPages}
      >
        Наступна
      </button>
    </div>
  );
};

export default Pagination;
