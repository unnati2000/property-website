import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@material-ui/core";

const PersonChat = () => {
  return (
    <div>
      <ListItem button key="RemySharp">
        <ListItemIcon>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </ListItemIcon>
        <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
};

export default PersonChat;
