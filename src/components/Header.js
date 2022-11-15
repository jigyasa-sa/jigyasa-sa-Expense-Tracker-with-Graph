import React from "react";
import logo from "../images/expense_logo.png";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo-image" />
      <h1>Expense Tracker</h1>
      {/* <p> An Application by Shaurya Saraswat </p> */}
    </div>
  );
};

export default Header;
