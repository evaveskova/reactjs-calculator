import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import './App.css';
// eslint-disable-next-line import/extensions
import calculate from '../logic/calculate';


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        operation: null,
        total: null,
        next: null,
      };
    }

  handleClick = (buttonName) => {
    console.log('test');
    const data = calculate(this.state, buttonName);
    this.setState(() => ({
      operation: data.operation,
      total: data.total,
      next: data.next,
    }));
  }

  render() {
    return (
      <div id="app">
        <Display operation={this.state.operation} total={this.state.total} next={this.state.next} />
        {' '}
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}


export default App;
