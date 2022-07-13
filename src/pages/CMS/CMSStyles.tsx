import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f4dcc0",
      padding: "96px",
      boxSizing: "border-box",
      [theme.breakpoints.down(840)]: {
        padding: "96px 48px 96px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(540)]: {
        padding: "48px 24px 48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    container: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      padding: "24px",
      textAlign: "center",
      [theme.breakpoints.down(840)]: {
        padding: "12px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        padding: "12px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    actionTab: {
      marginBottom: "50px",
    },
    title: {
      color: "#F29D43",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "40px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "50px 0px 50px 0px",
      textAlign: "center",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(840)]: {
        fontSize: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        marginBottom: "25px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    categoryRoot: {
      display: "flex",
      width: "100%",
      justifyContent: "right",
      alignItems: "center",
      margin: "20px 0",
      [theme.breakpoints.down(440)]: {
        flexDirection: "column",
      },
    },
    category: {
      padding: "10px",
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      cursor: "pointer",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 8px",
      minWidth: "150px",
      [theme.breakpoints.down(1050)]: {
        minWidth: 0,
      },
      [theme.breakpoints.down(440)]: {
        width: "100%",
        margin: "10px 0",
      },
    },
    addCategory: {
      cursor: "pointer",
      "& i": {
        color: "#fff",
      },
    },
    serachContainer: {
      display: "flex",
      justifyContent: "right",
    },
    searchRoot: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      justifyContent: "right",
      width: "fit-content",
      border: "1px solid #eee",
      borderRadius: "4px",
    },
    searchTitle: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "18px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0 10px",
      minWidth: "50px",
    },
    searchInput: {
      border: "none",
    },
    searchBtn: {
      minWidth: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5b673",
      height: "51px",
      borderBottomRightRadius: "4px",
      borderTopRightRadius: "4px",
      cursor: "pointer",
      "& i": {
        color: "#fff",
      },
      "&:hover": {
        opacity: 0.8,
      },
    },
    tableContainer: {
      margin: "50px 0",
    },
    tableRoot: {},
    tableTool: {
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
    },
    addBtn: {
      cursor: "pointer",
      width: "fit-content",
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "18px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      marginBottom: "50px",
      "& i": {
        marginLeft: "10px",
        fontSize: "18px",
        lineHeight: "18px",
        color: "#000",
      },
      "&:hover": {
        opacity: 0.5,
      },
    },
  })
);
