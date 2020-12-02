import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  
  
    const [personState, setPerson] = useState({
      person: [
        {name: 'Joy', age:26},
        {name: 'Arif', age:25},
        {name: 'Pial', age:26 }
      ]
    });

    const switchNameHandler = () => {
      //console.log('Was clicked');
      //this.state.person[0].name = 'Mahamud Khan Joy';
      setPerson({person: [
        {name: 'Mahamud Khan Joy', age:26},
        {name: 'Arif Rahman', age:25},
        {name: 'Hamidur Rahaman Pial', age:26 }
      ]});
    };

    return (
      <div className="App">
        
        <h1>Hi I'm a react app.</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personState.person[0].name} 
          age={personState.person[0].age}
        />
        <Person 
          name={personState.person[1].name} 
          age={personState.person[1].age}
        >
          I am married
        </Person>
        <Person 
          name={personState.person[2].name} 
          age={personState.person[2].age}
        />

      </div>
    );
  
}

export default app;




