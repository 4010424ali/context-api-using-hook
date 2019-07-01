import React, { useEffect } from 'react';

const NewestPeople = ({ newPerson }) => {
  useEffect(() => {
    const newestPersonName = `${newPerson.firstName} ${newPerson.lastName}`;
    document.title = newestPersonName;
    console.log('useEffect');
    return () => {
      console.log('unmounted');
    };
  }, [newPerson]);
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person: {`${newPerson.firstName} ${newPerson.lastName}`}
      </h2>
    </div>
  );
};

export default NewestPeople;
