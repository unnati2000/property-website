import { Card, Grid, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./SearchProperty.styles";

const SearchProperty = ({ property }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid md={4} item>
          <img src={property?.images[0]} alt="villa" className={classes.img} />
          <Box ml={1} mt={1}>
            <Typography className={classes.grey}>
              Property Type: {property?.propertyType}
            </Typography>
          </Box>
        </Grid>
        <Grid md={8} item>
          <Typography
            variant="h4"
            color="primary"
            className={classes.propertyName}
          >
            {property?.propertyName}
          </Typography>
          <Typography className={classes.location}>
            {property?.address?.areaName}, {property?.address?.city},{" "}
            {property?.address?.district}.
          </Typography>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <div>
              <Typography className={classes.grey}> Price </Typography>
              <Typography className={classes.price}>
                ₹ {property?.price}
                {property?.value}
              </Typography>
            </div>
            <div className={classes.roomDiv}>
              <Typography className={classes.grey}> Room Type </Typography>
              <Typography className={classes.room}>
                {property?.roomType}
              </Typography>
            </div>
          </Box>

          <Link to={"/flat/" + property?.docId} className={classes.link}>
            <Button variant="contained" className={classes.button}>
              View Details
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchProperty;
