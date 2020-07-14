import React from 'react';
import Person from './Person';

const PhonebookPage = (props) => {
  return (
    <div>
      {props.filteredPeople.map(filteredPerson => 
        <Person key={filteredPerson.name} filteredPerson={filteredPerson}/>
      )}
    </div>
  )
}

export default PhonebookPage