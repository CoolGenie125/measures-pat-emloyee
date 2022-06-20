import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  tableCell: {
    fontSize: "16px !important",
    fontFamily: "Lato",
    color: "white !important",
    fontWeight: "normal",
    borderBottom: "solid 1px #282E4E !important",
    "&.MuiTableCell-root": {
      padding: "10px 10px 10px 20px !important",
    },
  },
  emptyTable: {
    fontFamily: "Lato",
    fontSize: "40px",
    color: "white",
    textAlign: "center",
    margin: "100px auto",
  },
  action: {
    display: "flex",
    alignItems: "center",
  },
  actionIcon: {
    "& i": {
      cursor: "pointer",
    },
    "&:hover": {
      opacity: 0.5,
    },
  },
  marginRight10: {
    marginRight: "5px",
  },
}));