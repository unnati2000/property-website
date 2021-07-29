import React from "react";
import useStyles from "./PropertyCard.styles";
import { Card, Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const PropertyCard = ({ flat }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img src={flat?.images[0]} alt="" className={classes.propertyImage} />
      <Typography variant="h5" color="primary" className={classes.propertyName}>
        {flat?.propertyName}
      </Typography>
      <Typography className={classes.address}>{flat?.address?.city}</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.type}>{flat?.roomType}</Typography>
        <Typography className={classes.price}>
          ₹{flat?.price} {flat?.value}
        </Typography>
      </Box>

      <Link to={"/flat/" + flat?.docId}>
        <Button variant="contained" className={classes.button}>
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default PropertyCard;
