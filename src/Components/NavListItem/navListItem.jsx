import React, { Component } from "react";
import "./navListItem.css";

export default class NewListItem extends Component {
  render() {
    return <li className={this.props.className}>{this.props.text}</li>;
  }
}
