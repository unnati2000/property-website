import React, { useEffect, useState } from "react";
import useStyles from "./EditProfile.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Typography, TextField, Button, Box } from "@material-ui/core";
import axios from "axios";
import { storage } from "../../firebase/firebase.utils";
import { addProfileToAccount } from "../../services/firebase.services";

const CreateProfile = () => {
  const classes = useStyles();

  const { currentUser } = useAuth();
  const [name, setName] = useState(currentUser?.name);
  const [pincode, setPincode] = useState(currentUser?.pincode);
  const [profilePic, setProfilePic] = useState(currentUser?.profilePic);
  const [imageUrl, setURL] = useState("");

  const history = useHistory();

  const [address, setAddress] = useState({
    areaName: currentUser?.address?.areaName,
    city: currentUser?.address?.city,
    district: currentUser?.address?.district,
  });

  const { areaName, city, district } = address;

  const onAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.profileDiv}>
      <form className={classes.form} onSubmit={onSubmit}>
        <img
          src={
            profilePic
              ? URL.createObjectURL(profilePic)
              : "https://www.gravatar.com/avatar/4f28f38e798f29c5d75b85c883327d09?d=mm&r=g&s=190"
          }
          className={classes.uploadImage}
        />
        <TextField
          label="Name"
          id="outlined-size-normal"
          variant="outlined"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          label="Pincode"
          id="outlined-size-normal"
          variant="outlined"
          name="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className={classes.text}
        />
        <br />

        <input type="file" onChange={onImageChange} />

        <Button variant="contained" type="submit" className={classes.submit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateProfile;
