import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const SidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      textAlign: "center",
      width: "300px",
      boxSizing: "border-box",
      background: "#21263F",
      padding: "48px 12px 48px 12px",
      borderRight: "1px solid #323A5F",
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
      marginBottom: "72px",
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
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
      marginTop: "12px",
    },
    sidebarContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#323A5F",
      borderRadius: "15px",
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
      "&:hover": {
        background: "#2f3656",
      },
    },
    activeSidebarItem:{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "71px",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      margin: "0 12px",
      cursor: "pointer",
      background: "#2f3656",

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
      color: "#9ab0bc",
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
        color: "#9ab0bc",
        fontSize: "24px",
        height: "20px",
        width: "16px",
      },
    },
    activeItemContent: {
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
    activeItemBtn: {
      "& i": {
        color: "#fff",
        fontSize: "24px",
        height: "20px",
        width: "16px",
      },
    },
    studyLink: {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      width: "auto",
      height: "28px",
      borderRadius: "4px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgb(0 0 0 / 14%)",
      zIndex: 2000,
      perspective: "300px",
      transition: "0s linear",
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 12px",
    },
    banner: {
      width: "97px",
      height: "19px",
    },
  })
);
