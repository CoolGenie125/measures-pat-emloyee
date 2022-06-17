/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
    },
    item: {
      padding: "16px 0",
      margin: "0 10px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      cursor: "pointer",
      borderTop: "2px solid transparent",
      opacity: 0.5,
      "&:hover": {
        opacity: 1,
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
      color: "#FFFFFF",
      opacity: 1,
      borderTop: "2px solid #FF7C4C",
    },
    tabAdd: {
      margin: "0 10px",
      "& i": {
        cursor: "pointer",
        color: "#fff",
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
      color: "#FFFFFF",
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
