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
        <>
          <img className={classes.img} src={swimmingPool} />
          <p className={classes.span}>{ammenity}</p>
        </>
      )}
      {ammenity === "Gym" && (
        <>
          <img className={classes.img} src={gym} />{" "}
          <p className={classes.span}>{ammenity}</p>
        </>
      )}
      {ammenity === "Lift" && <img className={classes.img} src={lift} />}
      {ammenity === "Jogging Track" && (
        <>
          <img className={classes.img} src={track} />{" "}
          <p className={classes.span}>{ammenity}</p>
        </>
      )}
      {ammenity === "Swimming Pool" && (
        <>
          <img className={classes.img} src={swimmingPool} />{" "}
          <p className={classes.span}>{ammenity}</p>{" "}
        </>
      )}
      {ammenity === "Community Hall" && (
        <>
          <img className={classes.img} src={hall} />{" "}
          <p className={classes.span}>{ammenity}</p>
        </>
      )}
      {ammenity === "Badminton Court" && (
        <>
          <img className={classes.img} src={badminton} />{" "}
          <p className={classes.span}>{ammenity}</p>
        </>
      )}
      {ammenity === "Water 24 hours" && (
        <>
          <img className={classes.img} src={water} />{" "}
          <p className={classes.span}>{ammenity}</p>
        </>
      )}
      {ammenity === "Park" && (
        <>
          {" "}
          <img className={classes.img} src={park} />{" "}
          <p className={classes.span}>{ammenity}</p>{" "}
        </>
      )}
    </div>
  );
};

export default Ammenities;
