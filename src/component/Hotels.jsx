import React, { Component } from "react";
import HotelCard from "./HotelCard";
import HotelMap from "./HotelMap";

export default class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      center: {},
      zoom: null,
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch data : ", data);
        this.setState({
          hotels: data.results,
          center: { lat: data.center.lat, lng: data.center.lon },
          zoom: data.zoom,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { hotels, center, zoom } = this.state;
    // console.log(hotels);
    return (
      <>
        <h1>Hotels</h1>
        <HotelMap hotels={hotels} center={center} zoom={zoom} />
        <div className="container d-flex flex-wrap justify-content-center">
          {hotels &&
            hotels.length > 0 &&
            hotels.map((elem) => <HotelCard hotel={elem} />)}
        </div>
      </>
    );
  }
}
