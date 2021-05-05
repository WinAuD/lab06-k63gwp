import React, { Component } from "react";

class Input extends Component {

  state= { text: ""};

  handleChange= (event) =>{this.setState( {text: event.target.value});}
  
  render() {
    return (
      <div>
        <h1>Input</h1>
        <form>
          <textarea value={this.props.content} onChange={this.props.contUpdate}/>
        </form> 
      </div>
    );
  }
}
export default Input;

// <textarea rows="8" cols="40" onChange={this.handleChange} value={this.state.text}/>