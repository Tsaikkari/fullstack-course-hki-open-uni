import React from 'react';

const Person = ({ person }) => {
  return (
    <div className="person">
      {person.name} {person.number}
    </div>
  )
}

export default Person
