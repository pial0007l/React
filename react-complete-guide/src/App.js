import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  
  
    const [personState, setPerson] = useState({
      person: [
        {name: 'Joy', age:26},
        {name: 'Arif', age:25},
        {name: 'Pial', age:26 }
      ],
      showPersons: true
    });

    const switchNameHandler = () => {
      setPerson({person: [
        {name: 'Mahamud Khan Joy', age:26},
        {name: 'Arif Rahman', age:25},
        {name: 'Hamidur Rahaman Pial', age:26 }
      ]});
    }

    const nameChangeHandeler = (event) => {
      setPerson({
        person: [
          {name: 'Khan', age:26},
          {name: event.target.value, age:25},
          {name: 'Hamidur Rahaman Pial', age:26 }
        ]
      });
    }

    const togglePersonsHandeler= () => {
        const doseShow = useState.showPersons;
        setPerson({showPersons: true});
    }

    return (
      <div className="App">
        
        <h1>Hi I'm a react app.</h1>
        <button 
            onClick={togglePersonsHandeler}>Switch Name</button>
        {
          useState.showPersons === true ?
            <div>
                <Person 
                  name={personState.person[0].name} 
                  age={personState.person[0].age}
                />
                <Person 
                  name={personState.person[1].name} 
                  age={personState.person[1].age}
                  click={switchNameHandler}
                  changed={nameChangeHandeler}
                >
                  I am married
                </Person>
                <Person 
                  name={personState.person[2].name} 
                  age={personState.person[2].age}
                />
            </div> : null
        }
        

      </div>
    );
  
}

export default app;




