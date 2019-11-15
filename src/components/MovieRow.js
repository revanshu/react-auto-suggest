import React from "react";

const MovieRow = ({ title, desc, handleSelection }) => {
  return (
    <div className="row" onClick={handleSelection}>
      <p className="row-item">{title}</p>
      <p className="row-item">{desc}</p>
    </div>
  );
};

export default MovieRow;
