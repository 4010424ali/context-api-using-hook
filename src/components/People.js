import React from 'react';

const People = props => {
  return (
    <div className="col">
      <h2>
        People:
        <hr />
      </h2>
      {props.people.map(p => (
        <div key={Math.random() * 1000000000}>
          <p>
            {p.firstName} {p.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default People;
