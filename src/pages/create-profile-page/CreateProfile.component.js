import React, { useEffect, useState } from "react";
import useStyles from "./CreateProfile.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Typography, TextField, Button, Box } from "@material-ui/core";
import axios from "axios";
import { storage } from "../../firebase/firebase.utils";
import { addProfileToAccount } from "../../services/firebase.services";

const CreateProfile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [imageUrl, setURL] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();

  const [address, setAddress] = useState({
    areaName: "",
    city: "",
    district: "",
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
    if (currentUser?.name) {
      history.push("/");
    }
  }, [currentUser, history]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const ref = storage.ref(`/profilePic/${profilePic.name}`);

    const response = await axios.get(
      `https://geocode.xyz/${address.city} ${address.district}?json=1`
    );

    const latitude = parseFloat(response.data.latt);
    const longitude = parseFloat(response.data.longt);

    const uploadImage = ref.put(profilePic);
    await uploadImage.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        setURL(url);
      });
    });

    await addProfileToAccount(
      currentUser?.docId,
      name,
      address,
      pincode,
      imageUrl,
      latitude,
      longitude
    );

    if (currentUser?.role === "user") {
      history.push("/");
    } else {
      history.push("/package");
    }
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
