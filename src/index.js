import React from "react";
import ReactDOM from "react-dom";
import ImageGrid from "./ImageGrid";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(ImageGrid),
    document.getElementById("image-grid-system")
  );
});
