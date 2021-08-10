import React from "react";

import Search from "../../assets/search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search Movie" />
        <button className="search-btn">
          <img src={Search} alt="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
