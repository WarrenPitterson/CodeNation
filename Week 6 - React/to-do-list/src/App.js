import React, { Component } from 'react';
import './App.css';
import List from './list';

class App extends Component {
  state = {
    list: []
    }
   
   
   
   
    render() {
      return (
        <div className="App">
        <List
        />
        </div>
      );
    }
  }
  

  


export default App;
