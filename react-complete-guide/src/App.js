import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'Joy', age:26},
      {name: 'Arif', age:25},
      {name: 'Pial', age:26 }
    ]
  }

  render() {
    return (
      <div className="App">
        
        <h1>Hi I'm a react app.</h1>
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].name}>I am married</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].name}/>

      </div>
    );
  }
}

export default App;
