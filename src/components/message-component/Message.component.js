import React from "react";
import SenderMessage from "../sender-message-component/SenderMessage.component";
import ReceiverMessage from "../receiver-message-component/ReceiverMessage.component";
import { Box } from "@material-ui/core";

const Message = () => {
  return (
    <div>
      <Box display="flex" ml={2} mt={2} justifyContent="flex-start">
        <ReceiverMessage />
      </Box>
      <Box display="flex" mr={2} mt={2} justifyContent="flex-end">
        <SenderMessage />
      </Box>
    </div>
  );
};

export default Message;
