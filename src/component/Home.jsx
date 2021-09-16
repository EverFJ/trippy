import React, { Component } from "react";
import { getHomeData, config } from "../utils/Api.js";
import CityCard from "./CityCard";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      loading: true,
    };
  }

  componentDidMount() {
    getHomeData().then((data) =>
      this.setState({
        cities: data,
        loading: false,
      })
    );
  }

  render() {
    const { cities } = this.state;
    // console.log("state cities : ", this.state.cities);
    return (
      <>
        <h1>Découvrir le monde</h1>
        {cities.length !== 0 &&
          cities.map((elem) => {
            return (
              <CityCard
                key={elem.name}
                name={elem.name}
                slug={elem.slug}
                source={elem.source}
              />
            );
          })}
      </>
    );
  }
}
