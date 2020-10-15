import React, {useState, Component} from "react";
import "./Home.css";
import flatDesign from "./data/flat-design.jpg";

import SignPage from './components/Auth';
import MapOpen from './components/MapOpen';
import Home from './components/home';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class HomeRoute extends Component {

  render(){
   
  return (
    <BrowserRouter>
    <Switch>
    <Redirect from="/" to="/home" exact />
    <Route path="/home" component={Home}/>
    <Route path="/signup" component={SignPage}/>
    <Route path="/map" component={MapOpen}/>
    </Switch>
    </BrowserRouter>
  );
}

}

export default HomeRoute;
