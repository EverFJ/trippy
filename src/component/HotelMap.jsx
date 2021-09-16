import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default class HotelMap extends Component {
  // static defaultProps = {
  //   center: this.props.center,
  //   zoom: this.props.zoom,
  // };

  static defaultProps = {
    center: {
      lat: 48.85661415805434,
      lng: 2.3524553610292323,
    },
    zoom: 12,
  };

  render() {
    const { hotels } = this.props;
    // console.log("center and zoom :", this.props.center, this.props.zoom);

    return (
      <div style={{ width: "600px", height: "800px" }}>
        <h1>HotelMap</h1>

        <GoogleMapReact
          // bootstrapURLKeys="AIzaSyDDwOjMrXEdN5xd1LG0PdFbeoQN0DYQ7HY"
          bootstrapURLKeys={{
            key: "AIzaSyDmunNU3fQUiSKuex19oqnyJt2bL-lalPk",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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
