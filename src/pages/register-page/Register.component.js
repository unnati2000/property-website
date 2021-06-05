import React, { useState } from "react";
import { Modal, Box, Button, Typography, Grid } from "@material-ui/core";
import User from "../../assets/user.png";
import Agent from "../../assets/agent.png";
import useStyles from "./Register.styles";
import GoogleButton from "react-google-button";
import firebase from "../../firebase/firebase.utils";
import { auth, firestore } from "../../firebase/firebase.utils";

const SignInPage = () => {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const [role, setRole] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((res) => {
        firestore
          .collection("user")
          .add({
            role: role,
            email: res.additionalUserInfo.profile.email,
            name: res.additionalUserInfo.profile.name,
          })
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <Typography variant="h6" color="primary" className={classes.header}>
            Choose your account type
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item md={6} sm={6}>
                <Button
                  onClick={() => setRole("agent")}
                  className={role === "agent" && classes.roleButton}
                >
                  <img src={Agent} height="100" width="100" alt="agent" />
                </Button>
                <Typography color="primary"> Agent</Typography>
              </Grid>
              <Grid item md={6} sm={6}>
                <Button
                  onClick={() => setRole("user")}
                  className={role === "user" && classes.roleButton}
                >
                  <img src={User} height="100" width="100" alt="user" />
                </Button>
                <Typography color="primary"> User</Typography>
              </Grid>
            </Grid>

            <Box display="flex" justifyContent="center" mt={2}>
              <GoogleButton onClick={onSubmit} />
            </Box>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SignInPage;
