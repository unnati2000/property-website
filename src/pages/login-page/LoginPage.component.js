import React, { useState } from "react";
import { Modal, Typography, Box } from "@material-ui/core";
import useStyles from "./LoginPage.styles";
import GoogleButton from "react-google-button";

const SignInPage = () => {
  const classes = useStyles();
  

  const onSubmit = (e) => {
    e.preventDefault();
   
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
            Login with your Google Account
          </Typography>
          <form>
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
