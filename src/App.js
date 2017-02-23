import React from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>Hello World</h1>
          An app Demonstrating an implamentation of node.
        </p>
        <span id='changeling'></span>
        <Link to="/about">About</Link>
      </div>
    )
  }
});
