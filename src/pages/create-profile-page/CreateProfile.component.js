import React, { useEffect, useState } from "react";
import useStyles from "./CreateProfile.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Typography, TextField, Button } from "@material-ui/core";
import { addProfileToAccount } from "../../services/firebase.services";

const CreateProfile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();

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
          label="Address"
          id="outlined-size-normal"
          variant="outlined"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={classes.text}
        />
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
