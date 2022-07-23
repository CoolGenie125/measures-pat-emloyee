/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const SidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      textAlign: "center",
      width: "300px",
      boxSizing: "border-box",
      background: "#f5b673",
      padding: "48px 12px 48px 12px",
      height: "100%",
      zIndex: 2,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      [theme.breakpoints.down(840)]: {
        display: "none",
      },
    },
    logoImg: {
      width: "167px",
      height: "44px",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
      [theme.breakpoints.down(400)]: {
        width: "100px",
        height: "25px",
      },
    },
    avatarRoot: {
      marginTop: "24px",
      marginBottom: "25px",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
    },
    avatarImg: {
      width: "64px",
      height: "64px",
      borderRadius: "50px",
      marginBottom: "12px",
    },
    avatarName: {
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
    },
    avatarJob: {
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
      marginTop: "12px",
      opacity: 0.5,
    },
    sidebarContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "15px",
      "& :last-child": {
        borderBottom: "1px solid transparent",
      },
    },
    sidebarItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "71px",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      margin: "0 12px",
      cursor: "pointer",
      borderBottom: "1px solid #fff",
      "&:hover": {
        opacity: 0.5,
      },
    },
    activeSidebarItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "71px",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      margin: "0 12px",
      cursor: "pointer",
      borderBottom: "1px solid #fff",
      opacity: 0.5,
    },
    itemImg: {
      background: "rgba(0,0,0,0.0)",
      borderRadius: "12px",
      marginRight: "12px",
      width: "40px",
      height: "40px",
      minWidth: "40px",
      [theme.breakpoints.down(500)]: {
        margin: 0,
      },
    },
    itemContent: {
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      padding: "0 12px",
      minWidth: "171.2px",
      boxSizing: "border-box",
      textAlign: "start",
      [theme.breakpoints.down(500)]: {
        minWidth: "133px",
      },
      [theme.breakpoints.down(400)]: {
        minWidth: "80px",
        fontSize: "12px",
      },
    },
    itemBtn: {
      "& i": {
        color: "#fff",
        fontSize: "24px",
        height: "20px",
        width: "16px",
      },
    },
  })
);
