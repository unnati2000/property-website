import React, { useState } from "react";
import { Modal, TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./LoginPage.styles";
import firebase from "../../firebase/firebase.utils";

const SignInPage = () => {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    firebase
      .auth()
      .signInWithPhoneNumber("+91" + phoneNumber, recaptcha)
      .then((e) => {
        let code = prompt("Enter OTP", "");
        if (code === null) return;
        e.confirm(code).then(function (result) {
          console.log(result.user, "user");
          alert("Number verified");
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
            Login with your phone number
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={classes.text}
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
            <div id="recaptcha"></div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SignInPage;
