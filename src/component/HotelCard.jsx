import React, { Component } from "react";

export default class HotelCard extends Component {
  render() {
    // console.log(this.props.hotel);
    console.log(this.props.hotel.pictures[0]);
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
<<<<<<< HEAD
          <img src={"https://localhost" + this.props.hotel.pictures[0]} className="card-img-top" alt="..." />
=======
          <img
            src={"." + this.props.hotel.pictures[0]}
            className="card-img-top"
            alt="hotel image"
          />
>>>>>>> 688f79f10251676548dc8b450444a410323eea00
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.hotel.address}</li>
              <li className="list-group-item">{this.props.hotel.name}</li>
<<<<<<< HEAD
              <li className="list-group-item">{this.props.hotel.price}€ </li>
=======
              <li className="list-group-item">{this.props.hotel.stars}</li>
>>>>>>> 688f79f10251676548dc8b450444a410323eea00
            </ul>
          </div>
        </div>
      </>
    );
  }
}
