import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    id = "",
    classProp = "",
    type = "text",
    name = "text",
    placeholder = "",
    onChange = () => {},
    value = "",
    ariaLabel = "",
    required,
    autoComplete = false,
  } = props;
  return (
    <input
      title={name}
      id={`${id ? id : "sv-" + name}`}
      required={required}
      className={classProp}
      type={type}
      name={name}
      aria-label={ariaLabel ? ariaLabel : name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
    />
  );
};

Input.propTypes = {
  classProp: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  ariaLabel: PropTypes.string,
  required: PropTypes.bool,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  autoComplete: PropTypes.bool,
};

export default Input;
