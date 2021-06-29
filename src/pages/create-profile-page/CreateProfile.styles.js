import { makeStyles } from "@material-ui/core";
import flatImage from "../../assets/flat-img.jpg";

export default makeStyles((theme) => ({
  profileDiv: {
    background: theme.palette.primary.main,
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: "40px",
  },
  profileHeader: {
    color: "#fff",
  },
  form: {
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "rgba(255, 255, 255, 0.1)",
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
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));
