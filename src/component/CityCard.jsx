import React, { Component } from "react";

export default class CityCard extends Component {
  render() {
    const { name, slug, source } = this.props;
    return (
      <div>
        <p>
          CityCard : name({name}), slug({slug}), source({source})
        </p>
      </div>
    );
  }
}
