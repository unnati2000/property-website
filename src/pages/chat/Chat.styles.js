import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  mainDiv: {
    background: "#eee",
    height: "100vh",
  },
  grid: {
    background: "white",
  },
  text: {
    width: "100%",
    margin: "10px 5px",
  },
  chatBox: {
    margin: "0 10px",
  },
  searchBoxDiv: {
    alignSelf: "flex-end",
  },
  type: {
    width: "100%",
    margin: "10px 5px",
  },
  send: {
    background: theme.palette.primary.main,
    color: "white",
    marginTop: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
}));
