import React from "react";
import { Modal, Typography, Box, TextField, Button } from "@material-ui/core";
import useStyles from "./EnquiryForm.styles";

const EnquiryForm = () => {
  const classes = useStyles();
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
            {" "}
            Enquiry Form
          </Typography>
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
                  <Button variant="contained" className={classes.submit}>
                    1 RK
                  </Button>
                  <Button variant="contained" className={classes.submit}>
                    1 BHK
                  </Button>
                  <Button variant="contained" className={classes.submit}>
                    2 BHK
                  </Button>
                  <Button variant="contained" className={classes.submit}>
                    3 BHK
                  </Button>
                  <Button variant="contained" className={classes.submit}>
                    4 BHK
                  </Button>
                  <Button variant="contained" className={classes.submit}>
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
