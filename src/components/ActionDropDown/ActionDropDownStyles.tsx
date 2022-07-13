import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%",
    },
    dropDownRoot: {
      position: "absolute",
      bottom: 0,
      right: 0,
      minWidth: "150px",
      background: "#F29D43",
      borderRadius: "15px",
      zIndex: 10,
      padding: "10px 0",
    },
    dropDownItem: {
      padding: "0 20px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontSeight: 400,
      fontSize: "14px",
      lineHeight: "40px",
      color: "#fff",
      postion: "relative",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
    },
    activeDropDownItem: {
      padding: "0 20px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontSeight: 400,
      fontSize: "14px",
      lineHeight: "40px",
      color: "#fff",
      postion: "relative",
      opacity: 0.5,
      cursor: "pointer",
    },
    displayNone: {
      display: "none",
    },
    children: {},
  })
);
