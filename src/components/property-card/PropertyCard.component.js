import React from "react";
import useStyles from "./PropertyCard.styles";
import { Card, Typography, Box, Button } from "@material-ui/core";
import property from "../../assets/property.png";

const PropertyCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img src={property} alt="" className={classes.propertyImage} />
      <Typography variant="h5" color="primary" className={classes.propertyName}>
        Property Name
      </Typography>
      <Typography className={classes.address}>Andheri East</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.type}>1 BHK</Typography>
        <Typography className={classes.price}>$ 33,00,000</Typography>
      </Box>
      <Button variant="contained" className={classes.button}>
        View Details
      </Button>
    </Card>
  );
};

export default PropertyCard;
