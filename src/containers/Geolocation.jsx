
import Geolocation from "react-geolocation";
import React, { Component } from 'react';

class GeolocationComponent extends Component {
  render() {
    return (
      <div>
      <Geolocation
      onSuccess={console.log}
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error
      }) =>
        <div>
          {error &&
            <div>
              {error.message}
            </div>}
          <pre>
            latitude: {latitude} 
            longitude: {longitude}
          </pre>
        </div>}
    />
      </div>
    );
  }
}

export default GeolocationComponent;