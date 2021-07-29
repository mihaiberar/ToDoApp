import React from "react";
import "./completedListItem.css";

class CompletedListItem extends React.Component {
  incompleteHandler = () => {
    this.props.onUpdate(this.props.item.id, this.props.item.status);
  };

  deleteData = (id) => {
    const url = `https://607fe0fca5be5d00176dc7b2.mockapi.io/api/list-team-3/${id}`;

    fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((newData) => this.props.getData())
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className={this.props.divClassName}>
        <img
          onClick={this.incompleteHandler}
          src={this.props.srcChecked}
          alt={this.props.altChecked}
        ></img>
        <p className={this.props.pClassName}>{this.props.item.name}</p>
        <img
          onClick={() => {
            this.deleteData(this.props.item.id);
          }}
          src={this.props.srcDeleted}
          alt={this.props.altDeleted}
        ></img>
      </div>
    );
  }
}

export default CompletedListItem;
