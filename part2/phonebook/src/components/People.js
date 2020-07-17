import React from 'react';
import Person from './Person';

const People = (props) => {
  return (
    <div>
      {props.peopleToShow.map((person, i) => 
        <Person key={i} person={person} />
      )}
    </div>
  )
}

export default People