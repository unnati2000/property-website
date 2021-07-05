import React from "react";
import SelectProperty from "../../components/select-property/SelectProperty.component";
import useStyles from "./AddProperty.styles";

const AddProperty = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootDiv}>
      <SelectProperty className={classes.selectProperty} />
    </div>
  );
};

export default AddProperty;
