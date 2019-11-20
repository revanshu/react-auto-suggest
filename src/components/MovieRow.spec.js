import React from "react";
import ReactDOM from "react-dom";
import MovieRow from "./MovieRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MovieRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
