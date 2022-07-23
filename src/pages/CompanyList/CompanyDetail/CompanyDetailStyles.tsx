import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f4dcc0",
      padding: "96px 48px 144px 48px",
      boxSizing: "border-box",
      [theme.breakpoints.down(1140)]:{
        padding: "96px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(700)]:{
        padding: "48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(540)]:{
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    container: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      marginBottom: "96px",
      padding: "96px 192px 96px 192px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(1140)]:{
        padding: "96px 48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(700)]:{
        padding: "48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(540)]:{
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    accountTitle: {
      color: "#F29D43",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 48px 0px",
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(540)]:{
        marginBottom: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    accountForm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "60px",
      borderBottom: "1px solid #fff",
    },
    formTitle: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 700,
      height: "51%",
      lineHeight: 1.6,
      letterSpacing: "0.05em",
      textAlign: "left",
      width: "35%",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(440)]:{
        fontSize: "12px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    formValue: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 700,
      height: "51%",
      lineHeight: 1.6,
      letterSpacing: "0.05em",
      textAlign: "left",
      width: "60%",
      transitionDelay: "400ms",
      transitionDuration: "1000ms", 
      [theme.breakpoints.down(440)]:{
        fontSize: "12px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    formBtn: {
      marginTop: "48px",
      [theme.breakpoints.down(540)]:{
        marginTop: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
  })
);
