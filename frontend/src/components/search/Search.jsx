import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlights } from "../../actions/Actions";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [flightNumber, setFlightNumber] = useState("");

  useEffect(() => {
    dispatch(fetchFlights(1, 10, flightNumber));
  }, [dispatch, flightNumber]);

  const handleChange = (e) => {
    setFlightNumber(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Пошук.."
        value={flightNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
