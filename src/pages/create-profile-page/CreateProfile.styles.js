import { makeStyles } from "@material-ui/core";
import flatImage from "../../assets/flat.jpg";

export default makeStyles((theme)=>({
    profileDiv:{
        background: `url(${flatImage})`,
        height:"100vh",
        backgroundSize:"cover"
    },
    profileHeader:{
        color:"#fff",
        padding:"30px 140px"
    },
    form:{
        margin:"30px 140px",
        background:"#fff",
        background: "rgba(255, 255, 255, 0.1)",
        padding:"20px 30px",
        textAlign:"left",
        width:"40%",
        borderRadius:"5px"
    },
    text:{
        background: "rgba(255, 255, 255, 0.2)",
        width:"100%",
        color:"#fff"
    },
    submit:{
        marginTop:"20px",
        display:"flex",
        width:"100%",
        color:theme.palette.primary.main,
        fontWeight:"bold"
    }

}))