import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import { useAuth } from "../../context/auth-context";
import useStyles from "./AgentEnquiry.styles";
import { Link } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaShower, FaParking } from "react-icons/fa";
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
        <Grid md={8}>
          <Box m={1}>
            <Typography className={classes.name} color="primary">
              Name
            </Typography>
            <Typography className={classes.phone}>Phone Number</Typography>
          </Box>
          <Divider />
          <Box m={1}>
            <Link className={classes.link}>
              <Typography color="primary" className={classes.propertyName}>
                PropertyName
              </Typography>
            </Link>
            <Typography className={classes.address}>Address</Typography>
            <Box display="flex" justifyContent="space-between" m={2}>
              <div className={classes.icon}>
                <BiBed />
                <Typography className={classes.gray}>2 BHK</Typography>
              </div>
              <div className={classes.icon}>
                <FaShower />
                <Typography className={classes.gray}>1 Bathroom</Typography>
              </div>
              <div className={classes.icon}>
                <FaParking />
                <Typography className={classes.gray}>Parking</Typography>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid md={4}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="image"
            className={classes.img}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AgentEnquiry;
