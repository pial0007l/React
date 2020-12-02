import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react app.</h1>
        <Person name="Joy" age="26"/>
        <Person name="Arif" age="25">I am married</Person>
        <Person name="Pial" age="26"/>
      </div>
    );
  }
}

export default App;
