import React from "react";
import moment from "moment";
import "./List.css";

const List = ({ flights, handleEditFlight, handleCheckboxChange, selectedFlightIds }) => {
  const handleEditClick = (flightId) => {
    handleEditFlight(flightId);
  };

  const handleCheckboxClick = (flightId) => {
    handleCheckboxChange(flightId);
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>№</th>
          <th>Відправлення</th>
          <th>Прибуття</th>
          <th>Дата відправлення</th>
          <th>Дата прибуття</th>
          <th>Авіакомпанія</th>
          <th>Ціна</th>
          <th>Місця</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {flights &&
          flights.map((flight) => (
            <tr key={flight._id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedFlightIds.includes(flight._id)}
                  onChange={() => handleCheckboxClick(flight._id)}
                />
              </td>
              <td>{flight.name}</td>
              <td>{flight.townFrom}</td>
              <td>{flight.townTo}</td>
              <td>{moment(flight.dateOut).format("YYYY-MM-DD HH:mm")}</td>
              <td>{moment(flight.dateIn).format("YYYY-MM-DD HH:mm")}</td>
              <td>{flight.airline}</td>
              <td>{flight.count}</td>
              <td>{flight.price}</td>
              <td>
                <button onClick={() => handleEditClick(flight._id)}>
                  <span>Редагувати</span>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default List;
