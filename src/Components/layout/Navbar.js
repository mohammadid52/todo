import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
function Navbar() {
  return (
    <BootstrapNavbar
      className="d-flex bg-light justify-content-center"
      bg="light"
      variant="light"
    >
      <Link to="/dashboard" className="navbar-brand">
        <h3>Todoss App</h3>
      </Link>
      <NavItems />
    </BootstrapNavbar>
  );
}

export default Navbar;
