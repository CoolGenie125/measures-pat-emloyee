/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    dropDownRoot: {
      position: "absolute",
      bottom: 0,
      right: 0,
      minWidth: "150px",
      background: "#1A1F37",
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
      color: "#70708F",
      postion: "relative",
      "&:hover": {
        color: "#fff",
      },
    },
    displayNone: {
      display: "none",
    },
    children: {},
  })
);
