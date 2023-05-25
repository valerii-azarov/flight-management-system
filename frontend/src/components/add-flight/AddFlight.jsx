import React, { useState } from "react";
import "./AddFlight.css";

const initialize = [
  {
    name: "AA9992",
    townFrom: "Warsaw",
    townTo: "Barcelona",
    dateOut: "2023-05-24 12:00",
    dateIn: "2023-05-24 14:00",
    airline: "Ukraine International Airlines",
    count: "10",
    price: "75",
  },
];

function AddFlight({ onClose, onSubmit }) {
  const [newFlight, setNewFlight] = useState(
    JSON.stringify(initialize, null, 2)
  );

  const handleClose = () => {
    onClose();
  };

  const handleChange = (e) => {
    setNewFlight(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(JSON.parse(newFlight));
  };

  return (
    <div className="add-flight">
      <div className="add-flight__container">
        <div className="add-flight__title">Додавання нового рейсу</div>
        <div className="add-flight__hint">
          Будь ласка, надайте дані нового рейсу.
        </div>

        <div className="input">
          <label className="input__label">Дані рейсу (у форматі JSON):</label>
          <textarea
            className="input__input"
            value={newFlight}
            onChange={handleChange}
          />
        </div>

        <div className="add-flight__buttons">
          <button className="button button--primary" onClick={handleSubmit}>
            Додати
          </button>

          <button className="button button--secondary" onClick={handleClose}>
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFlight;
