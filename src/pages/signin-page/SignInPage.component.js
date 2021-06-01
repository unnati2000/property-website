import React, { useState } from "react";
import { Modal, TextField, Button, Typography, Grid } from "@material-ui/core";
import User from "../../assets/user.png";
import Agent from "../../assets/agent.png";
import useStyles from "./SignInPage.styles";

const SignInPage = () => {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const [role, setRole] = useState("");
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

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            className={classes.text}
          />
          <br />
          <Button variant="contained" className={classes.button}>
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SignInPage;
