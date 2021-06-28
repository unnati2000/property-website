import React from "react";
import useStyles from "./Alert.styles"

const Alert = ({message})=>{

    const classes = useStyles();
    return <div className={classes.errorMsg}>{message}</div>
}

export default Alert

