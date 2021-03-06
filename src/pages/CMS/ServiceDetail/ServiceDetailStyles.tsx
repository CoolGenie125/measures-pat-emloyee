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
    title: {
      fontStyle: "normal",
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "50px",
      color: "#F29D43",
    },
    mainContainer: {
      width: "100%",
    },
    descContainer: {
      color: "#000",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "29px",
      textAlign: "center",
      marginTop: "5px",
      marginBottom: "30px",
    },
    btnContainer: {
      marginTop: "50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down(570)]: {
        display: "block",
      },
    },
    cancelBtn: {
      width: "100% !important",
      marginBottom: "20px",
      marginRight: "15px",
    },
    confirmBtn: {
      marginBottom: "20px",
      width: "100% !important",
      [theme.breakpoints.down(570)]: {
        marginLeft: "0px",
      },
    },
    form: {
      marginBottom: "10px",
      textAlign: "left",
      color: "#000",
      fontFamily: "Lato",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "29px",
    },
    formTitle: {
      minWidth: "100px",
      marginRight: "5px",
      color: "#000",
      fontFamily: "Lato",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "29px",
      marginBottom: "10px",
    },
    formInput: {
      color: "#000",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "29px",
      textAlign: "center",
    },
    logoImgLoaderRoot: {
      width: "100%",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      marginBottom: "50px",
    },
    logoImgLoader: {
      width: "50%",
      border: "1px dashed #dddddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      [theme.breakpoints.down(540)]: {
        width: "100%",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    mainImgLoaderRoot: {
      width: "100%",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      marginBottom: "50px",
    },
    mainImgLoader: {
      width: "50%",
      border: "1px dashed #dddddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      "&::before": {
        content: `""`,
        float: "left",
        paddingBottom: "90%",
        [theme.breakpoints.down(540)]: {
          paddingBottom: "90%",
          transitionDelay: "300ms",
          transitionDuration: "1000ms",
        },
      },
      [theme.breakpoints.down(540)]: {
        width: "100%",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    importLetter: {
      color: "#000",
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      margin: "10px",
    },
    importLogoImg: {
      width: "100%",
      height: "100%",
    },
    importMainImg: {
      width: "100%",
      height: "100%",
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
