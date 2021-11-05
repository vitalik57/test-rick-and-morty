import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);



export default IconButton;
