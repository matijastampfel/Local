import React, { Component } from 'react';
import axios from 'axios';
// check
import {geolocated} from 'react-geolocated'; 

// http://openweathermap.org/current


let link = "http://api.openweathermap.org/data/2.5/weather?lat=58&lon=11&APPID=bc92738f17d1ab89d07b75ca077124c7"



class Api extends Component {
constructor(){
    super();
    this.state = {
        weather: []
    };
    
}



componentDidMount() {
        
    axios.get(link)
      .then(res => {
        const weather = res.data.weather[0].main;

        this.setState({ weather : weather});
        console.log(weather);
      })
  }




    render() {
        return (
            <div>
                {this.state.weather}
            </div>
        );
    }
}

export default Api;