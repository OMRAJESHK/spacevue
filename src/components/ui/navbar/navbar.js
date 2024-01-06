import React from "react";
import Container from "../container/container";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <Container full classProps={classes["navbar-wrapper"]}>
      <h2 className={classes.title}>Space Vue</h2>
    </Container>
  );
};

export default Navbar;
