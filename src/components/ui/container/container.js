import React from "react";
import PropTypes from "prop-types";
import classes from "./container.module.css";

const Container = (props) => {
  const { full = false, fluid = true, children = "", classProps = "" } = props;
  return (
    <div
      className={`${classes["container-wrapper"]} ${full ? classes.full : ""} ${
        fluid ? classes.fluid : ""
      } ${classProps ?? ""}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  full: PropTypes.bool,
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
