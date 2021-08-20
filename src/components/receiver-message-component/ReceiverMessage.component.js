import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./ReceiverMessage.styles";

const ReceiverMessage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Message of Receiver</Typography>
      <Typography className={classes.time}>6:30 AM</Typography>
    </div>
  );
};

export default ReceiverMessage;
