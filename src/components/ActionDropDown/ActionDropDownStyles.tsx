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
      position: "relative",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
      "&:hover #edit": {
        display: "flex",
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
      position: "relative",
      opacity: 0.5,
      cursor: "pointer",
      "&:hover #edit": {
        display: "flex",
      },
    },
    editRoot:{
      display: "none",
      position: "absolute",
      right: 10,
      top: 10,
      "& i":{
        marginLeft: "5px",
        fontSize: "14px",
        color: "#000",
        lineHeight: "14px",
      },
    },
    displayNone: {
      display: "none",
    },
    children: {},
  })
);
