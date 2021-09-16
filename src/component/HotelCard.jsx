import React, { Component } from "react";

export default class HotelCard extends Component {
  render() {
    console.log(this.props.hotel);
    return (
      <div>
        <h1>HotelCard</h1>
      </div>
    );
  }
}
