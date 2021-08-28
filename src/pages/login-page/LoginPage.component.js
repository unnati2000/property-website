import React, { useState, useEffect } from "react";
import { Modal, Typography, Box, TextField, Button } from "@material-ui/core";
import Alert from "../../components/alert/Alert.component";
import { useAuth } from "../../context/auth-context";
import firebase from "../../firebase/firebase.utils";
import { useHistory } from "react-router";
import { doesPhoneNumberExist } from "../../services/firebase.services";
import { Link } from "react-router-dom";
import useStyles from "./LoginPage.styles";

const SignInPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, Login } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    } else {
      history.push("/");
    }
  }, [currentUser, history]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    const phoneNumberExists = doesPhoneNumberExist(phoneNumber);

    if (phoneNumberExists) {
      try {
        setError("");
        await Login(phoneNumber, recaptcha);
      } catch (error) {
        setError("");
      }
    } else {
      setError("You don't have an account. Please register");
    }
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
        // container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <Typography variant="h6" color="primary" className={classes.header}>
            Login with your Phone Number
          </Typography>
          <Box>
            <Alert errorMsg={error} />
          </Box>
          <form onSubmit={onSubmit} className={classes.form}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              mt={2}
            >
              <TextField
                label="Phone Number"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={classes.text}
              />
              <br />
              <Button color="primary" type="submit" className={classes.button}>
                Sign In
              </Button>
            </Box>
          </form>
          <div id="recaptcha"></div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SignInPage;
