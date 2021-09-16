import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CityCard extends Component {
  render() {
    const { name, slug, source } = this.props;
    return (
<<<<<<< HEAD
      <div className={name==="Paris"? "card big"  : "card"} style={{width:"18rem", height:"20rem"}} >
=======
      <div
        className={name === "Paris" ? "card big m-4" : "card"}
        style={{ width: "10rem" }}
      >
>>>>>>> c610da7711cb56d0f3d7bcd8f9eb4b285aff5199
        <p>{name}</p>
        <Link to={`/hotels/${slug}`}>
          <img
            src={
              source
                ? `http://localhost:3002/${source}`
                : `http://via.placeholder.com/300x200`
            }
            alt="city image"
<<<<<<< HEAD

            style={{width:"17rem"}}
        />
=======
          />
>>>>>>> c610da7711cb56d0f3d7bcd8f9eb4b285aff5199
        </Link>
      </div>
    );
  }
}
