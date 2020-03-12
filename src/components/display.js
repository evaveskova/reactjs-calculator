import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next }) => (
  <div id="display">
    <h1 id="result">{next || total}</h1>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string.isRequired,
};

Display.defaultProps = {
  total: '0',
};

export default Display;
