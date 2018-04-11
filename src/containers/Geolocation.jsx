// // https://no23reason.github.io/react-geolocated/#/

import React, { Component } from 'react';
let latitude = 0;
let longitude = 0;


class Geolocation extends Component {
  constructor(){
    super();
    this.state = {
      latitude: 0,
      longitude: 0
    }
  }
      
    


  componentWillMount(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      this.setState({latitude: position.coords.latitude});
      this.setState({longitude: position.coords.longitude});
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  }
render() {
    return (
      <div>
        {this.state.latitude}
        <br/>
        {this.state.longitude}
      </div>
    );
  }
}

export default Geolocation;
