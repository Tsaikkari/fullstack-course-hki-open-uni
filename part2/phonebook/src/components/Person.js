import React from 'react';

const Person = ({ filteredPerson }) => {
  return (
    <p>{filteredPerson.name} {filteredPerson.number}</p>
  )
}

export default Person