import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchProperty from "../../components/search-property/SearchProperty.component";
import firebase from "../../firebase/firebase.utils";

const SearchPage = ({ match }) => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    if (match.params.type === null && match.params.rooms === null) {
      firebase
        .firestore()
        .collection("property")
        .where("propertyType", "==", "flat")
        .where(
          "address.city",
          "==",
          match.params.location,
          "||",
          "address.district",
          "==",
          match.params.location
        )
        .get()
        .then((res) => {
          const response = res.docs.map((item) => ({
            ...item.data(),
            docId: item.id,
          }));
          setProperties(response);
        })
        .catch((err) => console.log(err));
    } else if (match.params.type === "villa") {
      firebase
        .firestore()
        .collection("property")
        .where("propertyType", "==", match.params.type)
        .where(
          "address.city",
          "==",
          match.params.location,
          "||",
          "address.district",
          "==",
          match.params.location
        )
        .get()
        .then((res) => {
          const response = res.docs.map((item) => ({
            ...item.data(),
            docId: item.id,
          }));
          setProperties(response);
        })
        .catch((err) => console.log(err));
    } else {
      firebase
        .firestore()
        .collection("property")
        .where("propertyType", "==", match.params.type)
        .where(
          "address.city",
          "==",
          match.params.location,
          "||",
          "address.district",
          "==",
          match.params.location
        )
        .where("roomType", "==", match.params.rooms)
        .get()
        .then((res) => {
          const response = res.docs.map((item) => ({
            ...item.data(),
            docId: item.id,
          }));
          setProperties(response);
        })
        .catch((err) => console.log(err));
    }
  }, [match]);

  console.log(properties);
  return (
    <div>
      <Grid container spacing={2}>
        {properties &&
          properties.map((property) => (
            <Grid md={6} item>
              {/* <SearchProperty property={property} /> */}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default SearchPage;
