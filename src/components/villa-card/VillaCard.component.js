import React from "react";
import { Card, Typography, Grid, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./VillaCard.styles";

const VillaCard = ({ villa }) => {
  const classes = useStyles();
  return (
    <Card>
      <Grid container>
        <Grid item md={5}>
          <img src={villa?.images[0]} className={classes.image} alt="villa" />
        </Grid>
        <Grid item md={7} className={classes.villaDetail}>
          <Typography variant="h4">
            {villa?.price}
            {villa?.value}
          </Typography>
          <Typography variant="h6">
            {villa?.villaBedroom} BHK Independent House
          </Typography>
          <Typography className={classes.address}>
            {villa?.address?.city}
          </Typography>
          <Box display="flex" justifyContent="left" mt={2} mb={1}>
            <Box>
              <Typography className={classes.grey}>Build Up Area</Typography>
              <Typography className={classes.blackFont}>
                {villa?.area} sq ft
              </Typography>
            </Box>
            <Box ml={1}>
              <Typography className={classes.grey}>Avg. Price</Typography>
              <Typography className={classes.blackFont}>28.75 sq ft</Typography>
            </Box>
          </Box>
          <Link to={"/villa/" + villa?.docId}>
            <Button className={classes.button} variant="contained">
              View Details
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default VillaCard;
