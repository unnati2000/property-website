import React, { useEffect, useState } from "react";
import firebase from "../../firebase/firebase.utils";

const SearchPage = ({ match }) => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const res = firebase
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
  }, [match]);

  console.log(properties);
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default SearchPage;
