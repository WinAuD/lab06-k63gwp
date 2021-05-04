import React, { Component } from "react";
import "./App.css";
import Description from './Description.js'
import Input from './Input.js'
import Output from './Output.js'
 
class NameTag extends Component {
 
  render() {
    return (
      <div>
        <h1>Reader Page</h1>
        <ul>
          <li ><a href="/">Description</a></li>
          <li><a href="/batman">Input</a></li>
          <li><a href="/spiderman">Output</a></li>
        </ul>
      </div>
    )
  }
}
export default NameTag;
