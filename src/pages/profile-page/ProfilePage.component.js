import React, { useEffect, useState } from "react";
import useStyles from "./ProfilePage.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Grid, Typography, Box } from "@material-ui/core";
import firebase from "../../firebase/firebase.utils";
import AgentEnquiry from "../../components/agent-enquiry-component/AgentEnquiry.component";

const ProfilePage = () => {
  const classes = useStyles();

  const { currentUser } = useAuth();

  const [enquiries, setEnquiries] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }

    if (currentUser?.role === "agent") {
      firebase
        .firestore()
        .collection("enquiry")
        .where("agentUserDocId", "==", currentUser?.docId)
        .get()
        .then((res) => {
          const result = res.docs.map((item) => ({
            ...item.data(),
            docId: item.id,
          }));
          setEnquiries(result);
        })
        .catch((err) => console.log(err));
    }

    if (currentUser?.role === "user") {
      firebase
        .firestore()
        .collection("enquiry")
        .where("userDocId", "==", currentUser?.docId)
        .get()
        .then((res) => {
          const result = res.docs.map((item) => ({
            ...item.data(),
            docId: item.id,
          }));
          setEnquiries(result);
        })
        .catch((err) => console.log(err));
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
        {enquiries?.length ? (
          enquiries?.map((enquiry) => (
            <Grid md={4} item>
              <AgentEnquiry enquiry={enquiry} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="primary">
            No enquiries found
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default ProfilePage;
