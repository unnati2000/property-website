import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "20px",
    fontWeight: "600",
  },
  appBar: {
    backgroud: "#fff",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: "25px",
  },
  profileImage: {
    height: "35px",
    width: "35px",
    borderRadius: "100px",
  },
}));
