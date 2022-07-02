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
    clientListTitle: {
      marginTop: "50px",
      color: "#F29D43",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "40px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 24px 0px",
      textAlign: "center",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(840)]: {
        fontSize: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        marginBottom: "18px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    clientListSmallTitle: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 48px 0px",
      textAlign: "center",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(840)]: {
        fontSize: "16px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        marginBottom: "16px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    tableRoot: {
      marginTop: "50px",
    },
    backHomeBtn: {
      margin: "50px auto 0 auto",
    },
  })
);
