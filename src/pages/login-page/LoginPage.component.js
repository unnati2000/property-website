import React, { useState, useEffect } from "react";
import { Modal, Typography, Box, TextField, Button } from "@material-ui/core";
import { useAuth } from "../../context/auth-context";
import firebase from "../../firebase/firebase.utils";
import { useHistory } from "react-router";
import { doesPhoneNumberExist } from "../../services/firebase.services";
import { Link } from "react-router-dom";
import useStyles from "./LoginPage.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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

  const onSubmit = async (e) => {
    e.preventDefault();
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");

    if (phoneNumber === "") {
      toast("Please enter a valid phone number", { type: "error" });
    } else {
      const phoneNumberExists = doesPhoneNumberExist(phoneNumber);
      if (phoneNumberExists) {
        try {
          await Login(phoneNumber, recaptcha);
        } catch (error) {
          toast(error.message, { type: "error" });
        }
      } else {
        toast("You don't have an account", { type: "error" });
      }
    }
  };
  return (
    <div>
      <ToastContainer />
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <Typography variant="h6" color="primary" className={classes.header}>
            Login with your Phone Number
          </Typography>

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
