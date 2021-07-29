import React, { useEffect } from "react";
import useStyles from "./ProfilePage.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Grid } from "@material-ui/core";
import Profile from "../../components/profile-component/Profile.component";

const ProfilePage = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);
  return (
    <div className={classes.rootDiv}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid md={8}></Grid>
        <Grid md={4}>
          <Profile />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
