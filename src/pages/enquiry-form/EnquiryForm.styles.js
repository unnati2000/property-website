import { makeStyles } from "@material-ui/core";

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
  submit: {
    background: theme.palette.primary.main,
    color: "white",
    margin: "10px 15px",

    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  text: {
    margin: "5px 0",
  },
  rooms: {
    background: "#eee",
    padding: "10px",
  },
  img: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  agentBox: {
    background: "#eee",
    padding: "10px 20px",
  },
  button: {
    margin: "10px 20px",
  },
}));
