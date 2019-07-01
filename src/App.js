import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import People from './components/People';
import NewestPeople from './components/NewestPeople';

function App() {
  const [people, setPeople] = useState([
    {
      firstName: 'Ali',
      lastName: 'Hamza'
    },
    {
      firstName: 'Umer',
      lastName: 'farooq'
    }
  ]);

  const addPeople = person => {
    setPeople([...people, person]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPeople={addPeople} />
        <People people={people} />
        <NewestPeople newPerson={people[people.length - 1]} />
      </div>
    </div>
  );
}

export default App;
