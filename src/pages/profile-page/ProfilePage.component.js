import React, { useEffect } from "react";
import useStyles from "./ProfilePage.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Grid, Typography, Box } from "@material-ui/core";
import AgentEnquiry from "../../components/agent-enquiry-component/AgentEnquiry.component";
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
      <Box p={2}>
        <Typography color="primary" variant="h3">
          Enquiries
        </Typography>
      </Box>

      <Grid container spacing={3} className={classes.grid}>
        <Grid md={4} item>
          <AgentEnquiry />
        </Grid>
        <Grid md={4} item>
          <AgentEnquiry />
        </Grid>
        <Grid md={4} item>
          <AgentEnquiry />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
