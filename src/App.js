import React from "react";
import "./App.css";
import "./Components/NewTaskSection/newTaskSection.css";
import NewTaskSection from "./Components/NewTaskSection/newTaskSection";
import NavBar from "./Components/NavBar/navbar";
import Lists from "./Components/Lists/lists";

const url = "https://607fe0fca5be5d00176dc7b2.mockapi.io/api/list-team-3";

class App extends React.Component {
  state = {
    toDoName: [],
    completedName: [],
    newName: "",
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const toDoName = data.filter((item) => item.status === "incomplete");
        const completedName = data.filter(
          (item) => item.status === "completed"
        );
        this.setState({
          toDoName: [...toDoName],
          completedName: [...completedName],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  postData = () => {
    const data = {
      createdAt: Date.now(),
      name: this.state.newName,
      status: "incomplete",
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          toDoName: [...this.state.toDoName, this.state.newName],
        });
        this.getData();
      })
      .catch((error) => console.log(error));
  };

  changeHandler = (event) => {
    this.setState({ newName: event.target.value });
  };

  clickHandler = () => {
    console.log(this.state.newName);
    this.postData();
  };

  render() {
    return (
      <div>
        <NavBar />
        <NewTaskSection
          onChange={this.changeHandler}
          onClick={this.clickHandler}
        />
        <Lists
          toDoName={this.state.toDoName}
          completedName={this.state.completedName}
          getData={this.getData}
        />
      </div>
    );
  }
}

export default App;
