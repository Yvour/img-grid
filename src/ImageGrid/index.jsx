import React, { useState } from "react";
function ImageGrid() {
  return (
    <div className="image-system">
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Enter query..."
          onChange={e => {
            const value = e.target.value;
            console.log(value);
          }}
        />
      </div>
      Image Grid
    </div>
  );
}
export default ImageGrid;
