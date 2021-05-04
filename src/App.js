import React, { Component } from "react";
import "./App.css";
import Description from './Description.js'
import Input from './Input.js'
import Output from './Output.js'
import { Route, NavLink, HashRouter } from "react-router-dom";
 
class NameTag extends Component {
 
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Reader Page</h1>
          <ul>
            <li ><NavLink exact to ="/" >Description</NavLink></li>
            <li><NavLink to ="/input">Input</NavLink></li>
            <li><NavLink to="/output">Output</NavLink></li>
          </ul>
          <div className="myHeroContent">
            <Route exact path="/" component={Description} />
            <Route path="/input" component={Input} />
            <Route path="/output" component={Output} />
          </div>
        </div>
      </HashRouter>
    )
  }
}
export default NameTag;
