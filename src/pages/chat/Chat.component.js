import React, { useState, useEffect } from "react";
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
  Button,
} from "@material-ui/core";
import useStyles from "./Chat.styles";
import PersonChat from "../../components/person-chat-component/PersonChat.component";
import Message from "../../components/message-component/Message.component";
import firebase from "../../firebase/firebase.utils";
import { useAuth } from "../../context/auth-context";

const ChatComponent = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const { currentUser } = useAuth();

  const filterChats = (response) => {
    return currentUser?.messageIds?.includes(response?.docId);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then((res) => {
        let response = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));

        response = response.filter(filterChats);
        setUsers(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.mainDiv}>
      <Container>
        <Box p={2}>
          <Grid container spacing={2} className={classes.grid}>
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
                <PersonChat />
              </Box>
            </Grid>
            <Grid md={9} item>
              <Message />
              <Box
                className={classes.searchBoxDiv}
                display="flex"
                justifyContent="space-evenly"
              >
                <TextField
                  id="outlined-basic"
                  label="Type your text"
                  variant="outlined"
                  className={classes.type}
                />
                <Button className={classes.send}>Send</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ChatComponent;
