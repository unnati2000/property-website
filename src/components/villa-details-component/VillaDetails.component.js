import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Container } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./VillaDetails.styles";
import Slider from "react-slick";
import firebase from "../../firebase/firebase.utils";
import ReactMapGL, { Marker } from "react-map-gl";
import parse from "html-react-parser";

const VillaDetails = ({ id }) => {
  const classes = useStyles();

  const [villaData, setVillaData] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  const description = villaData?.description || "";
  useEffect(() => {
    firebase
      .firestore()
      .collection("property")
      .doc(id)
      .get()
      .then((res) => {
        setVillaData(res.data());
        setViewport({
          latitude: res.data().latitude,
          longitude: res.data().longitude,
          zoom: 15,
        });
      });
  }, [id]);

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
            {villaData?.villaBedroom} BHK Independent House
          </Typography>
          <Typography className={classes.address}>
            {villaData?.address?.areaName}, {villaData?.address?.city},
            {villaData?.address?.district}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            ₹{villaData?.price} {villaData?.value}
          </Typography>
          <Button variant="contained" className={classes.button}>
            Contact Agent
          </Button>
        </Box>
      </Box>
      <Container className={classes.container}>
        <Slider {...settings} className={classes.slidor}>
          {villaData?.images?.map((image) => (
            <div className={classes.imgDiv}>
              <img className={classes.img} alt={image} src={image} />
            </div>
          ))}
        </Slider>
      </Container>

      <Box display="flex" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {villaData?.area} sq.ft
          </Typography>
          <Typography>Build Up Area</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            ₹{villaData?.averagePrice} K/sq.ft
          </Typography>
          <Typography>Avg Price</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>{villaData?.facing}</Typography>
          <Typography>Facing</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {villaData?.furnishedStatus}
          </Typography>
          <Typography>Furnishing</Typography>
        </Box>
      </Box>
      <Container>
        <Grid container>
          <Grid item md={8} className={classes.overviewDiv}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.overview}
            >
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
                  <Typography>{villaData?.brokerage}</Typography>
                </Box>
                <Box ml={3}>
                  <Typography className={classes.overviewheader}>
                    Price
                  </Typography>
                  <Typography>
                    {villaData?.price} {villaData?.value}
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
                  <Typography>{villaData?.villaBedroom} Bedroom</Typography>
                </Box>
                <Box mr={3}>
                  <Typography className={classes.overviewheader}>
                    Bathroom
                  </Typography>
                  <Typography>{villaData?.villaBathroom} Bathroom</Typography>
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item md={4} className={classes.map}>
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              onViewportChange={setViewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API}
            >
              <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
              >
                <div className="marker temporary-marker">
                  <span></span>
                </div>
              </Marker>
            </ReactMapGL>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container>
          <Grid md={8} item className={classes.overviewDiv}>
            <Typography variant="h4" color="primary">
              About
            </Typography>
            <Typography>{parse(description)}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VillaDetails;
