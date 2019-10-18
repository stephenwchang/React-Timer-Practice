import React, { Component } from "react";
import Alert from "./components/Alert";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import UserInput from "./components/UserInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      userInput: null
    };
    this.interval = undefined;
  }

  onUserChange = event => {
    this.setState({ userInput: event.target.value });
  };

  whenClicked = () => {
    clearInterval(this.interval);
    this.setState({ time: this.state.userInput });
    this.interval = setInterval(() => {
      console.log("hello");
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      }
    }, 1000);
  };

  // componentWillUnmount() {
  //   clearInterval(this.intervalVar);
  // }

  render() {
    if (this.state.time === 0) {
      clearInterval(this.interval);
    }
    return (
      <div>
        <UserInput onUserChange={this.onUserChange} />
        <StartButton whenClicked={this.whenClicked} />
        <Timer time={this.state.time} />
        <Alert time={this.state.time} />
      </div>
    );
  }
}

export default App;
