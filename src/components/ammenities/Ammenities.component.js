import React from "react";
import swimmingPool from "../../assets/swimming.png";
import gym from "../../assets/gym.png";
import badminton from "../../assets/badminton-court.png";
import lift from "../../assets/lift.png";
import hall from "../../assets/hall.png";
import water from "../../assets/water-tap.png";
import park from "../../assets/park.png";
import track from "../../assets/track.png";
import useStyles from "./Ammenities.styles";

const Ammenities = ({ ammenity }) => {
  const classes = useStyles();
  return (
    <div>
      {ammenity === "Swimming Pool" && (
        <img className={classes.img} src={swimmingPool} />
      )}
      {ammenity === "Gym" && <img className={classes.img} src={gym} />}
      {ammenity === "Lift" && <img className={classes.img} src={lift} />}
      {ammenity === "Jogging Track" && (
        <img className={classes.img} src={track} />
      )}
      {ammenity === "Swimming Pool" && (
        <img className={classes.img} src={swimmingPool} />
      )}
      {ammenity === "Community Hall" && (
        <img className={classes.img} src={hall} />
      )}
      {ammenity === "Badminton Court" && (
        <img className={classes.img} src={badminton} />
      )}
      {ammenity === "Water 24 hours" && (
        <img className={classes.img} src={water} />
      )}
      {ammenity === "Park" && <img className={classes.img} src={park} />}
    </div>
  );
};

export default Ammenities;
