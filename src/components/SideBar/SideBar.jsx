import React, { useState } from "react";

import MovieIcon from "../../assets/movie-icon.png";
import Menu from "../../assets/menu.png";
import Popular from "../../assets/popular.png";
import Top from "../../assets/top-rated.png";
import Movie from "../../assets/movie.png";
import "./sideBar.css";

const discover = [
  { img: Popular, name: "Popular" },
  { img: Top, name: "Top Rated" },
  { img: Movie, name: "Upcoming" },
];
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
            <div className={`movie-name`}>
              <img src={item.img} alt="movie-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="side-bar-title">genres</div>
        <div className="side-bar-list">
          {genres.map(item => (
            <div className="movie-name">
              <img src={Movie} alt="movie-icon" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
