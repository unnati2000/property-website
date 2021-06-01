import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  propertyImage: {
    height: "200px",
    width: "100%",
  },
  propertyName: {
    padding: "10px",
  },
  address: {
    color: "#828282",
    paddingLeft: "10px",
  },
  type: {
    padding: "10px",
  },
  price: {
    padding: "10px",
    fontWeight: "bold",
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
