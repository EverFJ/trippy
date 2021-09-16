import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default class HotelMap extends Component {
  render() {
    const { hotels, center, zoom } = this.props;
    // console.log("center and zoom :", center, zoom);

    return (
      <div>
        <h1>HotelMap</h1>
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyDDwOjMrXEdN5xd1LG0PdFbeoQN0DYQ7HY"
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {hotels.map((elem) => (
            <Marker
              lat={elem.location.lat}
              lng={elem.location.lon}
              text={elem.name}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
