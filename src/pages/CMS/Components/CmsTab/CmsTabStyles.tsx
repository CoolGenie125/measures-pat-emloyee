import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      overflowX: "scroll",
    },
    item: {
      padding: "16px 0",
      margin: "0 10px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000",
      cursor: "pointer",
      borderTop: "2px solid transparent",
      wordBreak: "keep-all",
      minWidth: "100px",
      opacity: 1,
      "&:hover": {
        opacity: 0.5,
      },
    },
    activeItem: {
      padding: "16px 0",
      margin: "0 10px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000",
      opacity: 1,
      borderTop: "2px solid #FF7C4C",
      wordBreak: "keep-all",
      minWidth: "100px",
    },
    tabAdd: {
      margin: "0 10px",
      "& i": {
        cursor: "pointer",
        color: "#000",
        padding: "18px 0",
        "&:hover": {
          opacity: 0.5,
        },
      },
    },
    tabInput: {
      width: "fit-content",
      background: "transparent",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#333",
      padding: "10px 10px",
      border: "1px solid #a5aac3",
      borderRadius: "4px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      boxSizing: "border-box",
      "&::placeholder": {
        fontFamily: "Lato",
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "0.05em",
        color: "#ffffff70",
        opacity: 1 /* Firefox */,
      },
      "&:focus-visible": {
        outline: "none",
      },
      "&:focus": {
        outline: "none",
      },
    },
  })
);
