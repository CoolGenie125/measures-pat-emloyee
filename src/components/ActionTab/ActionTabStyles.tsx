/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      borderBottom: "1px solid #373F66",
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
      color: "#FFFFFF",
      borderTop: "2px solid #7F64E2",
    },
    tabAdd: {
      margin: "0 10px",
      "& i": {
        fontSize: "19px",
        lineHeight: "19px",
        cursor: "pointer",
        color: "#fff",
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
      border: "1px solid #373F66",
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
