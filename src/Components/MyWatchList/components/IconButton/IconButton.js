import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ children, onClick, ...allyProps }) => (
  <div className="button__container">
    {" "}
    <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
      {children}
    </button>
  </div>
);

export default IconButton;
