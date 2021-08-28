import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./Alert.styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default Alert;
