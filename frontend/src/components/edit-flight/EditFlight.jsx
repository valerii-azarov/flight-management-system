import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlight, updateFlight } from "../../actions/Actions";
import "./EditFlight.css";

function EditFlight({ flightId, onClose }) {
  const dispatch = useDispatch();
  const flight = useSelector((state) => state.flights.flight);

  const [data, setData] = useState("");

  useEffect(() => {
    if (flightId) {
      dispatch(fetchFlight(flightId));
    }
  }, [dispatch, flightId]);

  useEffect(() => {
    if (flight) {
      setData(JSON.stringify(flight, null, 2));
    }
  }, [flight]);

  const handleClose = () => {
    onClose();
  };

  const handleFlightUpdate = () => {
    dispatch(updateFlight(flightId, JSON.parse(data)));
    onClose();
  };

  return (
    <div className="edit-flight">
      <div className="edit-flight__container">
        <div className="edit-flight__title">Редагування рейсу</div>
        <div className="edit-flight__hint">Будь ласка, зміните дані рейсу.</div>

        <div className="input">
          <label className="input__label">Дані рейсу (у форматі JSON):</label>
          <textarea
            className="input__input"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className="edit-flight__buttons">
          <button className="button button--primary" onClick={handleFlightUpdate}>
            Редагувати
          </button>

          <button className="button button--secondary" onClick={handleClose}>
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditFlight;
