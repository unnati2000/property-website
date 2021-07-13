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
import { storage } from "../../firebase/firebase.utils";
import { useAuth } from "../../context/auth-context";
import { addFlat, addVilla } from "../../services/firebase.services";
import firebase from "../../firebase/firebase.utils";
import { useHistory } from "react-router";

const AddPropertyComponent = ({ plan }) => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [flatVariety, setFlatVariety] = useState([
    {
      flatType: "",
      details: [],
    },
  ]);
  const [flatVarietyDetails, setFlatVarietyDetails] = useState([
    {
      area: "",
      price: "",
      value: "",
    },
  ]);
  const [images, setImages] = useState([]);
  const urls = [];

  const history = useHistory();

  const [flatData, setFlatData] = useState({
    propertyName: "",
    address: "",
    roomType: "",
    price: "",
    value: "",
    area: "",
    parking: "",
    averagePrice: "",
    facing: "",
    description: "",
  });

  const [villaData, setVillaData] = useState({
    villaAddress: "",
    villaArea: "",
    villaAveragePrice: "",
    furnishedStatus: "",
    possessionStatus: "",
    villaPrice: "",
    villaValue: "",
    villaBedroom: "",
    villaBathroom: "",
    villaDescription: "",
  });

  const [projectData, setProjectData] = useState({
    propertyName: "",
    address: "",
    listOfBHK: "",
    possessionStatus: "",
    averagePrice: "",
    minCarpetSize: "",
    maxCarpetSize: "",
  });

  const [ammenities, setAmmenities] = useState([]);

  const addToAmmenities = (value) => {
    setAmmenities([...ammenities, value]);
  };

  const removeAmmenities = (value) => {
    setAmmenities(ammenities.filter((val) => val !== value));
  };

  const onChangeAmmenitiesOn = (e) => {
    if (e.target.checked) {
      if (!ammenities.includes(e.target.value)) {
        addToAmmenities(e.target.value);
      }
    } else {
      removeAmmenities(e.target.value);
    }
  };

  const {
    propertyName,
    address,
    roomType,
    price,
    value,
    area,
    parking,
    averagePrice,
    facing,
    description,
  } = flatData;

  const {
    villaAddress,
    villaArea,
    villaAveragePrice,
    furnishedStatus,
    possessionStatus,
    villaPrice,
    villaValue,
    villaBedroom,
    villaBathroom,
    villaDescription,
  } = villaData;

  const onFlatChange = (e) => {
    setFlatData({ ...flatData, [e.target.name]: e.target.value });
  };

  const onVillaChange = (e) => {
    setVillaData({ ...villaData, [e.target.name]: e.target.value });
  };
  function handleVarietyChange(i, event) {
    const values = [...flatVariety];
    values[i].flatType = event.target.value;
    setFlatVariety(values);
  }
  function handleVarietyDetailsChange(i, event) {
    const values = [...flatVariety];
    if (event.target.value === "area") {
      values[i].area = event.target.value;
    }
    if (event.target.value === "price") {
      values[i].price = event.target.value;
    }
    if (event.target.value === "value") {
      values[i].value = event.target.value;
    }

    setFlatVarietyDetails(values);
    setFlatVariety(...flatVariety);
  }

  function handleVarietyAdd() {
    const values = [...flatVariety];
    values.push({ value: null });
    setFlatVariety(values);
  }

  const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(ammenities);
    console.log(flatVariety);

    if (images.length > 4) {
      console.log("Not allowed to upload more than 4 images");
    } else {
      const promises = [];
      images.forEach((image) => {
        const uploadTask = storage
          .ref()
          .child(`images/${image.name}`)
          .put(image);
        promises.push(uploadTask);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {},
          (error) => console.log(error.code),
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            urls.push(downloadURL);

            if (urls.length === images.length) {
              if (plan === "flat") {
                await addFlat(
                  propertyName,
                  address,
                  roomType,
                  price,
                  value,
                  area,
                  parking,
                  averagePrice,
                  facing,
                  description,
                  urls,
                  currentUser?.userId,
                  currentUser?.docId
                );
                history.push("/");
              } else if (plan === "project") {
                console.log("submit");
                console.log(ammenities);
              } else if (plan === "villa") {
                await addVilla(
                  villaAddress,
                  villaArea,
                  villaAveragePrice,
                  furnishedStatus,
                  possessionStatus,
                  villaPrice,
                  villaValue,
                  villaBedroom,
                  villaBathroom,
                  villaDescription,
                  urls,
                  currentUser?.userId,
                  currentUser?.docId
                );
                history.push("/");
              }
            }
          }
        );
      });
    }
  };

  return (
    <div className={classes.mainDiv}>
      <Container className={classes.container}>
        <Card className={classes.card}>
          {plan === "flat" && (
            <form onSubmit={onSubmit}>
              <TextField
                label="Building/Property Name"
                id="outlined-size-normal"
                variant="outlined"
                name="propertyName"
                value={propertyName}
                onChange={onFlatChange}
                className={classes.text}
              />
              <TextField
                label="Address"
                id="outlined-size-normal"
                variant="outlined"
                name="address"
                value={address}
                onChange={onFlatChange}
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
                  name="roomType"
                  value={roomType}
                  onChange={onFlatChange}
                  label="Room type"
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1 BHK">1 BHK</MenuItem>
                  <MenuItem value="2 BHK">2 BHK</MenuItem>
                  <MenuItem value="3 BHK">3 BHK</MenuItem>
                  <MenuItem value="4 BHK">4 BHK</MenuItem>
                  <MenuItem value="5 BHK">5 BHK</MenuItem>
                </Select>
              </FormControl>
              <Box mt={2} mb={2} ml={3} mr={3}>
                <TextField
                  label="Price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="price"
                  value={price}
                  onChange={onFlatChange}
                  className={classes.textMed}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="value"
                    // onChange={handleChange}
                    label="Value"
                    onChange={onFlatChange}
                    value={value}
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
                    name="area"
                    value={area}
                    onChange={onFlatChange}
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
                      name="parking"
                      value={parking}
                      onChange={onFlatChange}
                      label="Parking"
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
                    name="averagePrice"
                    value={averagePrice}
                    onChange={onFlatChange}
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
                      name="facing"
                      label="Facing"
                      value={facing}
                      onChange={onFlatChange}
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
                    name="description"
                    value={description}
                    onChange={onFlatChange}
                    className={classes.text}
                  />
                </Box>
                <input type="file" multiple onChange={handleImageChange} />
              </Box>
              <Button
                type="contained"
                className={classes.formbutton}
                type="submit"
              >
                Submit
              </Button>
            </form>
          )}

          {plan === "project" && (
            <form onSubmit={onSubmit}>
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
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Swimming Pool"
                      />
                    }
                    label="Swimming Pool"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Gym"
                      />
                    }
                    label="Gym"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Lift"
                      />
                    }
                    label="Lift"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Jogging Track"
                      />
                    }
                    label="Jogging Track"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Community Hall"
                      />
                    }
                    label="Community Hall"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Badminton Court"
                      />
                    }
                    label="Badminton Court"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Water 24 hours"
                      />
                    }
                    label="Water 24 hours"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Park"
                      />
                    }
                    label="Park"
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
                  // onClick={() => handleAdd()}
                >
                  Add flat type
                </Button>

                {flatVariety.map((flatDetail, index) => (
                  <Box className={classes.flatDetails}>
                    <Box display="flex" justifyContent="space-evenly">
                      <TextField
                        label="Room Type"
                        id="outlined-size-normal"
                        variant="outlined"
                        name="roomType"
                        onChange={(event) => handleVarietyChange(index, event)}
                        value={flatVariety.flatType}
                        className={classes.text}
                      />
                    </Box>
                    {flatVarietyDetails.map((flatVarietyDetail, ind) => (
                      <div className={classes.flatarea}>
                        <TextField
                          label="Area of the room"
                          id="outlined-size-normal"
                          variant="outlined"
                          name="area"
                          onChange={(event) =>
                            handleVarietyDetailsChange(index, event)
                          }
                          value={flatVarietyDetail.area}
                          className={classes.text}
                        />
                        <Box display="flex" justifyContent="space-evenly">
                          <TextField
                            label="Price of the room"
                            id="outlined-size-normal"
                            variant="outlined"
                            name="price"
                            onChange={(event) =>
                              handleVarietyDetailsChange(index, event)
                            }
                            value={flatVarietyDetail.price}
                            className={classes.text}
                          />
                          <FormControl
                            variant="outlined"
                            className={classes.formControlRoom}
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Furnished Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Furnished Status"
                              className={classes.select}
                              name="value"
                              onChange={(event) =>
                                handleVarietyDetailsChange(index, event)
                              }
                              value={flatVarietyDetail.value}
                              className={classes.text}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>

                              <MenuItem value="Lakh">Lakh</MenuItem>
                              <MenuItem value="Crore">Crore</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>

                        <Box display="flex" justifyContent="right">
                          <Button
                            variant="contained"
                            // onClick={() => handleRemoveFlatAreas(ind)}
                            className={classes.button}
                          >
                            Delete areas
                          </Button>
                          <Button
                            variant="contained"
                            // onClick={() => handleAddFlatAreas(ind)}
                            className={classes.button}
                          >
                            Add more areas
                          </Button>
                        </Box>
                      </div>
                    ))}
                  </Box>
                ))}
              </Box>
              <Button
                type="contained"
                className={classes.formbutton}
                type="submit"
              >
                Submit
              </Button>
            </form>
          )}

          {plan === "villa" && (
            <form onSubmit={onSubmit}>
              <TextField
                label="Address"
                id="outlined-size-normal"
                variant="outlined"
                name="villaAddress"
                value={villaAddress}
                onChange={onVillaChange}
                className={classes.text}
              />

              <Box display="flex" justifyContent="space-evenly">
                <TextField
                  label="Area"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="villaArea"
                  value={villaArea}
                  onChange={onVillaChange}
                  className={classes.text}
                />
                <TextField
                  label="Average Price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="villaAveragePrice"
                  value={villaAveragePrice}
                  onChange={onVillaChange}
                  className={classes.text}
                />
              </Box>

              <Box display="flex" justifyContent="space-evenly">
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Furnished Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="furnishedStatus"
                    value={furnishedStatus}
                    label="Furnished Status"
                    className={classes.select}
                    onChange={onVillaChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Fully furnished">Fully furnished</MenuItem>
                    <MenuItem value="Semi furnished">Semi furnished</MenuItem>
                    <MenuItem value="Not furnished">Not furnished</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Possession Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="possessionStatus"
                    value={possessionStatus}
                    onChange={onVillaChange}
                    label="Possession Status"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Read to move in">
                      Ready to Move In
                    </MenuItem>
                    <MenuItem value="Not ready to move in">
                      Not ready to move in
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display="flex" justifyContent="space-evenly">
                <TextField
                  label="Price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="villaPrice"
                  value={villaPrice}
                  className={classes.text}
                  onChange={onVillaChange}
                />
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="villaValue"
                    value={villaValue}
                    label="Value"
                    onChange={onVillaChange}
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
              <Box display="flex" justifyContent="space-evenly">
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    No of bedroom
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="villaBedroom"
                    value={villaBedroom}
                    label="No of bedroom"
                    className={classes.select}
                    onChange={onVillaChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Bathroom
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="villaBathroom"
                    value={villaBathroom}
                    label="Bathroom"
                    onChange={onVillaChange}
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                label="About this property"
                id="outlined-size-normal"
                variant="outlined"
                name="villaDescription"
                value={villaDescription}
                className={classes.text}
                onChange={onVillaChange}
              />
              <input type="file" multiple onChange={handleImageChange} />
              <Button
                type="contained"
                className={classes.formbutton}
                type="submit"
              >
                Submit
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default AddPropertyComponent;
