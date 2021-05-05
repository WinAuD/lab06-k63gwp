import React, { Component } from "react";
import "./Description.css";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";

class Description extends Component {
  
  render() {
    return (
      <div>
        <h1>Description</h1>
        Description text.{" "}
        <Link to="/input">
          <button type="button">Next (Input)</button>
        </Link>
      </div>
    ); 
  }
}
export default Description;
