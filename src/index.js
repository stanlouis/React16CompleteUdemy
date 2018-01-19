import React, { Component } from "react";
import { render } from "react-dom";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Stanley", age: 43 },
        { name: "Carole", age: 43 },
        { name: "Steven", age: 19 }
      ],
      showPersons: false
    };
  }
  switchNameHanlder = newName => {
    this.setState(() => {
      return {
        persons: [
          { name: newName, age: 43 },
          { name: "Carole", age: 43 },
          { name: "Steven", age: 18 }
        ]
      };
    });
  };
  nameChangeHandler = event => {
    const changedName = event.target.value;
    this.setState(() => {
      return {
        persons: [
          { name: "Max", age: 43 },
          { name: changedName, age: 43 },
          { name: "Steven", age: 18 }
        ]
      };
    });
  };
  togglePersonsHandler = () => {
    const displayPersons = !this.state.showPersons
    this.setState({
      showPersons: displayPersons
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      marginBottom: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            click={this.switchNameHanlder.bind(this, "Max!")}
            changed={this.nameChangeHandler}
            age={this.state.persons[1].age}
          >
            My Hobbies are: Diving
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
