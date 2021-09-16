import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class CityCard extends Component {
  render() {
    const { name, slug, source } = this.props;
    return (
      <div className={name==="Paris"? "card big m-4"  : "card"} style={{width:"10rem"}}>
        <p>{name}</p>
        <Link to={`/hotels/${slug}`}>
<<<<<<< HEAD
          <img src={`http://localhost:3002/${source}`} style={{width: "150px"}} alt="city image" />
=======
          <img
            src={
              source
                ? `http://localhost:3002/${source}`
                : `http://via.placeholder.com/300x200`
            }
            alt="city image"
          />
>>>>>>> 82a4fd0a44047dedece93f5ae81458b1866ab3cb
        </Link>
      </div>
    );
  }
}
