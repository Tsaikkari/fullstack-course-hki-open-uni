import React from 'react';
import Person from './Person';

const People = (props) => {
  return (
    <div>
      {props.peopleToShow.map((person, i) => 
        <div key={i}>
          <Person 
            person={person} 
          />
          <button className="button" onClick={() => props.deletePerson(person.id)}>DELETE</button>
        </div>
      )}
    </div>
  )
}

export default People