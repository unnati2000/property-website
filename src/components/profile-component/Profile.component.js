import React from "react";
import useStyles from "./Profile.styles";
import { useAuth } from "../../context/auth-context";
import { FaBirthdayCake, FaToolbox } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Card, Typography, Button, Grid, Box } from "@material-ui/core";

const Profile = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item md={3}>
          <img
            src="https://www.jbpainting.com.au/wp-content/uploads/2016/08/gravatar-m.jpg"
            alt="profile"
            className={classes.img}
          />

          {currentUser?.packageName === "Pro Developer Pack" && (
            <Button className={classes.pack}>Pro</Button>
          )}
        </Grid>
        <Grid md={9} className={classes.contentDiv}>
          <Typography variant="h6" className={classes.name}>
            {currentUser?.name}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            className={classes.box}
          >
            <div>
              <Typography className={classes.grey}>Phone Number</Typography>
              <Typography className={classes.date}>
                {currentUser?.phoneNumber}
              </Typography>
            </div>
            <div>
              <Typography className={classes.grey}>Created At</Typography>
              <Typography className={classes.date}>
                {currentUser?.dateCreated}
              </Typography>
            </div>
          </Box>

          <Button color="white" variant="contained" className={classes.button}>
            Edit Profile
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Profile;
