import React, { useState } from "react";
import {
  Card,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./AddPropertyComponent.styles";

const AddPropertyComponent = ({ plan }) => {
  const classes = useStyles();
  const [flatDetails, setFlatDetails] = useState([{ value: null }]);
  const [flatAreas, setFlatAreas] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...flatDetails];
    values[i].value = event.target.value;
    setFlatDetails(values);
  }

  function handleAdd() {
    const values = [...flatDetails];
    values.push({ value: null });
    setFlatDetails(values);
  }

  function handleRemove(i) {
    const values = [...flatDetails];
    values.splice(i, 1);
    setFlatDetails(values);
  }

  function handleChangeFlatAreas(i, event) {
    const values = [...flatAreas];
    values[i].value = event.target.value;
    setFlatAreas(values);
  }

  function handleAddFlatAreas() {
    const values = [...flatAreas];
    values.push({ value: null });
    setFlatAreas(values);
  }

  function handleRemoveFlatAreas(i) {
    const values = [...flatAreas];
    values.splice(i, 1);
    setFlatAreas(values);
  }

  return (
    <div className={classes.mainDiv}>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <TextField
            label="Building/Property Name"
            id="outlined-size-normal"
            variant="outlined"
            name="phoneNumber"
            value={""}
            className={classes.text}
          />
          <TextField
            label="Address"
            id="outlined-size-normal"
            variant="outlined"
            name="phoneNumber"
            value={""}
            className={classes.text}
          />

          {plan === "flat" && (
            <>
              <FormControl
                variant="outlined"
                className={classes.formControlRoom}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Room Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  // onChange={handleChange}
                  label="Room type"
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1 BHK">1 BHK</MenuItem>
                  <MenuItem value="2 BHK">2 BHK</MenuItem>
                  <MenuItem value="3 BKH">3 BHK</MenuItem>
                  <MenuItem value="4 BKH">4 BHK</MenuItem>
                  <MenuItem value="5 BKH">5 BHK</MenuItem>
                </Select>
              </FormControl>
              <Box mt={2} mb={2} ml={3} mr={3}>
                <TextField
                  label="Price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.textMed}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Value"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Lakh">Lakh</MenuItem>
                    <MenuItem value="Crore">Crore</MenuItem>
                  </Select>
                </FormControl>
                <Box mt={2} mb={2}>
                  <TextField
                    label="Area"
                    id="outlined-size-normal"
                    variant="outlined"
                    name="phoneNumber"
                    value={""}
                    // className={classes.text}
                  />
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Parking
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={age}
                      // onChange={handleChange}
                      label="Age"
                      className={classes.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="No Parking">No Parking</MenuItem>
                      <MenuItem value="Parking">Parking</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <TextField
                    label="Average Price"
                    id="outlined-size-normal"
                    variant="outlined"
                    name="phoneNumber"
                    value={""}
                    // className={classes.text}
                  />
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Facing
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={age}
                      // onChange={handleChange}
                      label="Facing"
                      className={classes.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="North">North</MenuItem>
                      <MenuItem value="East">East</MenuItem>
                      <MenuItem value="West">West</MenuItem>
                      <MenuItem value="South">South</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Description"
                    id="outlined-size-normal"
                    variant="outlined"
                    name="phoneNumber"
                    value={""}
                    className={classes.text}
                  />
                </Box>
              </Box>
            </>
          )}

          {plan === "project" && (
            <>
              <TextField
                label="Apartments"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                value={""}
                className={classes.text}
              />
              <Box display="flex" justifyContent="space-evenly">
                <TextField
                  label="Possession"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
                <TextField
                  label="Avg price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
              </Box>
              <Box display="flex" justifyContent="space-evenly">
                <TextField
                  label="Min carpet size"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
                <TextField
                  label="Max carpet size"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
              >
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Swimming Pool"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Gym"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Lift"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Jogging Track"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Community Hall"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="Badminton Court"
                      />
                    }
                    label="Primary"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Water 24 hours"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Primary"
                  />
                </Box>
              </Box>
              <Box mt={3}>
                <Typography variant="h5" color="primary">
                  Flat Details
                </Typography>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() => handleAdd()}
                >
                  Add flat type
                </Button>

                {flatDetails?.map((flatDetail, idx) => {
                  return (
                    <Box className={classes.flatDetails}>
                      <Box display="flex" justifyContent="space-evenly">
                        <TextField
                          label="Room Type"
                          id="outlined-size-normal"
                          variant="outlined"
                          name="phoneNumber"
                          value={""}
                          className={classes.text}
                        />
                        <Button
                          variant="contained"
                          className={classes.button}
                          onClick={() => handleRemove(idx)}
                        >
                          x
                        </Button>
                      </Box>

                      {flatAreas?.map((flatArea, ind) => {
                        return (
                          <div className={classes.flatarea}>
                            <TextField
                              label="Area of the room"
                              id="outlined-size-normal"
                              variant="outlined"
                              name="phoneNumber"
                              value={""}
                              className={classes.text}
                            />
                            <Box display="flex" justifyContent="space-evenly">
                              <TextField
                                label="Price of the room"
                                id="outlined-size-normal"
                                variant="outlined"
                                name="phoneNumber"
                                value={""}
                                className={classes.text}
                              />
                              <TextField
                                label="Price of the room"
                                id="outlined-size-normal"
                                variant="outlined"
                                name="phoneNumber"
                                value={""}
                                className={classes.text}
                              />
                            </Box>

                            <Box display="flex" justifyContent="right">
                              <Button
                                variant="contained"
                                onClick={() => handleRemoveFlatAreas(ind)}
                                className={classes.button}
                              >
                                Delete areas
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() => handleAddFlatAreas(ind)}
                                className={classes.button}
                              >
                                Add more areas
                              </Button>
                            </Box>
                          </div>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </>
          )}

          {plan === "villa" && (
            <div>
              <Box>
                <TextField
                  label="Area"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
                <TextField
                  label="Average Price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
              </Box>

              <TextField
                label="Area"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                value={""}
                className={classes.text}
              />
              <Box>
                <TextField
                  label="Price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Room Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Room type"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Lakh">Lakh</MenuItem>
                    <MenuItem value="Crore">Crore</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <TextField
                  label="Bathrooms"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
                <TextField
                  label="Bedroom"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="phoneNumber"
                  value={""}
                  className={classes.text}
                />
              </Box>
              <TextField
                label="About this property"
                id="outlined-size-normal"
                variant="outlined"
                name="phoneNumber"
                value={""}
                className={classes.text}
              />
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default AddPropertyComponent;
