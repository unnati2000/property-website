import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Tabs,
  Tab,
} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./ProjectDetails.styles";
import Slider from "react-slick";
import firebase from "../../firebase/firebase.utils";
import Ammenities from "../ammenities/Ammenities.component";

const FlatDetails = ({ id }) => {
  const classes = useStyles();

  const [projectData, setProjectData] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("property")
      .doc(id)
      .get()
      .then((res) => {
        setProjectData(res.data());
      });
  }, []);

  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Box
        mt={3}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box>
          <Typography variant="h4" color="primary">
            propertyName
          </Typography>
          <Typography className={classes.address}>Address</Typography>
        </Box>
        <Box>
          <Typography variant="h6">By XYZ group</Typography>
          <Button variant="contained" className={classes.button}>
            Contact Developer
          </Button>
        </Box>
      </Box>
      <Container className={classes.container}>
        <Slider {...settings} className={classes.slidor}>
          <div></div>
        </Slider>
      </Container>

      <Box display="flex" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography className={classes.grey}>xyz sq.ft</Typography>
          <Typography>Configurations</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>₹xyz K/sq.ft</Typography>
          <Typography>Possession Starts</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>xyz</Typography>
          <Typography>Average Price</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>xyz</Typography>
          <Typography>Carpet Size</Typography>
        </Box>
      </Box>
      <Container>
        <Grid container>
          <Grid item md={8} className={classes.overviewDiv}>
            <Container>
              <Typography variant="h5" color="primary">
                About
              </Typography>
              <Typography>
                Property for sale in Mira Bhayandar, Mumbai. This 1 BHK
                Independent House is located in Mumbai's most promising
                location. This property is posted by owner and there is no
                brokerage involved. This Independent House's price is Rs 70.0 L.
                Homebuyers will also need to pay Rs 100 towards maintenance. The
                built-up area is 350 Square feet. This unit enjoys a good view
                and is a West facing property. Regular water supply is
                available. This Independent House is strategically located
                within close distance of famous
              </Typography>
            </Container>
          </Grid>
          <Grid item md={4} className={classes.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="300"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Disabled" {...a11yProps(1)} />
          <Tab label="Active" {...a11yProps(2)} />
        </Tabs>
      </Container>
      <Container>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Container>
      {<Ammenities ammenity="Lift" />}
    </div>
  );
};

export default FlatDetails;
