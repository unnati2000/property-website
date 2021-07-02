import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  packageDiv: {
    background: "#B5EAEA",
    height: "100vh",
  },
  container: {
    padding: "20vh",
    textAlign: "center",
  },
  cardHeader: {
    textAlign: "center",
    padding: "10px 0",
  },
  priceHeader: {
    textAlign: "center",
    margin: "10px 0",
  },
  icons: {
    fontSize: "100px",
    color: theme.palette.primary.main,
  },
  button: {
    background: theme.palette.primary.main,
    margin: "20px 10px",
    width: "80%",
    color: "white",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  perks: {
    color: theme.palette.primary.main,
    fontSize: "20px",
    marginTop: "20px",
  },
  card: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  cardButton: {},
}));
