import React from "react";
import { Card, Typography, Grid, Box, Button } from "@material-ui/core";
import project from "../../assets/project.png";
import useStyles from "./VillaCard.styles";

const VillaCard = () => {
  const classes = useStyles();
  return (
    <Card>
      <Grid container>
        <Grid item md={5}>
          <img src={project} className={classes.image} />
        </Grid>
        <Grid item md={7} className={classes.villaDetail}>
          <Typography variant="h4">11.5 Cr</Typography>
          <Typography variant="h6">4 BHK Independent House</Typography>
          <Typography className={classes.address}>
            Sunder nagar, Kalina, Santacruz East, Mumbai
          </Typography>
          <Box display="flex" justifyContent="left" mt={2} mb={1}>
            <Box>
              <Typography className={classes.grey}>Build Up Area</Typography>
              <Typography className={classes.blackFont}>4000 sq ft</Typography>
            </Box>
            <Box ml={1}>
              <Typography className={classes.grey}>Avg. Price</Typography>
              <Typography className={classes.blackFont}>28.75 sq ft</Typography>
            </Box>
          </Box>
          <Button className={classes.button} variant="contained">
            View Details
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default VillaCard;
