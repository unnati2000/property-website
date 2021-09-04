import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import User from "../../assets/user.png";
import Agent from "../../assets/agent.png";
import useStyles from "./Register.styles";
import { useAuth } from "../../context/auth-context";
import { firestore } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";
import { doesPhoneNumberExist } from "../../services/firebase.services";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const RegisterPage = () => {
  const classes = useStyles();
  const rootRef = React.useRef(null);
  const history = useHistory();

  const { currentUser } = useAuth();

  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (!currentUser) {
      history.push("/register");
    } else {
      history.push("/");
    }
  }, [currentUser, history]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (role === "") {
      toast("Please select your role", { type: "error" });
    }
    if (phoneNumber === "") {
      toast("Please enter your phone number", { type: "error" });
    } else {
      const phoneNumberExists = await doesPhoneNumberExist(phoneNumber);
      if (phoneNumberExists === false) {
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        try {
          await firebase
            .auth()
            .signInWithPhoneNumber("+91" + phoneNumber, recaptcha)
            .then((e) => {
              let code = prompt("Enter OTP ", "");

              if (code === null) return;
              e.confirm(code).then(function (result) {
                alert("Phone Number verified");

                if (role === "agent") {
                  firestore
                    .collection("users")
                    .add({
                      userId: result.user.uid,
                      phoneNumber: phoneNumber,
                      role: role,
                      dateCreated: Date.now(),
                      name: "",
                      address: [],
                      pincode: "",
                      packageName: "",
                      packagePrice: "",
                      latitude: 0,
                      longitude: 0,
                      profilePic: "",
                    })
                    .then((res) => {
                      console.log(res);
                      toast("Created account successfully", {
                        type: "success",
                      });
                      history.push("/");
                    })
                    .catch((err) => toast(err.message, { type: "error" }));
                } else if (role === "user") {
                  firestore
                    .collection("users")
                    .add({
                      userId: result.user.uid,
                      phoneNumber: phoneNumber,
                      role: role,
                      dateCreated: Date.now(),
                      name: "",
                      address: [],
                      pincode: "",
                      latitude: 0,
                      longitude: 0,
                      profilePic: "",
                    })
                    .then((res) => {
                      console.log(res);
                      history.push("/");
                    })
                    .catch((err) => toast(err.message, { type: "error" }));
                }
              });
            })
            .catch((err) => toast(err.message, { type: "error" }));
        } catch (error) {
          toast("Failed to create an account", { type: "error" });
        }
      } else {
        toast("User already exists", { type: "error" });
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
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <Typography variant="h6" color="primary" className={classes.header}>
            Choose your account type
          </Typography>

          <form onSubmit={onSubmit}>
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
              <TextField
                label="Phone Number"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={classes.text}
              />
            </Box>
            <Button color="primary" type="submit" className={classes.button}>
              Sign Up
            </Button>
            <div id="recaptcha"></div>
          </form>
          <Box mt={3}>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterPage;
