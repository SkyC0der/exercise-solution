import React from "react";
import "./Search.scss";
const Search = () => {
  return (
    <div className="search-container">
      <h1>
        <img
          src="https://helicarrier.studio/images/logo-icon.svg"
          alt="Helicarrier Logo"
        />
        Helicarrier
      </h1>
      <input className="searchBox" type="text" placeholder="Search recent transactions" />

      <div className="button_row">
        <button>All</button>
        <button>Deposits</button>
        <button>Withdrawals</button>

        <button>Swaps</button>
      </div>
    </div>
  );
};

export default Search;
