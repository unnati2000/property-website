import { Typography } from "@material-ui/core";
import useStyles from "./CustomerMessage.styles";
import React from "react";

const SenderMessage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Message of Sender</Typography>
      <Typography className={classes.time}>9:30 AM</Typography>
    </div>
  );
};

export default SenderMessage;
