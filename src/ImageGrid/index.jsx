import React, { useState } from "react";

import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  title: {
    "&::before": {
      fontWeight: "bold"
    }
  },
  imageCard: {
    background: "lightgray",
    textAlign: "center",
    marginTop: "8px"
  },
  imageGrid: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 4px"
  },

  /* Create four equal columns that sits next to each other */
  column: {
    flex: "25%",
    maxWidth: "25%",
    padding: "0 4px",
    "& img": {
      verticalAlign: "middle",
      width: "100%"
    }
  },

  /* Responsive layout - makes a two column-layout instead of four columns */
  "@media screen and (max-width: 800px)": {
    column: {
      flex: "50%",
      maxWidth: "50%"
    }
  },

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  "@media screen and (max-width: 600px)": {
    column: {
      flex: "100%",
      maxWidth: "100%"
    }
  }
});

export function ImageGrid(props) {
  console.log("props are");
  console.log(props);
  const { images } = props;
  const quarters = images.reduce((r, image, index) => {
    const quarter = index % 4;
    if (!r[quarter]) {
      r[quarter] = [];
    }
    r[quarter].push(image);
    return r;
  }, []);
  const classes = useStyles();
  console.log("classes");
  console.log(classes);
  return (
    <div className={classes.imageGrid} id="3">
      {quarters.map((columnImages, index) => (
        <div class={classes.column} key={index}>
          {columnImages.map(image => {
            return (
              <div
                className={classes.imageCard}
                onClick={() => {
                  console.log("show image " + image.id);
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
