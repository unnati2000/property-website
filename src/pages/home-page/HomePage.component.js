import React from "react";
import useStyles from "./HomePage.styles";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

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
            A place of trust and relationship
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
    </div>
  );
};

export default HomePage;
