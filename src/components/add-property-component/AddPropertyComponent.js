import axios from "axios";
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
import {
  addFlat,
  addVilla,
  addProject,
} from "../../services/firebase.services";
import firebase from "../../firebase/firebase.utils";
import { useHistory } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ArrangeImages from "../arrange-images/ArrangeImages.component.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const AddPropertyComponent = ({ plan }) => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  const [flatVarietyDetails, setFlatVarietyDetails] = useState([
    {
      roomType: "",
      area: "",
      price: "",
      value: "",
    },
  ]);

  const [address, setAddress] = useState({
    areaName: "",
    city: "",
    district: "",
  });

  const { areaName, city, district } = address;

  const onAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  let oneRK = [];
  let oneBHK = [];
  let twoBHK = [];
  let threeBHK = [];
  let fourBHK = [];
  let fiveBHK = [];

  const [images, setImages] = useState([]);
  const urls = [];

  const history = useHistory();

  const [flatData, setFlatData] = useState({
    propertyName: "",
    roomType: "",
    price: "",
    value: "",
    area: "",
    parking: "",
    averagePrice: "",
    facing: "",
    flatFurnishedStatus: "",
    flatBathroom: "",
    flatBrokerage: "",
  });

  const [flatDescription, setflatDescription] = useState("");
  const [projectDescription, setprojectDescription] = useState("");
  const [villaDescription, setvillaDescription] = useState("");

  const [villaData, setVillaData] = useState({
    villaArea: "",
    villaAveragePrice: "",
    furnishedStatus: "",
    possessionStatus: "",
    villaPrice: "",
    villaValue: "",
    villaBedroom: "",
    villaBathroom: "",
    brokerage: "",
    villaFacing: "",
  });

  const [projectData, setProjectData] = useState({
    projectPropertyName: "",
    listOfBHK: "",
    projectPossessionStatus: "",
    projectAveragePrice: "",
    minCarpetSize: "",
    maxCarpetSize: "",
    builderName: "",
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
    roomType,
    price,
    value,
    area,
    parking,
    averagePrice,
    facing,
    flatFurnishedStatus,
    flatBathroom,
    flatBrokerage,
  } = flatData;

  const {
    projectPropertyName,
    listOfBHK,
    projectPossessionStatus,
    projectAveragePrice,
    minCarpetSize,
    maxCarpetSize,
    builderName,
  } = projectData;

  const {
    villaArea,
    villaAveragePrice,
    furnishedStatus,
    possessionStatus,
    villaPrice,
    villaValue,
    villaBedroom,
    villaBathroom,
    villaFacing,
    brokerage,
  } = villaData;

  const onFlatChange = (e) => {
    setFlatData({ ...flatData, [e.target.name]: e.target.value });
  };

  const onVillaChange = (e) => {
    setVillaData({ ...villaData, [e.target.name]: e.target.value });
  };

  const onProjectChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  function handleVarietyDetailsChange(i, event) {
    const values = [...flatVarietyDetails];

    if (event.target.name === "roomType") {
      values[i].roomType = event.target.value;
    }
    if (event.target.name === "area") {
      values[i].area = event.target.value;
    }
    if (event.target.name === "price") {
      values[i].price = event.target.value;
    }
    if (event.target.name === "value") {
      values[i].value = event.target.value;
    }

    setFlatVarietyDetails(values);
  }

  function handleVarietyAdd() {
    const values = [...flatVarietyDetails];
    values.push({ value: null });
    setFlatVarietyDetails(values);
  }

  const handleVarietyRemove = (index) => {
    const values = [...flatVarietyDetails];
    values.splice(index, 1);
    setFlatVarietyDetails(values);
  };

  const handleImageChange = (e) => {
    images.splice(0, images?.length);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    flatVarietyDetails.map((flatVarietyDetail) => {
      if (flatVarietyDetail.roomType === "1 RK") {
        oneRK.push(flatVarietyDetail);
      }
      if (flatVarietyDetail.roomType === "1 BHK") {
        oneBHK.push(flatVarietyDetail);
      }
      if (flatVarietyDetail.roomType === "2 BHK") {
        twoBHK.push(flatVarietyDetail);
      }
      if (flatVarietyDetail.roomType === "3 BHK") {
        threeBHK.push(flatVarietyDetail);
      }
      if (flatVarietyDetail.roomType === "4 BHK") {
        fourBHK.push(flatVarietyDetail);
      }
      if (flatVarietyDetail.roomType === "5 BHK") {
        fiveBHK.push(flatVarietyDetail);
      }
    });

    if (plan === "flat" && images.length > 4) {
      toast("Not allowed to upload more than 4 photos", { type: "error" });
      console.log("Not allowed to upload more than 4 images");
    } else if (plan === "project" && images.length > 8) {
      toast("Not allowed to upload more than 4 photos", { type: "error" });
      console.log("Not allowed to add more than 8 images");
    } else if (plan === "villa" && images.length > 10) {
      toast("Not allowed to upload more than 4 photos", { type: "error" });
      console.log("Not allowred to add more than 10 images");
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
            const response = await axios.get(
              `https://geocode.xyz/${address.city} ${address.district}?json=1&auth=${process.env.REACT_APP_GEOCODE_API}`
            );

            const latitude = parseFloat(response.data.latt);
            const longitude = parseFloat(response.data.longt);

            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            urls.push(downloadURL);
            if (urls.length === images.length) {
              if (plan === "flat") {
                await addFlat(
                  plan,
                  propertyName,
                  address,
                  latitude,
                  longitude,
                  roomType,
                  price,
                  value,
                  area,
                  parking,
                  averagePrice,
                  facing,
                  flatDescription,
                  urls,
                  flatFurnishedStatus,
                  flatBathroom,
                  flatBrokerage,
                  currentUser?.userId,
                  currentUser?.docId
                );
                toast("Added property successfully", { type: "success" });
                history.push("/");
              } else if (plan === "project") {
                await addProject(
                  plan,
                  builderName,
                  projectPropertyName,
                  address,
                  latitude,
                  longitude,
                  listOfBHK,
                  projectPossessionStatus,
                  projectAveragePrice,
                  minCarpetSize,
                  maxCarpetSize,
                  urls,
                  oneRK,
                  oneBHK,
                  twoBHK,
                  threeBHK,
                  fourBHK,
                  fiveBHK,
                  ammenities,
                  projectDescription,
                  currentUser?.userId,
                  currentUser?.docId
                );
                toast("Added property successfully", { type: "success" });
                history.push("/");
              } else if (plan === "villa") {
                await addVilla(
                  plan,
                  address,
                  latitude,
                  longitude,
                  villaArea,
                  villaAveragePrice,
                  furnishedStatus,
                  possessionStatus,
                  villaPrice,
                  villaValue,
                  villaBedroom,
                  villaBathroom,
                  villaDescription,
                  villaFacing,
                  brokerage,
                  urls,
                  ammenities,
                  currentUser?.userId,
                  currentUser?.docId
                );
                toast("Added property successfully", { type: "success" });
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
      <ToastContainer />

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
                label="Area Name"
                id="outlined-size-normal"
                variant="outlined"
                name="areaName"
                value={areaName}
                onChange={onAddressChange}
                className={classes.text}
              />
              <Box display="flex" justifyContent="space-around">
                <TextField
                  label="City"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="city"
                  value={city}
                  onChange={onAddressChange}
                  className={classes.text}
                />
                <TextField
                  label="District"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="district"
                  value={district}
                  onChange={onAddressChange}
                  className={classes.text}
                />
              </Box>

              <Box display="flex" justifyContent="space-around">
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
                    <MenuItem value="1 RK">1 RK</MenuItem>
                    <MenuItem value="1 BHK">1 BHK</MenuItem>
                    <MenuItem value="2 BHK">2 BHK</MenuItem>
                    <MenuItem value="3 BHK">3 BHK</MenuItem>
                    <MenuItem value="4 BHK">4 BHK</MenuItem>
                    <MenuItem value="5 BHK">5 BHK</MenuItem>
                  </Select>
                </FormControl>

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
                    name="flatFurnishedStatus"
                    value={flatFurnishedStatus}
                    onChange={onFlatChange}
                    label="Furnished Status"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Semi furnished">Semi furnished</MenuItem>
                    <MenuItem value="Fully furnished">Fully furnished</MenuItem>
                    <MenuItem value="Not furnished">Not furnished</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box display="flex" justifyContent="space-around">
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
                    name="flatBathroom"
                    value={flatBathroom}
                    label="Bathroom"
                    onChange={onFlatChange}
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
                <TextField
                  label="Flat brokerage"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="flatBrokerage"
                  value={flatBrokerage}
                  onChange={onFlatChange}
                  className={classes.text}
                />
              </Box>
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
                  <Box mt={3} mb={3}>
                    <CKEditor
                      editor={ClassicEditor}
                      className={classes.ckeditor}
                      data={flatDescription}
                      onChange={(e, editor) => {
                        const data = editor.getData();
                        setflatDescription(data);
                      }}
                    />
                  </Box>
                </Box>
                <Box m={2}>
                  <Typography color="primary">
                    Enter less than 4 photos
                  </Typography>
                </Box>

                <input type="file" multiple onChange={handleImageChange} />
              </Box>
              {images?.length > 0 && (
                <ArrangeImages images={images} setImages={setImages} />
              )}
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
                label="Builder's Name"
                id="outlined-size-normal"
                variant="outlined"
                name="builderName"
                value={builderName}
                onChange={onProjectChange}
                className={classes.text}
              />
              <TextField
                label="Building/Property Name"
                id="outlined-size-normal"
                variant="outlined"
                name="projectPropertyName"
                value={projectPropertyName}
                onChange={onProjectChange}
                className={classes.text}
              />
              <TextField
                label="Area Name"
                id="outlined-size-normal"
                variant="outlined"
                name="areaName"
                value={areaName}
                onChange={onAddressChange}
                className={classes.text}
              />

              <Box display="flex" justifyContent="space-around">
                <TextField
                  label="City"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="city"
                  value={city}
                  onChange={onAddressChange}
                  className={classes.text}
                />
                <TextField
                  label="District"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="district"
                  value={district}
                  onChange={onAddressChange}
                  className={classes.text}
                />
              </Box>

              <TextField
                label="Apartments"
                id="outlined-size-normal"
                variant="outlined"
                name="listOfBHK"
                value={listOfBHK}
                onChange={onProjectChange}
                className={classes.text}
              />
              <Box display="flex" justifyContent="space-evenly">
                <TextField
                  id="outlined-size-normal"
                  variant="outlined"
                  type="date"
                  name="projectPossessionStatus"
                  value={projectPossessionStatus}
                  onChange={onProjectChange}
                  className={classes.text}
                />
                <TextField
                  label="Avg price"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="projectAveragePrice"
                  value={projectAveragePrice}
                  onChange={onProjectChange}
                  className={classes.text}
                />
              </Box>
              <Box display="flex" justifyContent="space-evenly">
                <TextField
                  label="Min carpet size"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="minCarpetSize"
                  value={minCarpetSize}
                  onChange={onProjectChange}
                  className={classes.text}
                />
                <TextField
                  label="Max carpet size"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="maxCarpetSize"
                  value={maxCarpetSize}
                  onChange={onProjectChange}
                  className={classes.text}
                />
              </Box>
              <div>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.ammenitiesHeader}
                >
                  {" "}
                  Choose Ammenities
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
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

                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Lift"
                      />
                    }
                    label="Elevator"
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
              </div>

              <Box mt={3}>
                <Typography variant="h5" color="primary">
                  Flat Details
                </Typography>

                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() => handleVarietyAdd()}
                >
                  Add flat type
                </Button>

                {flatVarietyDetails.map((flatVarietyDetail, index) => (
                  <Box className={classes.flatDetails}>
                    <Box display="flex" justifyContent="space-evenly">
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
                          label="Room type"
                          className={classes.select}
                          name="roomType"
                          value={flatVarietyDetail.roomType}
                          onChange={(event) =>
                            handleVarietyDetailsChange(index, event)
                          }
                          className={classes.text}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="1 RK">1 RK</MenuItem>
                          <MenuItem value="1 BHK">1 BHK</MenuItem>
                          <MenuItem value="2 BHK">2 BHK</MenuItem>
                          <MenuItem value="3 BHK">3 BHK</MenuItem>
                          <MenuItem value="4 BHK">4 BHK</MenuItem>
                          <MenuItem value="5 BHK">5 BHK</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        label="Area of the room"
                        id="outlined-size-normal"
                        variant="outlined"
                        name="area"
                        value={flatVarietyDetail.area}
                        className={classes.text}
                        onChange={(event) =>
                          handleVarietyDetailsChange(index, event)
                        }
                      />
                    </Box>

                    <Box display="flex" justifyContent="space-evenly">
                      <TextField
                        label="Price of the room"
                        id="outlined-size-normal"
                        variant="outlined"
                        name="price"
                        value={flatVarietyDetail.price}
                        onChange={(event) =>
                          handleVarietyDetailsChange(index, event)
                        }
                        className={classes.text}
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
                          label="Furnish Status"
                          className={classes.select}
                          name="value"
                          value={flatVarietyDetail.value}
                          onChange={(event) =>
                            handleVarietyDetailsChange(index, event)
                          }
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
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      onClick={(index) => handleVarietyRemove(index)}
                    >
                      <Button variant="contained">x</Button>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box mt={3} mb={3}>
                <CKEditor
                  editor={ClassicEditor}
                  data={projectDescription}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    setprojectDescription(data);
                  }}
                />
              </Box>
              <Box mt={2} mb={2} textAlign="center">
                <Typography color="primary">
                  Enter less than 8 photos
                </Typography>
                <input type="file" multiple onChange={handleImageChange} />
              </Box>
              {images?.length > 0 && (
                <ArrangeImages images={images} setImages={setImages} />
              )}
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
                label="Area Name"
                id="outlined-size-normal"
                variant="outlined"
                name="areaName"
                value={areaName}
                onChange={onAddressChange}
                className={classes.text}
              />

              <Box display="flex" justifyContent="space-around">
                <TextField
                  label="City"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="city"
                  value={city}
                  onChange={onAddressChange}
                  className={classes.text}
                />
                <TextField
                  label="District"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="district"
                  value={district}
                  onChange={onAddressChange}
                  className={classes.text}
                />
              </Box>
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
              <Box display="flex" justifyContent="space-evenly">
                <FormControl
                  variant="outlined"
                  className={classes.formControlRoom}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Facing
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="villaFacing"
                    value={villaFacing}
                    label="Bathroom"
                    onChange={onVillaChange}
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
                  label="Brokerage in percentage"
                  id="outlined-size-normal"
                  variant="outlined"
                  name="brokerage"
                  value={brokerage}
                  className={classes.text}
                  onChange={onVillaChange}
                />
              </Box>
              <div>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.ammenitiesHeader}
                >
                  Choose Ammenities
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
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

                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChangeAmmenitiesOn}
                        color="primary"
                        value="Lift"
                      />
                    }
                    label="Elevator"
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
              </div>

              <Box mt={3} mb={3}>
                <CKEditor
                  editor={ClassicEditor}
                  data={villaDescription}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    setvillaDescription(data);
                  }}
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box m={2}>
                  <Typography color="primary">
                    Enter less than 10 photos
                  </Typography>
                </Box>
                <input type="file" multiple onChange={handleImageChange} />
              </Box>
              {images?.length > 0 && (
                <ArrangeImages images={images} setImages={setImages} />
              )}

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
