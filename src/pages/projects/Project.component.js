import React, { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import firebase from "../../firebase/firebase.utils";
import ProjectCard from "../../components/project-card/ProjectCard.component";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("property")
      .where("propertyType", "==", "project")
      .get()
      .then((res) => {
        let response = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));

        setProjects(response);
      });
  }, []);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {projects?.map((project) => (
            <Grid item xs={12} md={6}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Project;
