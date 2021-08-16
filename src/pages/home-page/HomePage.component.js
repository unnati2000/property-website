import React, { useEffect, useState } from "react";
import useStyles from "./HomePage.styles";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ProjectCard from "../../components/project-card/ProjectCard.component";
import PropertyCard from "../../components/property-card/PropertyCard.component";
import VillaCard from "../../components/villa-card/VillaCard.component";
import { useAuth } from "../../context/auth-context";
import firebase from "../../firebase/firebase.utils";

const HomePage = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const history = useHistory();
  const [flats, setFlats] = useState([]);
  const [villas, setVillas] = useState([]);
  const [projects, setProjects] = useState([]);
  const [location, setLocation] = useState("");

  function filterProp(response) {
    return (
      getDistanceFromLatLonInKm(
        response.latitude,
        response.longitude,
        currentUser?.lat,
        currentUser?.long
      ) <= 50
    );
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
    if (currentUser?.name === "") {
      history.push("/onboarding");
    }

    firebase
      .firestore()
      .collection("property")
      .where("propertyType", "==", "flat")
      .get()
      .then((res) => {
        let response = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));
        response = response.filter(filterProp);
        setFlats(response);
      });
    firebase
      .firestore()
      .collection("property")
      .where("propertyType", "==", "villa")
      .get()
      .then((res) => {
        let response = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));
        response = response.filter(filterProp);
        setVillas(response);
      });

    firebase
      .firestore()
      .collection("property")
      .where("propertyType", "==", "project")
      .get()
      .then((res) => {
        let response = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));
        response = response.filter(filterProp);
        setProjects(response);
      });
  }, [currentUser, history]);

  console.log(flats);
  return (
    <div>
      <div className={classes.header}>
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          className={classes.container}
        >
          <Typography
            variant="h2"
            className={classes.textHeader}
            color="secondary"
          >
            Search properties as per your convenience
          </Typography>
          <div className={classes.searchBox}>
            <div className={classes.linkDiv}>
              <Link to="/buy" className={classes.link}>
                Buy
              </Link>
              <Link to="/rent" className={classes.link}>
                Rent
              </Link>
              <Link to="/project" className={classes.link}>
                Project
              </Link>
            </div>
            <input
              type="text"
              className={classes.input}
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
            <Link to={"/" + location}>
              <Button variant="contained" className={classes.searchButton}>
                Search
              </Button>
            </Link>

            <br />
            <br />
            <Link to="/advanced-search" className={classes.link}>
              Advanced Search
            </Link>
          </div>
        </Container>
      </div>

      <div className={classes.featuredProjects}>
        <Typography
          variant="h3"
          color="primary"
          className={classes.featuredHeader}
        >
          Featured Projects
        </Typography>

        <Container>
          <Grid container spacing={2}>
            {projects &&
              projects?.slice(0, 2)?.map((project) => (
                <Grid item md={6}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>

      <div className={classes.property}>
        <Typography
          variant="h4"
          color="primary"
          className={classes.propertyHeader}
        >
          Amazing properties near you
        </Typography>
        <Container>
          <Grid spacing={2} container>
            {flats &&
              flats?.slice(0, 4)?.map((flat) => (
                <Grid item xs={12} md={3}>
                  <PropertyCard flat={flat} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>

      <div className={classes.property}>
        <Typography
          variant="h4"
          color="primary"
          className={classes.propertyHeader}
        >
          Personalized house
        </Typography>
        <Container>
          <Grid container spacing={2}>
            {villas &&
              villas?.slice(0, 2)?.map((villa) => (
                <Grid item md={6}>
                  <VillaCard villa={villa} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

// console.log(CoordDistance(19.19, 72.97, 19.186719, 72.848588))
