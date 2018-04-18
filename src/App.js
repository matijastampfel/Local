import React, { Component } from 'react';
import './App.css';
import GeolocationComponent from './containers/Geolocation';
import Api from './containers/Api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeolocationComponent/>

        <Api/>
      </div>
    );
  }
}

export default App;
