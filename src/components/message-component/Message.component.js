import React from "react";
import SenderMessage from "../customer-message-component/CustomerMessage.component";
import ReceiverMessage from "../agent-message-component/AgentMessage.component";
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
