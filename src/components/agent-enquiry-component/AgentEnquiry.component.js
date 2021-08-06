import React, { useEffect, useState } from "react";
import { Card, Grid, Typography, Box, Button } from "@material-ui/core";
import { useAuth } from "../../context/auth-context";
import useStyles from "./AgentEnquiry.styles";
import firebase from "../../firebase/firebase.utils";

const AgentEnquiry = () => {
  const classes = useStyles();

  const [enquiries, setEnquiries] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    // firebase
    //   .firestore()
    //   .collection("enquiry")
    //   .where("agentUserId", "==", currentUser?.userId)
    //   .get()
    //   .then((res) => console.log(res.docs.map((item) => console.log(item))))
    //   .catch((err) => console.log(err));
  }, [currentUser]);
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid md={3}>
          <img
            src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
            className={classes.img}
          />
        </Grid>
        <Grid md={9}>
          <Box mr={2} ml={2} mt={2}>
            <Typography variant="h4" color="primary">
              Property Name
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-around"
            mt={2}
            mr={2}
            ml={2}
          >
            <Box>
              <Typography variant="h6" className={classes.grey}>
                Property Type
              </Typography>
              <Typography>Flat</Typography>
            </Box>
            <Box>
              {" "}
              <Typography variant="h6" className={classes.grey}>
                Price
              </Typography>
              <Typography>Flat</Typography>
            </Box>
            <Box>
              <Typography variant="h6" className={classes.grey}>
                City
              </Typography>
              <Typography>Flat</Typography>
            </Box>
          </Box>

          <Box m={2} className={classes.greyBox}>
            <Typography variant="h5" color="primary">
              Enquiry Details
            </Typography>
            <Box display="flex" justifyContent="space-between" mr={5}>
              <Box>
                <Typography className={classes.name}>Name</Typography>
                <Typography></Typography>
              </Box>
              <Box>
                <Typography className={classes.name}>Phone Number</Typography>
                <Typography></Typography>
              </Box>
              <Box>
                <Typography className={classes.name}>Email</Typography>
                <Typography></Typography>
              </Box>
            </Box>
            <Box>
              <Typography className={classes.roomType} color="primary">
                Room Type
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Button className={classes.roomButton}> 1 BHK </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AgentEnquiry;
