import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  card: {
    margin: "0 20px",
    borderRadius: "5px",
  },
  img: {
    height: "100%",
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
    fontSize: "17px",
    fontWeight: "600",
  },
  phone: {
    fontSize: "14px",
    color: "#7E7474",
  },
  propertyName: {},
  address: {
    fontSize: "13px",
    color: "#808080",
  },
  gray: {
    fontSize: "10px",
    color: "#7E7474",
    textAlign: "center",
  },
  icon: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));
