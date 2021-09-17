import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { apiKey, apiKey2 } from "../utils/Api";

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
      <div className="container">
        <div className="m-5" style={{ width: "800px", height: "600px" }}>
          <h1>HotelMap</h1>

          <GoogleMapReact
            bootstrapURLKeys={{
              key: apiKey,
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
      </div>
    );
  }
}
