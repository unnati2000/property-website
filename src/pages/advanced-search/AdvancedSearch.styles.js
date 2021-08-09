import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
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
    color: "white",
    width: "100%",
    marginTop: "20px",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  link: {
    textDecoration: "none",
  },
}));
