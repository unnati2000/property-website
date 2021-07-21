import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  projectImage: {
    height: "300px",
    width: "100%",
  },
  projectName: {
    fontWeight: "bold",
    paddingLeft: "10px",
  },
  builders: {
    color: "#828282",
    paddingRight: "10px",
  },
  bhk: {
    padding: "10px",
  },
  location: {
    paddingLeft: "10px",
    color: "#828282",
  },
  price: {
    fontWeight: "bold",
    padding: "10px",
  },
  button: {
    background: theme.palette.primary.main,
    color: "#fff",
    margin: "10px",

    "&:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
}));
