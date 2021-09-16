import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import HotelCard from "./HotelCard";
import Marker from "./Marker";

export default class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch data : ", data);
        this.setState({ hotels: data.results });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { hotels } = this.state;
    console.log(hotels);
    return (
      <>
        <h1>Hotels</h1>
        {hotels.length > 0 &&
          hotels.map((elem) => (
            <>
              <HotelCard />
            </>
          ))}
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyDDwOjMrXEdN5xd1LG0PdFbeoQN0DYQ7HY"
          defaultCenter={hotels.center}
          defaultZoom={hotels.zoom}
        >
          <Marker />
        </GoogleMapReact>
      </>
    );
  }
}
