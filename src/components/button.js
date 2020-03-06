import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, customClass } = props;
  return (
    <button className={'button ' + customClass} type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
