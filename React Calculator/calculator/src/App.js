import React, { Component } from 'react';
import './App.css';
import Buttons from './Components/buttons';
import Input from './Components/input';
import Clear from './Components/clear';

class App extends Component {
  state = {
    input: ''
  }

InputAdd = digit => {
  this.setState({input: this.state.input + digit});
} 

HandleEqual = () => {
  this.setState({input:eval(this.state.input)})
}



  render() {
    return (
      <div className="App"> 
        <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
          <div className="row">
          <Buttons handleClick={this.InputAdd}>7</Buttons>
          <Buttons handleClick={this.InputAdd}>8</Buttons>
          <Buttons handleClick={this.InputAdd}>9</Buttons>
          <Buttons handleClick={this.InputAdd}>/</Buttons>
          </div>
          <div className="row">
          <Buttons handleClick={this.InputAdd}>4</Buttons>
          <Buttons handleClick={this.InputAdd}>5</Buttons>
          <Buttons handleClick={this.InputAdd}>6</Buttons>
          <Buttons handleClick={this.InputAdd}>*</Buttons>
          </div>
          <div className="row">
          <Buttons handleClick={this.InputAdd}>1</Buttons>
          <Buttons handleClick={this.InputAdd}>2</Buttons>
          <Buttons handleClick={this.InputAdd}>3</Buttons>
          <Buttons handleClick={this.InputAdd}>+</Buttons>
          </div>
          <div className="row">
          <Buttons handleClick={this.InputAdd}>.</Buttons>
          <Buttons handleClick={this.InputAdd}>0</Buttons>
          <Buttons handleClick={(this.HandleEqual)}>=</Buttons>
          <Buttons handleClick={this.InputAdd}>-</Buttons>
          </div>
          <div className ="row">
            <Clear handleClear={() => this.setState({input:""})}>Clear</Clear>
          </div>
        </div>
      </div>
    )}
}


export default App;