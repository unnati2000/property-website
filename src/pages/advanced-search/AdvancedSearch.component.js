import React from "react";
import {
  Modal,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@material-ui/core";
import useStyles from "./AdvancedSearch.styles";

const AdvancedSearch = () => {
  const classes = useStyles();
  return (
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
        <Typography variant="h5" color="primary" className={classes.header}>
          Advanced Search
        </Typography>
        <form>
          <Box mt={2} display="flex" justifyContent="space-evenly">
            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">City</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  // value={value}
                  // onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Mumbai"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Banglore"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Delhi"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Chennai"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Kolkata"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Rent"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Flat"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Project"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Personalised house"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">No of Rooms</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="1 RK"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="1 BHK"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="2 BHK"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="3 BHK"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Button className={classes.button}>Advanced Search</Button>
        </form>
      </div>
    </Modal>
  );
};

export default AdvancedSearch;
