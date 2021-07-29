import React from "react";
import "./toDoListItem.css";

class ToDoListItem extends React.Component {
  state = {
    id: this.props.item.id,
    showInput: false,
    taskName: this.props.item.name,
  };

  completeHandler = () => {
    console.log(this.props.item.id);
    this.props.onUpdate(this.props.item.id, this.props.item.status);
  };

  doubleClick = () => {
    this.setState({ showInput: true });
  };

  changeHandler(event) {
    this.setState({ taskName: event.target.value });
  }

  enterHandler(event) {
    if (event.key === "Enter") {
      this.props.onUpdateTask(this.state.id, this.state.taskName);
      this.setState({ showInput: false });
    }
  }

  render() {
    let inputType = "";

    if (this.state.showInput === true) {
      inputType = (
        <input
          className="updInp"
          type="text"
          value={this.state.taskName}
          onChange={(event) => this.changeHandler(event)}
          onKeyDown={(event) => this.enterHandler(event)}
        />
      );
    } else
      inputType = (
        <p className={this.props.pClassName} onDoubleClick={this.doubleClick}>
          {this.props.item.name}
        </p>
      );

    return (
      <div className={this.props.divClassName}>
        <img
          onClick={this.completeHandler}
          src={this.props.src}
          alt={this.props.alt}
        ></img>
        {inputType}
      </div>
    );
  }
}

export default ToDoListItem;
