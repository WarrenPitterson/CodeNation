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
    this.setState({ Age: this.state.Person[0] - 1 })
  };

  AgeHandlerPlus = () => {
    this.setState({ Age: this.state.Person[0] + 1 })
  };
  
    
  render() {
    return (
      <div>
      <h1>my name is {this.state.Person[0].name} and my age is {this.state.Person[0].Age}</h1>
      <button onClick = {this.state.AgeHandlerPlus}>+</button>
      <button onClick = {this.state.AgeHandlerMinus}>-</button>
      </div>
    )
  }
}

export default App;
