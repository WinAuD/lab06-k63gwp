import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  
  render() {
    return (
      <div>
        <h1>Description</h1>
        Description text.{" "}
        <button class="NiceButton">
          Klick
        </button>
      </div>
    );
  }
}
export default Description;
