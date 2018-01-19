import React, { Component } from "react";
import { render } from "react-dom";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "adf1", name: "Stanley", age: 43 },
        { id: "adf2", name: "Carole", age: 43 },
        { id: "adf3", name: "Steven", age: 19 }
      ],
      showPersons: false
    };
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    //     const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const displayPersons = !this.state.showPersons;
    this.setState({
      showPersons: displayPersons
    });
  };
  deletePersonHandler = personIndex => {
    //     const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
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
