import React from "react";
import PropTypes from "prop-types";
import classes from "./card.module.css";

const Card = ({ children, classProp = "" }) => {
  return (
    <div
      className={`${classes["basic-card"]} ${classes["basic-card-light"]} ${
        classProp ? classProp : ""
      }`}
    >
      <div className={classes["card-content"]}>{children}</div>
    </div>
  );
};
Card.Header = ({ children }) => {
  return <span className={classes["card-heading"]}>{children}</span>;
};

Card.Body = ({ children }) => {
  return <div className={classes["card-body"]}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classProp: PropTypes.string,
};

export default Card;
