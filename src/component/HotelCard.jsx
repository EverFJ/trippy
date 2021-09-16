import React, { Component } from "react";

export default class HotelCard extends Component {


  render() {
    console.log(this.props.hotel);
    console.log(this.props.hotel.name);
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={"`http://localhost:3002/" + this.props.hotel.pictures[0]} class="card-img-top" alt="..." />
          <div className="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{this.props.hotel.address}</li>
              <li class="list-group-item">{this.props.hotel.name}</li>
              <li class="list-group-item">{this.props.hotel.stars}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
