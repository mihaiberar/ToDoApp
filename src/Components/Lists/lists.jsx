import React from "react";
import "./lists.css";
import checked from "../../Media/check-square-solid.svg";
import deleted from "../../Media/trash-alt-regular.svg";
import unchecked from "../../Media/square-regular.svg";
import ToDoListItem from "../ToDoListItem/toDoListItem";
import CompletedListItem from "../CompletedListItem/completedListItem";

class Lists extends React.Component {
  update = (id, status) => {
    console.log(id, status);
    const url = `https://607fe0fca5be5d00176dc7b2.mockapi.io/api/list-team-3/${id}`;
    let data = {
      createdAt: Date.now(),
      status: status === "completed" ? "incomplete" : "completed",
    };
    console.log(data);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(() => this.props.getData())
      .catch((error) => console.log(error));
  };

  updateTask = (id, newName) => {
    const url = `https://607fe0fca5be5d00176dc7b2.mockapi.io/api/list-team-3/${id}`;
    let data = { name: newName };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(() => this.props.getData())
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="lists">
        <div className="toDoList">
          <h1>
            <u>To Do</u>
          </h1>
          <div className="toDoItems">
            {this.props.toDoName.map((item, index) => {
              return (
                <ToDoListItem
                  onUpdate={this.update}
                  onUpdateTask={this.updateTask}
                  item={item}
                  key={index}
                  divClassName="toDoListItem"
                  pClassName="toDoListItemText"
                  src={unchecked}
                  alt="unchecked"
                />
              );
            })}
          </div>
        </div>
        <div className="completedList">
          <h1>
            <u>Completed</u>
          </h1>
          <div className="completedItems">
            {this.props.completedName.map((item, index) => {
              return (
                <CompletedListItem
                  getData={this.props.getData}
                  onUpdate={this.update}
                  key={index}
                  item={item}
                  divClassName="completedListItem"
                  pClassName="completedListItemText"
                  srcChecked={checked}
                  srcDeleted={deleted}
                  altChecked="checked"
                  altDeleted="Deleted"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Lists;
