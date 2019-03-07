import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Person: [ 
      {name: "Warren", Age: 29},
      {name: "Sinead", Age: 28}
    ]
  };

  AgeHandlerMinus = () => {
    this.setState({ Age: this.Person[0].Age - 1 })
  };

  AgeHandlerPlus = () => {
    this.setState({ Age: this.Person[0].Age + 1 })
  };
  
    
  render() {
    return (
      <div>
      <h1>my name is {this.props.name} and my age is {this.props.age}</h1>
      <button onClick = {this.AgeHandlerPlus}>+</button>
      <button onClick = {this.AgeHandlerMinus}>-</button>
      </div>
    )
  }
}

export default App;
