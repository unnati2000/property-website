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
}));
