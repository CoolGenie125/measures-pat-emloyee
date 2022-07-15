import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const UsageCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fff",
      position: "relative",
      borderRadius: "10px",
      boxShadow: "30px 40px 30px rgb(0 0 0 / 10%)",
      padding: "48px",
      boxSizing: "border-box",
      margin: "0 24px 48px 24px",
      [theme.breakpoints.down(540)]: {
        margin: "0 0 24px 0",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      "&:hover #tool": {
        display: "flex",
      },
    },
    toolRoot: {
      position: "absolute",
      right: 20,
      top: 20,
      display: "none",
      "& i": {
        marginLeft: "10px",
        cursor: "pointer",
        fontSize: "15px",
        lineHeight: "15px",
      },
    },
    title: {
      textAlign: "left",
      color: "#E57461",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: 1,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      marginBottom: "12px",
    },
    des: {
      marginTop: "12px",
      textAlign: "left",
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.05em",
      lineHeight: 1.4,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
  })
);
