import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    actionTab:{
      marginBottom: "50px",
    },
    title:{
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "40px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 50px 0px",
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
    tableRoot:{},
  })
);