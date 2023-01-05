import "./App.css";
import React, { Component } from "react";
import SearchBox from "./components/search-box/search-box";
import Navbar from "./components/navbar/navbar";
import CardList from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    console.log("construtor");

    this.state = {
      students: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://nith-portal-11-qsje.onrender.com/api/v1/student?search=")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => {
        // whenever set state i called rneder function is re called
        this.setState(
          () => {
            console.log(users);
            return {
              students: users,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  // Remember whenever setstate is called render is called  again
  onSearchChange = (event) => {
    // event.preventDefault();
    const searchField = event.target.value.toLowerCase();
    // console.log(event.target.value);
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");
    const { students, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredStudents = students.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <Navbar onSearchChange={onSearchChange} />

        {/* {filteredStudents.map((student) => {
          return (
            <div key={student.id}>
              <h1>{student.name}</h1>
            </div>
          );
        })} */}
        <CardList students={filteredStudents} />
      </div>
    );
  }
}

export default App;
