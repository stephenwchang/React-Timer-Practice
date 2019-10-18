import React, { Component } from "react";

class StartButton extends Component {
  render() {
    return <button onClick={this.props.whenClicked}>Start</button>;
  }
}

export default StartButton;
