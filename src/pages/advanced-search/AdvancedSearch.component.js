import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const AdvancedSearch = () => {
  const classes = useStyles();

  const [city, setCity] = useState("Mumbai");
  const [type, setType] = useState("flat");
  const [rooms, setRooms] = useState("1 RK");

  const handleCityChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleRoomsChange = (event) => {
    setRooms(event.target.value);
  };

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
        <Typography variant="h4" color="primary" className={classes.header}>
          Advanced Search
        </Typography>
        <form>
          <Box mt={4} mb={2} display="flex" justifyContent="space-evenly">
            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">City</FormLabel>
                <RadioGroup
                  aria-label="city"
                  name="city"
                  value={city}
                  onChange={handleCityChange}
                >
                  <FormControlLabel
                    value="Mumbai"
                    control={<Radio color="primary" />}
                    label="Mumbai"
                  />
                  <FormControlLabel
                    value="Banglore"
                    control={<Radio color="primary" />}
                    label="Banglore"
                  />
                  <FormControlLabel
                    value="Delhi"
                    control={<Radio color="primary" />}
                    label="Delhi"
                  />
                  <FormControlLabel
                    value="Chennai"
                    control={<Radio color="primary" />}
                    label="Chennai"
                  />
                  <FormControlLabel
                    value="Kolkata"
                    control={<Radio color="primary" />}
                    label="Kolkata"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup
                  aria-label="type"
                  name="Type"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <FormControlLabel
                    value="flat"
                    control={<Radio color="primary" />}
                    label="Flat"
                  />
                  <FormControlLabel
                    value="project"
                    control={<Radio color="primary" />}
                    label="Project"
                  />
                  <FormControlLabel
                    value="villa"
                    control={<Radio color="primary" />}
                    label="Personalised house"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">No of Rooms</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={rooms}
                  onChange={handleRoomsChange}
                >
                  <FormControlLabel
                    value="1 RK"
                    control={<Radio color="primary" />}
                    label="1 RK"
                  />
                  <FormControlLabel
                    value="1 BHK"
                    control={<Radio color="primary" />}
                    label="1 BHK"
                  />
                  <FormControlLabel
                    value="2 BHK"
                    control={<Radio color="primary" />}
                    label="2 BHK"
                  />
                  <FormControlLabel
                    value="3 BHK"
                    control={<Radio color="primary" />}
                    label="3 BHK"
                  />
                  <FormControlLabel
                    value="4 BHK"
                    control={<Radio color="primary" />}
                    label="4 BHK"
                  />
                  <FormControlLabel
                    value="5 BHK"
                    control={<Radio color="primary" />}
                    label="5 BHK"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Link
            to={"/" + city + "/" + type + "/" + rooms}
            className={classes.link}
          >
            <Button className={classes.button}>Advanced Search</Button>
          </Link>
        </form>
      </div>
    </Modal>
  );
};

export default AdvancedSearch;
