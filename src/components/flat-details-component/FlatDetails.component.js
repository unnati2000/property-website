import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import useStyles from "./FlatDetails.styles";

const FlatDetails = ({ id }) => {
  const classes = useStyles();
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
            1 BHK Independent House
          </Typography>
          <Typography>
            Pokharan Road Number 1, Vartak Nagar, Thane West, Thane
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">90L</Typography>
          <Button variant="contained" className={classes.button}>
            Contact Developer
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-evenly">
        <Box>
          <Typography>350 sq.ft</Typography>
          <Typography>Flat area</Typography>
        </Box>
        <Box>
          <Typography>350 sq.ft</Typography>
          <Typography>Flat area</Typography>
        </Box>
        <Box>
          <Typography>350 sq.ft</Typography>
          <Typography>Flat area</Typography>
        </Box>
        <Box>
          <Typography>350 sq.ft</Typography>
          <Typography>Flat area</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default FlatDetails;
