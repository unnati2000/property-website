import React from "react";
import {
  Container,
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  TextField,
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
