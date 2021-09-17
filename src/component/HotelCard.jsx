import React, { Component } from "react";

export default class HotelCard extends Component {
  render() {
    // console.log(this.props.hotel);
    // console.log(this.props.hotel.pictures[0]);
    return (
      <div className="card col-md-5">
        <img
          src={".." + this.props.hotel.pictures[0]}
          className="card-img-top"
          style={{ width: "400px" }}
          alt="hotel image"
        />
        <div className="card-body">
          <h2>{this.props.hotel.name}</h2>
          <p>Adresse : {this.props.hotel.address}</p>
          <ul className="list-group">
            <li className="list-group-item">
              {this.props.hotel.stars} étoiles
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
