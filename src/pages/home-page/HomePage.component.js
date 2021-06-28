import React from "react";
import useStyles from "./HomePage.styles";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/project-card/ProjectCard.component";
import PropertyCard from "../../components/property-card/PropertyCard.component";

const HomePage = () => {
  const classes = useStyles();
   
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
            Search properties as per your convinience 
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
              placeholder="Enter location or postal code"
            />
            <Button variant="contained" className={classes.searchButton}>
              Search
            </Button>
            <br />
            <br />
            <Link to="/" className={classes.link}>
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
            <Grid item xs={12} md={6}>
              <ProjectCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard />
            </Grid>
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
            <Grid item xs={12} md={3}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={3}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={3}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={3}>
              <PropertyCard />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
