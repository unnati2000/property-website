import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchProperty from "../../components/search-property/SearchProperty.component";
import firebase from "../../firebase/firebase.utils";

const SearchPage = ({ match }) => {
  const [properties, setProperties] = useState([]);
  console.log(match.params.location);

  useEffect(() => {
    let query = firebase.firestore().collection("property");
    query = query.where("propertyType", "==", "flat");
    query = query.where(
      "address.formattedAddress",
      "array-contains",
      match.params.location
    );
    query
      .get()
      .then((res) => {
        const response = res.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));
        setProperties(response);
      })
      .catch((err) => console.log(err));
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
