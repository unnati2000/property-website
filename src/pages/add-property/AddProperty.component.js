import React, { useEffect } from "react";
import SelectProperty from "../../components/select-property/SelectProperty.component";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import useStyles from "./AddProperty.styles";

const AddProperty = () => {
  const classes = useStyles();

  const { currentUser } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [history, currentUser]);

  return (
    <div className={classes.rootDiv}>
      <SelectProperty className={classes.selectProperty} />
    </div>
  );
};

export default AddProperty;
