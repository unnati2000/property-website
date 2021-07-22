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
    padding: "0 60px",
    marginTop: "50px",
  },
  ammenityDiv: {
    display: "flex",
    justifyContent: "left",
    margin: "20px 0",
  },
  ammenityContainer: {
    marginTop: "50px",
  },
  tab: {
    border: "solid 1px #B2B2B2",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  },
  area: {
    color: theme.palette.primary.main,
  },
  carpet: {
    color: "#979797",
    marginTop: "15px",
  },
  roomType: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    marginLeft: "40px",
  },
}));
