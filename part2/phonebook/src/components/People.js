import React from 'react';
import Person from './Person';

const People = (props) => {
  return (
    <div>
      {props.peopleToShow.map((person, i) => 
        <div key={i} >
          <Person 
            person={person} 
          />
          <button onClick={(id) => props.deletePerson(person.id)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default People