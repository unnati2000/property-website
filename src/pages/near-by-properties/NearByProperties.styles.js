import { makeStyles } from "@material-ui/core/styles";
import homeImg from "../../assets/home.png";

export default makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: "cover",
    height: "100vh",
  },
  textHeader: {
    textAlign: "center",
  },
  container: {
    textAlign: "center",
    paddingTop: "100px",
  },
  searchBox: {
    padding: "30px 30px",
    marginTop: "20px",
    background: "rgba(5, 1, 0, 0.7)",
    borderRadius: "5px",
  },
  link: {
    color: theme.palette.secondary.main,
    padding: "0 15px",
    fontSize: "20px",
  },
  input: {
    width: "70%",
    padding: "12px 10px",
    border: "none",
    marginTop: "10px",
  },
  searchButton: {
    padding: "9px 20px",
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
  featuredProjects: {
    margin: "0 150px",
  },
  featuredHeader: {
    margin: "20px 40px",
  },
  property: {
    margin: "40px 150px",
  },
  propertyHeader: {
    margin: "30px 40px",
  },
}));
