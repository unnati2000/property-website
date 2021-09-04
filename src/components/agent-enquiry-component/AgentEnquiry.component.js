import React, { useEffect, useState } from "react";
import { Card, Grid, Typography, Box, Divider } from "@material-ui/core";
import useStyles from "./AgentEnquiry.styles";
import { Link } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaShower, FaParking } from "react-icons/fa";
import { useAuth } from "../../context/auth-context";
import firebase from "../../firebase/firebase.utils";

const AgentEnquiry = ({ enquiry }) => {
  const classes = useStyles();

  const [agent, setAgent] = useState({});

  const { currentUser } = useAuth();
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .where("userId", "==", enquiry?.agentUserId)
      .get()
      .then((res) => {
        const result = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }))[0];
        setAgent(result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(enquiry?.agentUserDocId);

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid md={8} item>
          <Box m={1}>
            <Typography className={classes.name} color="primary">
              {currentUser?.role === "agent" ? enquiry?.name : agent?.name}
            </Typography>
            <Typography className={classes.phone}>
              {currentUser?.role === "agent"
                ? enquiry?.phoneNumber
                : agent?.phoneNumber}
            </Typography>
          </Box>
          <Divider />
          <Box m={1}>
            <Link
              className={classes.link}
              to={"/" + enquiry?.propertyType + "/" + enquiry?.propertyDocId}
            >
              <Typography color="primary" className={classes.propertyName}>
                {enquiry?.propertyName}
              </Typography>
            </Link>
            <Typography className={classes.address}>
              {enquiry?.address?.areaName}, {enquiry?.address?.city},
              {enquiry?.address?.district}
            </Typography>
            <Box display="flex" justifyContent="space-between" m={2}>
              <div className={classes.icon}>
                <BiBed />
                <Typography className={classes.gray}>
                  {enquiry?.bedroom}
                </Typography>
              </div>
              <div className={classes.icon}>
                <FaShower />
                <Typography className={classes.gray}>
                  {enquiry?.bathroom} bathroom
                </Typography>
              </div>
              <div className={classes.icon}>
                <FaParking />
                <Typography className={classes.gray}>
                  {enquiry?.parking}
                </Typography>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid md={4} item>
          <img src={enquiry?.image} alt="image" className={classes.img} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AgentEnquiry;
