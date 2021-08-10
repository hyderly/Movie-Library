import React, { useState } from "react";

import MovieIcon from "../../assets/movie-icon.png";
import Menu from "../../assets/menu.png";
import "./sideBar.css";

const discover = ["Popular", "Top Rated", "Upcoming"];
const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentory",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horro",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const SideBar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="menu-box">
      <img
        onClick={() => setDisplay(!display)}
        class="menu-icon"
        src={Menu}
        alt="Menu"
      />
      <div className={`side-bar ${display ? "display-none" : ""}`}>
        <img class="MovieIcon" src={MovieIcon} alt="MovieIcon" />
        <div className="side-bar-title">Discover</div>
        <div className="side-bar-list">
          {discover.map(item => (
            <p>{item}</p>
          ))}
        </div>
        <div className="side-bar-title">genres</div>
        <div className="side-bar-list">
          {genres.map(item => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
