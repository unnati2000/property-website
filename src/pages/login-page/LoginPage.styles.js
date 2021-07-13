import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  header: {
    margin: "10px 0",
  },

  button: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: "100%",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
  roleButton: {
    background: "#7BB4D2",
    "&:hover": {
      background: "#7BB4D2",
    },
  },
}));
