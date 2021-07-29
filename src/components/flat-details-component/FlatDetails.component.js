import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Container } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./FlatDetails.styles";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase.utils";
import parse from "html-react-parser";
import ReactMapGL from "react-map-gl";

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
      })
      .catch((err) => console.log(err));
  }, []);

  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  const description = flatData?.description || "";
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
            {/* {flatData?.address} */}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            {flatData?.price} {flatData?.value}
          </Typography>
          <Link to={"/" + id + "/enquiry"}>
            <Button variant="contained" className={classes.button}>
              Contact Developer
            </Button>
          </Link>
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
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              onViewportChange={(viewport) => setViewport(viewport)}
              mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API}
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

            <Typography>{parse(description)}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FlatDetails;
