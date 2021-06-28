import React, {useEffect} from "react";
import useStyles from "./CreateProfile.styles";
import { useHistory } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Typography, TextField, Button } from "@material-ui/core";

const CreateProfile = ()=>{

    const classes = useStyles();
    const {currentUser} = useAuth();
    const history = useHistory();

    useEffect(()=>{
        if(currentUser?.name){
            console.log("yes")
            history.push("/");
        }
    }, [currentUser]);

    console.log(currentUser?.role)

    return <div className={classes.profileDiv}>
    <Typography variant="h2" className={classes.profileHeader}>
        Create your profile first
    </Typography>
        <form className={classes.form}>
            <TextField
            label="Name"
            id="outlined-size-normal"
            variant="outlined"
            name="name"
            // value={phoneNumber}
            // onChange={(e)=>setPhoneNumber(e.target.value)}
            className={classes.text}
            />
            <br/>
             {currentUser?.role === "agent" && <div><input type="file"/></div> }
            <Button variant="contained" className={classes.submit}>Submit</Button>
        </form>
    </div>
}

export default CreateProfile;