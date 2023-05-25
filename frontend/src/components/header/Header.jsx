import React from "react";
import "./Header.css";

const Header = ({ handleAddFlight }) => {
  return (
    <div className="header">
      <div className="header__title">Flight management system</div>
      <div className="header__link" onClick={handleAddFlight}>
        Додати новий рейс
      </div>
    </div>
  );
};

export default Header;
