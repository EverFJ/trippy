import React, { Component } from "react";

export default class HotelCard extends Component {


  render() {
    console.log(this.props.hotel);
    console.log(this.props.hotel.name);
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={"https://localhost" + this.props.hotel.pictures[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.hotel.address}</li>
              <li className="list-group-item">{this.props.hotel.name}</li>
              <li className="list-group-item">{this.props.hotel.price}€ </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
