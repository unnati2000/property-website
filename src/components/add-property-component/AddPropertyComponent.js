import React from "react";
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
} from "@material-ui/core";
import useStyles from "./AddPropertyComponent.styles";

const AddPropertyComponent = ({ plan }) => {
  const classes = useStyles();
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
              <Box>
                <Box display="flex" justifyContent="space-evenly">
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
                <Box display="flex" justifyContent="space-evenly">
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
                    label="Jogging & Cycling Track"
                  />
                </Box>
                <Box display="flex" justifyContent="space-evenly">
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
                <Box display="flex" justifyContent="space-evenly">
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
            </>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default AddPropertyComponent;
