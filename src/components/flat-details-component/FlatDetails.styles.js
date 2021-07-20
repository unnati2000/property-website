import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  button: {
    background: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  grey: {
    color: "#979797",
    fontSize: "20px",
  },
  overviewheader: {
    color: "#7D7979",
    fontSize: "13px",
  },
  overview: {
    marginLeft: "50px",
    marginTop: "60px",
  },
  map: {
    marginTop: "60px",
  },
  container: {
    textAlign: "center",

    padding: "70px 100px",
  },
  imgDiv: {
    textAlign: "center",
  },
  img: {
    height: "600px",
    width: "100%",
    textAlign: "center",
  },
  address: {
    color: "#979797",
  },
  ammenities: {
    marginLeft: "50px",
  },
  overviewDiv: {
    paddingLeft: "60px",
  },
}));
