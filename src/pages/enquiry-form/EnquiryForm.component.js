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
          <Typography variant="h4"> Enquiry From</Typography>
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
              />

              <br />
              <Button className={classes.submit} type="submit">
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
