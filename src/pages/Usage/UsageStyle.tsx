import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const UsageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f4dcc0",
      padding: "48px",
      boxSizing: "border-box",
      transitionDelay: "400ms",
      transitionDuration: "1200ms",
    },
    usageTitle: {
      color: "#E57461",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 48px 0px",
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
    addRoot: {
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
      padding: "24px",
      [theme.breakpoints.down(540)]:{
        padding: 0,
        marginBottom: "50px",
      },
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
