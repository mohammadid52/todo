import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { signOut } from "../../Redux/actions/authActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: theme.palette.common.white,
    flexGrow: 1,
  },
  name: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(1.8),
  },
  buttonRoot: {
    "& a": {
      color: "#fff",
      marginLeft: "10px",
      marginRight: "10px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    backgroundColor: theme.palette.primary.light,
  },
}));

function NavItems() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { uid, email, displayName, photoURL } = useSelector(
    (state) => state.firebase.auth
  );
  if (uid) {
    return (
      <div className={classes.buttonRoot}>
        <Button
          component={Link}
          to={"signin"}
          // variant="contained"
          disableElevation
          color="primary"
          className={classes.logoutButton}
          onClick={() => {
            dispatch(signOut());
          }}
        >
          Logout
        </Button>

        <p className={classes.name}>{displayName ? displayName : email}</p>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="default"
        >
          {photoURL ? (
            <img src={photoURL} height="35px" style={{ borderRadius: "50%" }} />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
      </div>
    );
  }
  return (
    <div className={classes.buttonRoot}>
      <Button
        component={Link}
        to={"signin"}
        variant="contained"
        disableElevation
        color="primary"
      >
        Signin
      </Button>
      <Button
        component={Link}
        to={"signup"}
        variant="contained"
        disableElevation
        color="primary"
      >
        Signup
      </Button>
    </div>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todos
          </Typography>
          <NavItems />
        </Toolbar>
      </AppBar>
    </div>
  );
}
