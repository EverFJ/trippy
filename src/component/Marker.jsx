import React, { Component } from "react";

export default class Marker extends Component {
  render() {
    const markerStyle = {
      backgroundColor: "white",
      width: 50,
      textAlign: "center",
      padding: 20,
    };
    return <div style={markerStyle}>{this.props.text}</div>;
  }
}
