import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  card: {
    margin: "0 20px",
    borderRadius: "20px",
  },
  img: {
    height: "200px",
    width: "200px",
  },
  grey: {
    color: "#808080",
  },
  greyBox: {
    background: "#EEEDE7",
    padding: "10px",
    borderRadius: "10px",
  },
  roomType: {
    fontSize: "22px",
    marginTop: "20px",
  },
  roomButton: {
    background: theme.palette.primary.main,
    color: "white",
    marginTop: "5px",
  },
  name: {
    fontSize: "15px",
    margin: "10px",
    color: "#696969",
  },
}));
