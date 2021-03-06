import React, { useState } from 'react';

const Form = props => {
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

    props.addPeople(newPerosn);
    setPerson({ firstName: '', lastName: '' });
  };
  return (
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
  );
};

export default Form;
