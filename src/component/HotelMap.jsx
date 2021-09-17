import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { apiKey, apiKey2 } from "../utils/Api";

export default class HotelMap extends Component {
  defaultProps = {
    center: this.props.center,
    zoom: this.props.zoom,
  };

  render() {
    const { hotels } = this.props;
    // console.log(this.props);
    return (
      <div className="container">
        <div className="m-5" style={{ width: "800px", height: "600px" }}>
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
