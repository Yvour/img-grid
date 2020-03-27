import React, { useState } from "react";

import { useStyles } from "./useStyles";

export function ImageGrid(props) {
  const { images, setSelectedId } = props;
  const quarters = images.reduce((r, image, index) => {
    const quarter = index % 4;
    if (!r[quarter]) {
      r[quarter] = [];
    }
    r[quarter].push(image);
    return r;
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.imageGrid} id="3">
      {quarters.map((columnImages, index) => (
        <div class={classes.column} key={index}>
          {columnImages.map(image => {
            return (
              <div
                className={classes.imageCard}
                onClick={() => {
                  setSelectedId(image.id);
                }}
              >
                <div className={classes.title}>{image.name}</div>
                <img src={image.url} key={image.id} alt={image.name} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
