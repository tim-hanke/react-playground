import React from "react";
import ReactDOM from "react-dom";
import Demonym from "./demonym";

describe("Demonym component", () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
