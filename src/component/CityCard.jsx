import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CityCard extends Component {
  render() {
    const { name, slug, source } = this.props;
    return (
    <div className="container-fluid d-flex ">
      <div
        className={name === "Paris" ? "card big" : "card"}
        style={{ width: "18rem", height: "20rem" }}
      >
        <p>{name}</p>
        <Link to={`/hotels/${slug}`}>
          <img
            src={
              source
                ? `http://localhost:3002/${source}`
                : `http://via.placeholder.com/300x200`
            }
            alt="city image"
            style={{ width: "17rem" }}
          />
        </Link>
      </div>
      </div>
    );
  }
}
