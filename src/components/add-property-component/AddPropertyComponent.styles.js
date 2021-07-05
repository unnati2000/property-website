import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
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
}));
