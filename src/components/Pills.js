import React from "react";

const Pills = ({ value, handleDelete }) => {
  return (
    <div className="pill">
      <span className="pill-title"> {value}</span>
      <span onClick={handleDelete}>X</span>
    </div>
  );
};

export default Pills;
