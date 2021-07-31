import React, { useState, useEffect } from "react";
import { Modal, Typography, Box, TextField, Button } from "@material-ui/core";
import firebase from "../../firebase/firebase.utils";
import useStyles from "./EnquiryForm.styles";

const EnquiryForm = ({ match }) => {
  const classes = useStyles();

  const [agent, setAgent] = useState({});

  console.log(match.params.userId);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(match.params.userId)
      .get()
      .then((res) => setAgent(res.data()));
  }, [match]);

  const [availableOn, setAvailableOn] = useState([]);

  const addToAvailability = (value) => {
    setAvailableOn([...availableOn, value]);
  };

  const removeAvailability = (value) => {
    setAvailableOn(availableOn.filter((val) => val !== value));
  };

  const onChangeAvailableOn = (e) => {
    if (availableOn.includes(e.currentTarget.value)) {
      removeAvailability(e.currentTarget.value);
    } else {
      addToAvailability(e.currentTarget.value);
    }
  };

  const checkAvailability = (value) => {
    return availableOn.includes(value);
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
          <Typography variant="h4" color="primary">
            Enquiry Form
          </Typography>
          <Box
            display="flex"
            justifyContent="left"
            mt={3}
            className={classes.agentBox}
          >
            <Box>
              <img
                src="https://solangvalleyresorts.com/wp-content/uploads/2019/03/gravatar-60-grey.jpg"
                className={classes.img}
              />
              <Typography>Agent Info</Typography>
            </Box>
            <Box ml={3}>
              <Typography variant="h6" color="primary">
                {agent?.name}
              </Typography>
              <Typography>{agent?.phoneNumber}</Typography>
            </Box>
          </Box>
          <form>
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
                className={classes.text}
              />
              <TextField
                label="Name"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                className={classes.text}
              />
              <TextField
                label="Email"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                className={classes.text}
              />

              <Box mt={2} className={classes.rooms}>
                <Typography variant="h6">Select your room type</Typography>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  flexWrap="wrap"
                  mt={1}
                  mb={2}
                >
                  <Button
                    variant={
                      checkAvailability("1 RK") ? "contained" : "outlined"
                    }
                    value="1 RK"
                    onClick={onChangeAvailableOn}
                    color="primary"
                    className={classes.submit}
                  >
                    1 RK
                  </Button>
                  <Button
                    variant={
                      checkAvailability("1 BHK") ? "contained" : "outlined"
                    }
                    value="1 BHK"
                    onClick={onChangeAvailableOn}
                    color="primary"
                    className={classes.submit}
                  >
                    1 BHK
                  </Button>
                  <Button
                    variant={
                      checkAvailability("2 BHK") ? "contained" : "outlined"
                    }
                    value="2 BHK"
                    onClick={onChangeAvailableOn}
                    color="primary"
                    className={classes.submit}
                  >
                    2 BHK
                  </Button>
                  <Button
                    variant={
                      checkAvailability("3 BHK") ? "contained" : "outlined"
                    }
                    value="3 BHK"
                    onClick={onChangeAvailableOn}
                    color="primary"
                    className={classes.submit}
                  >
                    3 BHK
                  </Button>
                  <Button
                    variant={
                      checkAvailability("4 BHK") ? "contained" : "outlined"
                    }
                    value="4 BHK"
                    onClick={onChangeAvailableOn}
                    color="primary"
                    className={classes.submit}
                  >
                    4 BHK
                  </Button>
                  <Button
                    value="5 BHK"
                    variant={
                      checkAvailability("5 BHK") ? "contained" : "outlined"
                    }
                    onClick={onChangeAvailableOn}
                    color="primary"
                    className={classes.submit}
                  >
                    5 BHK
                  </Button>
                </Box>
              </Box>

              <br />
              <Button
                className={classes.submit}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EnquiryForm;
