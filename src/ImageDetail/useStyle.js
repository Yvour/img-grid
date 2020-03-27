import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
  globalWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(170,190,170, 0.85)"
  },
  formContent: {
    zIndex: 1,
    opacity: 1,
    padding: 10,
    borderRadius: 10,
    boxShadow: "0 0 30px rgba(0,0,0,0.7)",
    maxWidth: "85vw",
    maxHeight: "75vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "bottom",
    backgroundColor: "rgba(204,204,204, 1)"
  },
  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 44,
    width: 44,
    borderRadius: 22,
    top: -22,
    left: 22,
    "&:hover": {
      backgroundColor: "red",
      color: "white"
    }
  },

  imageContainer: {
    maxWidth: "50vw",
    maxHeight: "70vh",
    overflowY: "auto",
    "& img": {
      maxWidth: "100%",
      height: "auto",
      width: "auto",
      maxHeight: "100%"
    }
  },
  controlsContainer: {
    maxWidth: "34vw",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  detailsContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "column"
  },
  detailItem: {
    "& label": {
      display: "block",
      borderLeft: "1px solid gray",
      borderBottom: "1px solid black",
      width: "100%",
      backgroundColor: "#AAAAAB"
    },
    marginTop: 30,
    // fontWeight: "bold",
    boxShadow: "0 -2px 3px rgba(0,0,0,0.7)"
  },
  changeddetailItem: {
    fontStyle: "italic",
    borderLeft: "1px solid #800000",
    borderBottom: "1px solid red"
  },
  editButton: {
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "#bbbbff",
      color: "white"
    }
  },
  input: {
    border: "1px solid green",
    backgroundColor: "#EEEEFF",
    padding: 3,
    borderRadius: 3,
    width: "90%",
    margin: 5,
    fontSize: 27
  },
  inputConfirmButton: {
    "&:hover": {
      color: "white",
      backgroundColor: "blue"
    }
  },
  inputHint: {
    paddingLeft: 11,
    fontStyle: "italic",
    color: "transparent"
  },
  inputHintActivated: {
    color: "#EEEEEE",
    transitionDelay: "1s"
  },
  nameValue: {
    minHeight: 140,
    maxWidth: "calc(33vw-40px)",

    padding: 3,
    borderRadius: 3,
    marginTop: 3
  },
  nameValueUnderEdit: {
    color: "gray"
  },
  changedNameValue: {
    fontStyle: "italic"
  },

  inputGroupContainer: { maxWidth: 1, maxHeight: 1, position: "relative" },
  inputContainer: {
    boxShadow: "0 0 30px rgba(0,0,0,0.7)",
    position: "relative",

    width: "calc(20vw + 400px)",
    left: -400,
    padding: 7,
    borderRadius: 7,
    border: "1px dotted green",
    backgroundColor: "#AAAAFF"
  },
  actionButtons: {
    marginTop: 25,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    "& button": { margin: 5, padding: 5, borderRadius: 5 }
  },
  hiddenConfirmButton: { visibility: "hidden", border: "1px solid blue" },
  confirmButton: {
    "&:hover": {
      color: "white",
      backgroundColor: "green"
    }
  },
  removeButton: {
    "&:hover": {
      color: "white",
      backgroundColor: "red"
    }
  },

  removeConfirmWindowWrapper: {
    position: "fixed",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(170,190,170, 0.85)"
  },
  removeConfirmWindow: {
    opacity: 1,

    borderRadius: 10,
    boxShadow: "0 0 30px rgba(0,0,0,0.4)",

    display: "flex",
    flexDirection: "column",

    backgroundColor: "rgba(204,204,204, 1)"
  },
  removeConfirmWindowHeader: {
    color: "white",
    backgroundColor: "red",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  removeConfirmWindowText: {
    padding: 10
  },
  removeConfirmWindowButtons: {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      boxShadow: "0 0 30px rgba(0,0,0,0.9)",
      pagging: 7,
      borderRadius: 7,
      "&:hover": {
        backgroundColor: "blue",
        color: "white"
      }
    }
  }
});
