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
import useStyles from "./Chat.styles";
import PersonChat from "../../components/person-chat-component/PersonChat.component";

const ChatComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Container>
        <Box p={2}>
          <Grid container className={classes.grid}>
            <Grid md={3} item>
              <Box m={2}>
                <Typography color="textSecondary" variant="h5">
                  Chat
                </Typography>
              </Box>

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

              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                className={classes.text}
              />
              <Divider />
              <Box className={classes.chatBox}>
                <PersonChat />
                <PersonChat />
              </Box>
            </Grid>
            <Grid md={9}>
              <Typography variant="h5">HHH</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ChatComponent;
