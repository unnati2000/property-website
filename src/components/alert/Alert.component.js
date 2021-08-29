import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import useStyles from "./Alert.styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const HandleAlert = ({ type, message }) => {
  return (
    <Snackbar autoHideDuration={6000}>
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default HandleAlert;
