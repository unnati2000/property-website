import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  img: {
    height: "150px",
    width: "150px",
  },
  card: {
    margin: "20px 30px",
  },
  propertyName: {
    marginTop: "20px",
  },
  location: {
    color: "#808080",
  },
  button: {
    marginTop: "10px",
    marginBottom: "20px",
    background: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  link: {
    textDecoration: "none",
  },
  price: {
    fontSize: "20px",
  },
  room: {
    fontSize: "20px",
  },
  grey: {
    color: "#808080",
    fontSize: "16px",
  },
  roomDiv: {
    marginRight: "20px",
  },
}));
