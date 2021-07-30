import React from "react";
import { Card, Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./ProjectCard.styles";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

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
          3.5Cr-6Cr
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
