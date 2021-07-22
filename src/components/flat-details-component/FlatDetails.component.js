import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Container } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./FlatDetails.styles";
import Slider from "react-slick";
import firebase from "../../firebase/firebase.utils";

const FlatDetails = ({ id }) => {
  const classes = useStyles();

  const [flatData, setFlatData] = useState({});
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
        setFlatData(res.data());
      });
  }, []);
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
            {flatData?.propertyName}
          </Typography>
          <Typography className={classes.address}>
            {flatData?.address}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            {flatData?.price} {flatData?.value}
          </Typography>
          <Button variant="contained" className={classes.button}>
            Contact Developer
          </Button>
        </Box>
      </Box>
      <Container className={classes.container}>
        <Slider {...settings} className={classes.slidor}>
          {flatData?.images?.map((image) => (
            <div className={classes.imgDiv}>
              <img className={classes.img} src={image} />
            </div>
          ))}
        </Slider>
      </Container>

      <Box display="flex" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {flatData?.area} sq.ft
          </Typography>
          <Typography>Build Up Area</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            ₹{flatData?.averagePrice} K/sq.ft
          </Typography>
          <Typography>Avg Price</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>{flatData?.facing}</Typography>
          <Typography>Facing</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {flatData?.furnishedStatus}
          </Typography>
          <Typography>Furnishing</Typography>
        </Box>
      </Box>
      <Container>
        <Grid container>
          <Grid item md={8} className={classes.overviewDiv}>
            <Typography variant="h6" className={classes.overview}>
              Overview
            </Typography>
            <div>
              <Box
                display="flex"
                mt={2}
                mb={2}
                justifyContent="left"
                alignItems="center"
                className={classes.ammenities}
              >
                <Box mr={3}>
                  <Typography className={classes.overviewheader}>
                    Brokerage
                  </Typography>
                  <Typography>{flatData?.brokerage}</Typography>
                </Box>
                <Box ml={3}>
                  <Typography className={classes.overviewheader}>
                    Price
                  </Typography>
                  <Typography>
                    {flatData?.price} {flatData?.value}
                  </Typography>
                </Box>
              </Box>

              <Box
                display="flex"
                mt={2}
                mb={2}
                justifyContent="left"
                alignItems="center"
                className={classes.ammenities}
              >
                <Box mr={3}>
                  <Typography className={classes.overviewheader}>
                    Bedroom
                  </Typography>
                  <Typography>{flatData?.roomType}</Typography>
                </Box>
                <Box ml={3}>
                  <Typography className={classes.overviewheader}>
                    Parking
                  </Typography>
                  <Typography>{flatData?.parking}</Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                mt={2}
                mb={2}
                justifyContent="left"
                alignItems="center"
                className={classes.ammenities}
              >
                <Box mr={3}>
                  <Typography className={classes.overviewheader}>
                    Bathroom
                  </Typography>
                  <Typography>{flatData?.bathroom}</Typography>
                </Box>
              </Box>
            </div>
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
        <Grid container>
          <Grid md={8} item>
            <Typography variant="h4" color="primary">
              About
            </Typography>
            <Typography>{flatData?.description}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FlatDetails;
