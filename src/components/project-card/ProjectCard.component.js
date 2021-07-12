import React from "react";
import { Card, Typography, Box } from "@material-ui/core";
import useStyles from "./ProjectCard.styles";
import project from "../../assets/project.png";

const ProjectCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img src={project} alt="Project Name" className={classes.projectImage} />
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          color="primary"
          className={classes.projectName}
        >
          Project Name
        </Typography>
        <Typography className={classes.builders}>by xyz builders</Typography>
      </Box>
      <Typography className={classes.bhk}>1,2,3 BHK</Typography>

      <Typography className={classes.location}>Mira Road, East</Typography>
      <Typography variant="h4" className={classes.price}>
        3.5Cr - 13Cr
      </Typography>
    </Card>
  );
};

export default ProjectCard;
