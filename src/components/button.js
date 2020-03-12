import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide, clickHandler,
  } = props;
  const handleClick = buttonName => clickHandler(buttonName);
  return (
    <button
      style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
      className="button"
      type="button"
      onClick={() => { handleClick(name); }}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: '#f4913e',
};

export default Button;
