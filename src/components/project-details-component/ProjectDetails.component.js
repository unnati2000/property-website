import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Tabs,
  Tab,
} from "@material-ui/core";
import useStyles from "./ProjectDetails.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firebase from "../../firebase/firebase.utils";
import Ammenities from "../ammenities/Ammenities.component";
import ReactMapGL, { Marker } from "react-map-gl";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const ProjectDetails = ({ id }) => {
  const classes = useStyles();

  const [projectData, setProjectData] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { currentUser } = useAuth();
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  const description = projectData?.description || "";

  useEffect(() => {
    firebase
      .firestore()
      .collection("property")
      .doc(id)
      .get()
      .then((res) => {
        setProjectData(res.data());
        setViewport({
          latitude: res.data().latitude,
          longitude: res.data().longitude,
          zoom: 15,
        });
      });
  }, [id]);

  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            {projectData?.project}
          </Typography>
          <Typography className={classes.address}>
            {projectData?.address?.areaName}, {projectData?.address?.city}{" "}
            {projectData?.address?.district}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">{projectData?.builderName}</Typography>
          <Typography variant="h6">{projectData?.builders}</Typography>
          {currentUser?.userId !== projectData?.userId && (
            <Link to={"/enquiry/" + id + "/" + projectData?.userDocId}>
              <Button variant="contained" className={classes.button}>
                Contact Developer
              </Button>
            </Link>
          )}
        </Box>
      </Box>
      <Container className={classes.container}>
        <Slider {...settings} className={classes.slidor}>
          {projectData?.images?.map((image) => (
            <div className={classes.imgDiv}>
              <img className={classes.img} src={image} alt={image} />
            </div>
          ))}
        </Slider>
      </Container>

      <Box display="flex" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {projectData?.listOfBHK} BHK
          </Typography>
          <Typography>Configurations</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {projectData?.possessionStatus}
          </Typography>
          <Typography>Possession Starts</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            ₹ {projectData?.averagePrice} K/sq.ft
          </Typography>
          <Typography>Average Price</Typography>
        </Box>
        <Box textAlign="center">
          <Typography className={classes.grey}>
            {projectData?.minCarpetSize} sq.ft - {projectData?.maxCarpetSize}
            sq.ft
          </Typography>
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
              <Typography>{parse(description)}</Typography>
            </Container>
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
        <Box mt={4} mb={2}>
          <Typography variant="h4" color="primary">
            Room details
          </Typography>
        </Box>

        {projectData?.oneRK?.length > 0 && (
          <>
            <Container>
              <Typography variant="h5" color="primary">
                1 RK
              </Typography>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                {projectData?.oneRK?.map((data, index) => (
                  <Tab label={data?.area + " sq. ft"} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Container>
            <Container>
              {projectData?.oneRK?.map((data, index) => (
                <TabPanel value={value} index={index}>
                  {data?.price} {data?.value} {data?.roomType}
                </TabPanel>
              ))}
            </Container>
          </>
        )}

        {projectData?.oneBHK?.length > 0 && (
          <>
            <Container>
              <Typography variant="h5" color="primary">
                1 BHK
              </Typography>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                {projectData?.oneBHK?.map((data, index) => (
                  <Tab label={data?.area + " sq. ft"} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Container>
            <Container>
              {projectData?.oneBHK?.map((data, index) => (
                <TabPanel value={value} index={index}>
                  <Box display="flex" justifyContent="left">
                    <div>
                      <Typography className={classes.roomType}>
                        {data?.roomType}
                      </Typography>
                      <Typography className={classes.carpet}>
                        Carpet area{" "}
                        <span className={classes.area}>
                          {data?.area} sq. ft
                        </span>
                      </Typography>
                    </div>
                    <Typography className={classes.price}>
                      ₹ {data?.price}
                      {data?.value}
                    </Typography>
                  </Box>
                </TabPanel>
              ))}
            </Container>
          </>
        )}

        {projectData?.twoBHK?.length > 0 && (
          <>
            <Container>
              <Typography variant="h5" color="primary">
                2 BHK
              </Typography>

              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                {projectData?.twoBHK?.map((data, index) => (
                  <Tab label={data?.area + " sq. ft"} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Container>
            <Container>
              {projectData?.twoBHK?.map((data, index) => (
                <TabPanel value={value} index={index}>
                  <Box display="flex" justifyContent="left">
                    <div>
                      <Typography className={classes.roomType}>
                        {data?.roomType}
                      </Typography>
                      <Typography className={classes.carpet}>
                        Carpet area{" "}
                        <span className={classes.area}>
                          {data?.area} sq. ft
                        </span>
                      </Typography>
                    </div>
                    <Typography className={classes.price}>
                      ₹ {data?.price}
                      {data?.value}
                    </Typography>
                  </Box>
                </TabPanel>
              ))}
            </Container>
          </>
        )}

        {projectData?.threeBHK?.length > 0 && (
          <>
            <Container>
              <Typography variant="h5" color="primary">
                3 BHK
              </Typography>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                {projectData?.threeBHK?.map((data, index) => (
                  <Tab label={data?.area + " sq. ft"} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Container>
            <Container>
              {projectData?.threeBHK.map((data, index) => (
                <TabPanel value={value} index={index}>
                  <Box display="flex" justifyContent="left">
                    <div>
                      <Typography className={classes.roomType}>
                        {data?.roomType}
                      </Typography>
                      <Typography className={classes.carpet}>
                        Carpet area{" "}
                        <span className={classes.area}>
                          {data?.area} sq. ft
                        </span>
                      </Typography>
                    </div>
                    <Typography className={classes.price}>
                      ₹ {data?.price}
                      {data?.value}
                    </Typography>
                  </Box>
                </TabPanel>
              ))}
            </Container>
          </>
        )}
        {projectData?.fourBHK?.length > 0 && (
          <>
            <Container>
              <Typography variant="h5" color="primary">
                4 BHK
              </Typography>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                {projectData?.fourBHK?.map((data, index) => (
                  <Tab label={data?.area + " sq. ft"} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Container>
            <Container>
              {projectData?.fourBHK?.map((data, index) => (
                <TabPanel value={value} index={index}>
                  <Box display="flex" justifyContent="left">
                    <div>
                      <Typography className={classes.roomType}>
                        {data?.roomType}
                      </Typography>
                      <Typography className={classes.carpet}>
                        Carpet area{" "}
                        <span className={classes.area}>
                          {data?.area} sq. ft
                        </span>
                      </Typography>
                    </div>
                    <Typography className={classes.price}>
                      ₹ {data?.price}
                      {data?.value}
                    </Typography>
                  </Box>
                </TabPanel>
              ))}
            </Container>
          </>
        )}

        {projectData?.fiveBHK?.length > 0 && (
          <>
            <Container>
              <Typography variant="h5" color="primary">
                5 BHK
              </Typography>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                {projectData?.fiveBHK?.map((data, index) => (
                  <Tab label={data?.area + " sq. ft"} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Container>
            <Container>
              {projectData?.fiveBHK?.map((data, index) => (
                <TabPanel value={value} index={index}>
                  <Box display="flex" justifyContent="left">
                    <div>
                      <Typography className={classes.roomType}>
                        {data?.roomType}
                      </Typography>
                      <Typography className={classes.carpet}>
                        Carpet area{" "}
                        <span className={classes.area}>
                          {data?.area} sq. ft
                        </span>
                      </Typography>
                    </div>
                    <Typography className={classes.price}>
                      ₹ {data?.price}
                      {data?.value}
                    </Typography>
                  </Box>
                </TabPanel>
              ))}
            </Container>
          </>
        )}
      </Container>

      <Container className={classes.ammenityContainer}>
        <Typography variant="h4" color="primary">
          Ammenities
        </Typography>
        <div className={classes.ammenityDiv}>
          {projectData?.ammenities?.map((ammenity) => (
            <Ammenities ammenity={ammenity} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
