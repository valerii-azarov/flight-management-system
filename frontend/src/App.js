import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFlights,
  addFlight,
  updateFlight,
  deleteFlights,
  fetchDatabases,
  fetchCollections,
} from "./actions/Actions.js";

import Header from "./components/header/Header.jsx";
import AddFlight from "./components/add-flight/AddFlight.jsx";
import EditFlight from "./components/edit-flight/EditFlight.jsx";
import List from "./components/list-flights/List.jsx";
import Search from "./components/search/Search.jsx";
import Pagination from "./components/pagination/Pagination.jsx";

const App = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);
  const databases = useSelector((state) => state.databases);
  const collections = useSelector((state) => state.collections);

  const [addFlightModalOpened, setAddFlightModalOpened] = useState(false);
  const [editFlightModalOpened, setEditFlightModalOpened] = useState(false);
  const [selectedFlightId, setSelectedFlightId] = useState(null);
  const [selectedFlightIds, setSelectedFlightIds] = useState([]);

  useEffect(() => {
    dispatch(fetchFlights(1, 10));
    dispatch(fetchDatabases());
    dispatch(fetchCollections());
  }, [dispatch]);

  const handleAddFlight = () => {
    setAddFlightModalOpened(true);
  };

  const handleEditFlight = (flightId) => {
    setSelectedFlightId(flightId);
    setEditFlightModalOpened(true);
  };

  const handleFormClose = () => {
    setAddFlightModalOpened(false);
    setEditFlightModalOpened(false);
  };

  const handleFlightSubmit = (flightData) => {
    if (selectedFlightId) {
      dispatch(updateFlight(selectedFlightId, flightData));
    } else {
      dispatch(addFlight(flightData));
    }

    setAddFlightModalOpened(false);
    setSelectedFlightId(null);
  };

  const handleDeleteFlight = () => {
    dispatch(deleteFlights(selectedFlightIds));
    setSelectedFlightIds([]);
  };

  const handleCheckboxChange = (flightId) => {
    if (selectedFlightIds.includes(flightId)) {
      setSelectedFlightIds((prevIds) =>
        prevIds.filter((id) => id !== flightId)
      );
    } else {
      setSelectedFlightIds((prevIds) => [...prevIds, flightId]);
    }
  };

  const handleShowDatabases = () => {
    if (databases) {
      console.log("Бази даних:", databases);
    } else {
      console.log("Бази даних недоступні.");
    }
  };

  const handleShowCollections = () => {
    if (collections) {
      console.log("Колекції:", collections);
    } else {
      console.log("Колекції недоступні.");
    }
  };

  return (
    <>
      <Header handleAddFlight={handleAddFlight} />
      <Search />
      <List
        flights={flights}
        handleEditFlight={handleEditFlight}
        handleCheckboxChange={handleCheckboxChange}
        selectedFlightIds={selectedFlightIds}
      />
      <Pagination />
      {addFlightModalOpened && <AddFlight onClose={handleFormClose} onSubmit={handleFlightSubmit} />}
      {editFlightModalOpened && <EditFlight onClose={handleFormClose} flightId={selectedFlightId} />}

      <button 
        className="button button--secondary"
        onClick={handleDeleteFlight}
        disabled={selectedFlightIds.length === 0}
      >
        Видалити обрані рейси
      </button>

      <button className="button button--secondary" onClick={handleShowDatabases}>
        Показати всі бази даних
      </button>

      <button className="button button--secondary" onClick={handleShowCollections}>
        Показати колекції бази даних
      </button>
    </>
  );
};

export default App;
