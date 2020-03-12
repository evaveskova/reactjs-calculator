import React from 'react';
import PropTypes from 'prop-types';

const Display = ({operation, total, next} ) => {
    return (
      <div id="display">
        <h1 id="result">{next ? next : total}</h1>
      </div>
    );
}

Display.propTypes = {
  operation: PropTypes.string,
  total: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = { 
  total: '0'
};

export default Display;
