import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 500,
    margin: "2rem",
  },
  card: {
    padding: "20px 10px",
  },
  text: {
    width: "100%",
    margin: "10px 0",
  },
  formControl: {
    margin: "0 5px",
  },
  select: {
    padding: "0 20px",
  },
  formControlRoom: {
    width: "100%",
    marginTop: "10px",
  },
  button: {
    background: theme.palette.primary.main,
    color: "white",
    marginTop: "10px",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  flatDetails: {
    padding: "10px",
    marginTop: "10px",
    border: "solid 1px black",
  },
  flatarea: {
    border: "solid 1px black",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  formbutton: {
    background: theme.palette.primary.main,
    color: "white",
    marginTop: "10px",
    width: "100%",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
}));
