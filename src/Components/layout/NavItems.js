import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Redux/actions/authActions";
import { Button, List, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& MuiButtonBase-root": {
      color: "#fff",
    },
  },
}));

function NavItems() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { uid, email } = useSelector((state) => state.firebase.auth);
  if (uid) {
    return (
      <div className={classes.root}>
        <Button
          component={Link}
          to={"logout"}
          onClick={() => {
            dispatch(signOut());
          }}
        >
          Logout
        </Button>

        <p className="mt-3">{email}</p>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Button component={Link} to={"signin"} variant="outlined">
        Signin
      </Button>
      <Button component={Link} to={"signup"} variant="outlined">
        Signup
      </Button>
    </div>
  );
}

export default NavItems;
