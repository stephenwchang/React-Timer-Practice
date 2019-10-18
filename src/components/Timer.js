import React, { Component } from "react";

class Timer extends Component {
  render() {
    if (this.props.time > 5) {
      timerStyles.color = "green";
    } else {
      timerStyles.color = "red";
    }
    return <div style={timerStyles}>{this.props.time}</div>;
  }
}

const timerStyles = {
  fontWeight: "bold",
  color: "",
  fontSize: "50px"
};

export default Timer;
