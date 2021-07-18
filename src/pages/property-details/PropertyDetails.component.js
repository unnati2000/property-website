import React from "react";
import FlatDetails from "../../components/flat-details-component/FlatDetails.component";
import ProjectDetails from "../../components/project-details-component/ProjectDetails.component";
import VillaDetails from "../../components/villa-details-component/VillaDetails.component";

const PropertyDetails = ({ match }) => {
  return (
    <>
      {match.params.propertyType === "flat" && (
        <FlatDetails id={match.params.id} />
      )}
      {match.params.propertyType === "project" && (
        <ProjectDetails id={match.params.id} />
      )}
      {match.params.propertyType === "villa" && (
        <VillaDetails id={match.params.id} />
      )}
    </>
  );
};

export default PropertyDetails;
