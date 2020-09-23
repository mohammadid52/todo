import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Redux/actions/authActions";

function NavItems() {
  const dispatch = useDispatch();
  const { uid, email } = useSelector((state) => state.firebase.auth);
  if (uid) {
    return (
      <>
        <Link
          to="/signin"
          className="nav-link"
          onClick={() => {
            dispatch(signOut());
          }}
        >
          Logout
        </Link>

        <p className="mt-3">{email}</p>
      </>
    );
  }
  return (
    <>
      <Link to="/signin" className="nav-link">
        Signin
      </Link>
      <Link to="/signup" className="nav-link">
        Signup
      </Link>
    </>
  );
}

export default NavItems;
