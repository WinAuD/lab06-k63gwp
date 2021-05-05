import React, { Component } from "react";
import "./Description.css";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Description extends Component {
  
  render() {
    return (
      <div>
        <h1>Description</h1>
        Description text.{" "}
        <button class="NiceButton">
          <li><NavLink to ="/input">Input</NavLink></li>
        </button>
      </div>
    );
  }
}
export default Description;
