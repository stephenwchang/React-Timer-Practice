import React, { Component } from "react";

class Alert extends Component {
  alertContent = "";

  render() {
    if (this.props.time === 5) {
      alertStyle.color = "red";
      this.alertContent = "5 seconds remaining!";
    } else if (this.props.time === 0) {
      alertStyle.color = "purple";
      this.alertContent = `Time's up!`;
    } else if (this.props.time) {
      this.alertContent = "Timer running...";
    }
    return <div style={alertStyle}>{this.alertContent}</div>;
  }
}

const alertStyle = {
  color: "",
  fontSize: "20px"
};

export default Alert;
