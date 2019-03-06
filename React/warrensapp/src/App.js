import React from 'react';
import './App.css';
import Person from './Person';
import Pet from './Pet';


class App extends React.Component {
state = {
  Person: [
  {name: "Warren", pet: "Cat"},
  {name: "Sinead", pet: "Dog"}
  ]
};

switchNameHandler = () => {
  this.setState({Person: [
    {name: "Bob", pet: "Horse"}
  ]})
}

  render(){
    return (
          <div>
          <Person name = {this.state.Person[0].name} pet = {this.state.Person[0].pet}/>
          <Pet pet = {this.state.Person[0].pet} name = {this.state.Person[0].name}/>
          <button onClick = {this.switchNameHandler}> This is a button </button>
          </div>
        )
      } 
  
}

export default App;
