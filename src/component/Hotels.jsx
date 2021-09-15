import React, { Component } from "react";

export default class Hotels extends Component {
  constructor(){
    super()
    this.state={
      Hotels:[]
    }
  }

  componentDidMount(){
    fetch("http://localhost:3002/api/hotels/city/<city>")
    .then()
    .then()
  }

  render() {

    return (
      <>
        <h1>Hotels</h1>

      </>
    );
  }
}
