import React, { Component } from "react";
import "../stylesheets/display.css";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="display">{this.props.currentNumber}</div>;
  }
}

export default Display;
