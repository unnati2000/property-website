import React, { useEffect, useState } from "react";
import useStyles from "./CreateProfile.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Typography, TextField, Button, Box } from "@material-ui/core";
import { addProfileToAccount } from "../../services/firebase.services";

const CreateProfile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
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
    await addProfileToAccount(currentUser?.docId, name, address, pincode);
  };
  return (
    <div className={classes.profileDiv}>
      <Typography variant="h3" className={classes.profileHeader}>
        Create your profile first
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
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

        <Button variant="contained" type="submit" className={classes.submit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateProfile;
