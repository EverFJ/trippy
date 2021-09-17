import React, { Component } from "react";

export default class HotelCard extends Component {
  render() {
    // console.log(this.props.hotel);
    console.log(this.props.hotel.pictures[0]);
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            // src={"." + this.props.hotel.pictures[0]}
            src="./img/hotels/597573_1.jpg"
            className="card-img-top"
            alt="hotel image"
          />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.hotel.address}</li>
              <li className="list-group-item">{this.props.hotel.name}</li>
              <li className="list-group-item">{this.props.hotel.stars}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
