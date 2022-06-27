import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  loaderWrapper: {
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflowY: "scroll",
    padding: "16px",
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
  },
  modalRoot: {
    padding: "30px 35px",
    boxSizing: "border-box",
    width: "620px",
    height: "fit-content",
    background: "#fff",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down(769)]: {
      minWidth: "100% !important",
      width: "100% !important",
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
    padding: "0px 50px",
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
}));
