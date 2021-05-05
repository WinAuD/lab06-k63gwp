import React, { Component } from "react";

class Output extends Component {
  
  render() {
    return (
      <div>
        <h1>Output</h1>
        {this.props.content}
      </div>
    );
  }
}
export default Output;
