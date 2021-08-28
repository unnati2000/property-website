import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  profileDiv: {
    background: "#B5EAEA",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: "40px",
  },
  profileHeader: {
    color: theme.palette.primary.main,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "white",
    padding: "20px 60px",
    borderRadius: "5px",
    margin: "20px 300px",
  },
  text: {
    background: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    color: "#fff",
    marginTop: "20px",
  },
  submit: {
    marginTop: "10px",
    width: "100%",
    background: theme.palette.primary.main,
    color: "white",
    fontWeight: "bold",
  },
}));
