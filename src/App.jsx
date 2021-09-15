import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import CityCard from "./component/CityCard";
import Hotels from "./component/Hotels";
import HotelPage from "./component/HotelPage";
import Error404 from "./component/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hotels/:city" component={Hotels} />
        <Route path="hotel/:id" component={HotelPage} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
