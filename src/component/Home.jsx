import React, { Component } from "react";
import { getHomeData, config } from "../utils/Api.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    this.setState({ cities: getHomeData() });
  }

  render() {
    console.log("state cities : ", this.state.cities);
    return (
      <>
        <h1>Home</h1>
      </>
    );
  }
}
