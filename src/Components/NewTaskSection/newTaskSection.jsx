import React, { Component } from "react";
import "./newTaskSection.css";

export default class NewTaskSection extends Component {
  render() {
    return (
      <div className="new-task-section">
        <input
          onChange={this.props.onChange}
          className="new-task-input"
          type="text"
          placeholder="New task"
        />
        <button onClick={this.props.onClick} className="add-btn">
          Add
        </button>
      </div>
    );
  }
}
