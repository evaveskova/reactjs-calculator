import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;
  return (
    <button style={{ backgroundColor: color, width: wide ? '50%' : '25%' }} className="button" type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: '#f4913e',
};

export default Button;
