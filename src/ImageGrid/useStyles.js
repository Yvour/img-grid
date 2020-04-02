import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
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

  /* Responsive layout - makes a three column-layout instead of four columns */
  "@media screen and (max-width: 1000px)": {
    column: {
      flex: "33%",
      maxWidth: "33%"
    }
  },

  /* Responsive layout - makes a two column-layout instead of four columns */
  "@media screen and (max-width: 800px)": {
    column: {
      flex: "50%",
      maxWidth: "50%"
    }
  },

  "@media screen and (max-width: 600px)": {
    column: {
      flex: "100%",
      maxWidth: "100%"
    }
  }
});
