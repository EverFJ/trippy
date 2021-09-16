import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default class HotelMap extends Component {
  render() {
    return (
      <div>
        <h1>HotelMap</h1>
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyDDwOjMrXEdN5xd1LG0PdFbeoQN0DYQ7HY"
          defaultCenter={hotels.center}
          defaultZoom={hotels.zoom}
        >
          <Marker />
        </GoogleMapReact>
      </div>
    );
  }
}
