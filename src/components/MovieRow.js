import React from "react";
import movieServices from "../utils/getMovies";

const MovieRow = ({ title, desc, handleSelection }) => {
  return (
    <div className="row" onClick={handleSelection}>
      <p className="row-item">{title}</p>
      <p className="row-item">{desc}</p>
      <button
        onClick={() => {
          movieServices.getMovies("term").then(data => {
            console.log("data on click", data);
          });
        }}
      >
        click
      </button>
    </div>
  );
};

export default MovieRow;
