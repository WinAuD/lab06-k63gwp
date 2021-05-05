import React, { Component } from "react";
import "./Input.css";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Input extends Component {

  render() {
    return (
      <div>
        <h1>Input</h1>
        <form>
          <textarea value={this.props.content} onChange={this.props.contUpdate}/>
        </form>
        <button class="NiceButton">
          <NavLink to="/output">Output</NavLink>
        </button> 
      </div>
    );
  }
}
export default Input;

// <textarea rows="8" cols="40" onChange={this.handleChange} value={this.state.text}/>