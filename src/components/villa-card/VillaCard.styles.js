import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "100%",
  },
  villaDetail: {
    padding: "20px",
  },
  button: {
    background: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  grey: {
    color: "#aaa",
    fontSize: "13px",
  },
  blackFont: {
    fontSize: "13px",
  },
  address: {
    fontSize: "14px",
  },
}));
