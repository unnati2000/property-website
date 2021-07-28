import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import useStyles from "./Navbar.styles";
import { useAuth } from "../../context/auth-context";
import firebase from "../../firebase/firebase.utils";

const Navbar = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [history, currentUser]);

  const Logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <AppBar
        color="inherit"
        elevation={0}
        position="sticky"
        style={{ borderBottom: "1px ridge rgba(0,0,0,.05)" }}
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="primary" className={classes.title}>
            PROPERTY WEBSITE
          </Typography>

          {currentUser ? (
            currentUser?.packageName === "" ? (
              <div>
                <Link to="/package" className={classes.link}>
                  <Button color="inherit">Package</Button>
                </Link>
                <Link to="/add" className={classes.link}>
                  <Button color="inherit">Profile</Button>
                </Link>
                <Link>
                  <Button onClick={Logout}>Logout</Button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/" className={classes.link}>
                  <Button color="inherit">Home</Button>
                </Link>
                <Link to="/add" className={classes.link}>
                  <Button color="inherit">Add properties</Button>
                </Link>
                <Link to="/profile" className={classes.link}>
                  <Button color="inherit">Profile</Button>
                </Link>
                <Link>
                  <Button onClick={Logout}>Logout</Button>
                </Link>
              </div>
            )
          ) : (
            <div>
              <Link to="/login" className={classes.link}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/register" className={classes.link}>
                <Button color="inherit">Register</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
