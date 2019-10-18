import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return <input onChange={this.props.onUserChange} type="number" />;
  }
}

export default UserInput;
