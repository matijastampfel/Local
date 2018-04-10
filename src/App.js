import React, { Component } from 'react';
import './App.css';
import Geolocation from './containers/Geolocation';
import Api from './containers/Api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Geolocation/>
        <Api/>
      </div>
    );
  }
}

export default App;
