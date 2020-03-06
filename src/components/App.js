import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import './App.css';

function App() {
  return (
    <div id="app">
      <Display />
      {' '}
      <ButtonPanel />
    </div>
  );
}

export default App;
