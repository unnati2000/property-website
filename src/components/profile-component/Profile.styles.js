import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  img: {
    height: "80px",
    width: "80px",
    margin: "15px 30px",
  },
  card: {
    padding: "20px 0",
    // background: "#B5EAEA",
    borderRadius: "20px",
  },
  name: {
    color: theme.palette.primary.main,
    margin: "10px 45px",
    fontWeight: "bold",
    fontSize: "30px",
  },
  date: {
    textAlign: "center",
    margin: "10px",
  },
  button: {
    background: theme.palette.primary.main,
    color: "white",
    width: "80%",
    marginTop: "20px",
    marginLeft: "40px",
  },
  box: {
    background: "#eee",
    padding: "10px",
    margin: "10px 40px",
  },
  grey: {
    fontSize: "12px",
    color: "#aaa",
  },
  packageName: {
    margin: "4px 20px",
    fontSize: "14px",
    textAlign: "center",
    width: "100%",
  },
  pack: {
    background: theme.palette.primary.main,
    color: "white",
    borderRadius: "20px",
    marginLeft: "40px",
  },
}));
