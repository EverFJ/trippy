import React, { Component } from "react";

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
      })
      .catch((err) => console.error(err));
  }

  render() {
    // console.log(this.props.match.params.city);
    return (
      <>
        <h1>Hotels</h1>
      </>
    );
  }
}
