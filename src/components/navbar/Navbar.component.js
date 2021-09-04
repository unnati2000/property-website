import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import useStyles from "./Navbar.styles";
import { useAuth } from "../../context/auth-context";
import { BsPersonFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { currentUser, Logout } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [history, currentUser]);

  const handleLogout = async () => {
    await Logout();
    history.push("/login");
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
          ></IconButton>

          <Typography variant="h6" color="primary" className={classes.title}>
            <Link to="/" className={classes.link}>
              <Box display="flex" justifyContent="left">
                <FaHouseDamage className={classes.icon} />
                <Typography variant="h5" color="primary">
                  Homely
                </Typography>
              </Box>
            </Link>
          </Typography>

          {currentUser ? (
            currentUser?.role === "agent" ? (
              currentUser?.packageName === "" ? (
                <div>
                  <Link to="/package" className={classes.link}>
                    <Button color="inherit">Package</Button>
                  </Link>

                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img
                      src={
                        currentUser?.profilePic
                          ? currentUser?.profilePic
                          : "https://www.gravatar.com/avatar/4f28f38e798f29c5d75b85c883327d09?d=mm&r=g&s=190"
                      }
                      className={classes.profileImage}
                    />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div>
                  <Link to="/" className={classes.link}>
                    <Button color="inherit">
                      <AiFillHome className={classes.icon} />{" "}
                    </Button>
                  </Link>
                  <Link to="/add" className={classes.link}>
                    <Button color="inherit">
                      <MdLibraryAdd className={classes.icon} />{" "}
                    </Button>
                  </Link>
                  <Link to="/profile" className={classes.link}>
                    <Button color="inherit">
                      <BsPersonFill className={classes.icon} />{" "}
                    </Button>
                  </Link>

                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img
                      src="https://www.gravatar.com/avatar/4f28f38e798f29c5d75b85c883327d09?d=mm&r=g&s=190"
                      className={classes.profileImage}
                    />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/edit" className={classes.link}>
                      <MenuItem> Edit Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              )
            ) : (
              <div>
                <Link to="/profile" className={classes.link}>
                  <Button color="inherit">
                    <BsPersonFill className={classes.icon} />{" "}
                  </Button>
                </Link>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <img
                    src={
                      currentUser?.profilePic
                        ? currentUser?.profilePic
                        : "https://www.gravatar.com/avatar/4f28f38e798f29c5d75b85c883327d09?d=mm&r=g&s=190"
                    }
                    className={classes.profileImage}
                  />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/edit" className={classes.link}>
                    <MenuItem> Edit Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
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
