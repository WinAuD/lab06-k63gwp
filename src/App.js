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
          <li ><a href="/" >Description</a></li>
          <li><a href="/batman">Input</a></li>
          <li><a href="/spiderman">Output</a></li>
        </ul>
        <div className="myHeroContent">
    <Route path="/" component={Description} />
    <Route path="/bat" component={Input} />
    <Route path="/spid" component={Output} />
  </div>
      </div>
     </HashRouter>
    )
  }
}
export default NameTag;
