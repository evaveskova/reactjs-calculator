import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div id="button-panel">
      <div className="row">
        <Button color="#e0e0e0" name="AC" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="+/-" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>

      <div className="row">
        <Button color="#e0e0e0" name="7" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="8" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>

      <div className="row">
        <Button color="#e0e0e0" name="4" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="5" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>

      <div className="row">
        <Button color="#e0e0e0" name="1" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="2" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>

      <div className="row">
        <Button color="#e0e0e0" wide name="0" clickHandler={handleClick} />
        <Button color="#e0e0e0" name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
