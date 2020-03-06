import React from 'react';
import Button from './button';
// import './App.css';

const ButtonPanel = () => (
  <div id="button-panel">
    <div className="row">
      <Button customClass="gray" name="AC" />
      <Button customClass="gray" name="+/-" />
      <Button customClass="gray" name="%" />
      <Button customClass="orange" name="÷" />
    </div>

    <div className="row">
      <Button customClass="gray" name="7" />
      <Button customClass="gray" name="8" />
      <Button customClass="gray" name="9" />
      <Button customClass="orange" name="x" />
    </div>

    <div className="row">
      <Button customClass="gray" name="4" />
      <Button customClass="gray" name="5" />
      <Button customClass="gray" name="6" />
      <Button customClass="orange" name="-" />
    </div>

    <div className="row">
      <Button customClass="gray" name="1" />
      <Button customClass="gray" name="2" />
      <Button customClass="gray" name="3" />
      <Button customClass="orange" name="+" />
    </div>

    <div className="row">
      <Button customClass="gray wide-btn" name="0" />
      <Button customClass="gray" name="." />
      <Button customClass="orange" name="=" />
    </div>
  </div>
);

export default ButtonPanel;
