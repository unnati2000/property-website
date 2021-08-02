import React from "react";
import { Card, Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./ProjectCard.styles";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  let min, max, minVal, maxVal;

  if (project?.oneRK.length > 0) {
    min = project?.oneRK[0].price;
    minVal = project?.oneRK[0].value;
  } else if (project?.oneBHK.length > 0) {
    min = project?.oneBHK[0].price;
    minVal = project?.oneBHK[0].value;
  } else if (project?.twoBHK.length > 0) {
    min = project?.twoBHK[0].price;
    minVal = project?.twoBHK[0].value;
  } else if (project?.threeBHK.length > 0) {
    min = project?.threeBHK[0].price;
    minVal = project?.threeBHK[0].value;
  } else if (project?.fourBHK.length > 0) {
    min = project?.fourBHK[0].price;
    minVal = project?.fourBHK[0].value;
  } else if (project?.fiveBHK[0].length > 0) {
    min = project?.fiveBHK[0].price;
    minVal = project?.fiveBHK[0].value;
  }

  if (project?.fiveBHK.length > 0) {
    max = project?.fiveBHK[project?.fiveBHK.length - 1].price;
    maxVal = project?.fiveBHK[project?.fiveBHK.length - 1].value;
  } else if (project?.fourBHK.length > 0) {
    max = project?.fourBHK[project?.fourBHK.length - 1].price;
    maxVal = project?.fourBHK[project?.fourBHK.length - 1].value;
  } else if (project?.threeBHK.length > 0) {
    max = project?.threeBHK[project?.threeBHK.length - 1].price;
    maxVal = project?.threeBHK[project?.threeBHK.length - 1].value;
  } else if (project?.twoBHK.length > 0) {
    max = project?.twoBHK[project?.twoBHK.length - 1].price;
    maxVal = project?.twoBHK[project?.twoBHK.length - 1].value;
  } else if (project?.oneBHK.length > 0) {
    max = project?.oneBHK[project?.oneBHK.length - 1].price;
    maxVal = project?.oneBHK[project?.oneBHK.length - 1].value;
  } else if (project?.oneRK.length > 0) {
    max = project?.oneRK[project?.oneRK.length - 1].price;
    maxVal = project?.oneRK[project?.oneRK.length - 1].value;
  }

  return (
    <Card className={classes.card}>
      <img
        src={project?.images[0]}
        alt="Project Name"
        className={classes.projectImage}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          color="primary"
          className={classes.projectName}
        >
          {project?.project}
        </Typography>
        <Typography className={classes.builders}>
          {project?.builderName}
        </Typography>
      </Box>
      <Typography className={classes.bhk}>{project?.listOfBHK} BHK</Typography>

      <Typography className={classes.location}>
        {project?.address?.city}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" className={classes.price}>
          {min}
          {minVal} - {max}
          {maxVal}
        </Typography>
        <Link to={"/project/" + project?.docId}>
          <Button variant="contained" className={classes.button}>
            View Details
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default ProjectCard;
