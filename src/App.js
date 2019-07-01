import React, { useState } from 'react';
import './App.css';

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
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const onChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (person.firstName.trim() === '' || person.lastName.trim() === '') {
      return;
    }
    const newPerosn = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    };

    setPeople([...people, newPerosn]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add Person</h2>
          <hr />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={person.firstName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={person.lastName}
                onChange={onChange}
              />
            </div>
            <button className="btn btn-success" type="submit">
              Add Person
            </button>
          </form>
        </div>
        <div className="col">
          <h2>
            People:
            <hr />
            {people.map(p => (
              <div key={Math.random() * 1000000000}>
                <p>
                  {p.firstName} {p.lastName}
                </p>
              </div>
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
