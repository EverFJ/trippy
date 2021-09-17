import React, { Component } from "react";

export default class Marker extends Component {
  render() {
    const markerStyle = {
      backgroundColor: "orange",
      width: 70,
      textAlign: "center",
      padding: 5,
    };
    return <div style={markerStyle}>{this.props.text}</div>;
  }
}
