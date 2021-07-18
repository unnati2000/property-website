import React from "react";
import { Card, Typography, Box } from "@material-ui/core";
import useStyles from "./ProjectCard.styles";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  console.log(project?.roomTypeArray);
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
        <Typography className={classes.builders}>by xyz builders</Typography>
      </Box>
      <Typography className={classes.bhk}>{project?.listOfBHK} BHK</Typography>

      <Typography className={classes.location}>{project?.address}</Typography>
      <Typography variant="h4" className={classes.price}>
        3.5Cr - 13Cr
      </Typography>
    </Card>
  );
};

export default ProjectCard;
