import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CityCard extends Component {
  render() {
    const { name, slug, source } = this.props;
    return (
      <div>
        <p>{name}</p>
        <Link to={`/hotels/${slug}`}>
          <img src={`http://localhost:3002/${source}`} alt="city image" />
        </Link>
      </div>
    );
  }
}
