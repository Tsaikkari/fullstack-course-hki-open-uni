import React from 'react';

const PeopleForm = (props, { person }) => {
  console.log(person)
  // TODO: fix the person.id
  // props.isUpdated ? props.peopleToShow.map(person => () => props.updatePerson(person.id)) : props.addPerson
  return (
    <form onSubmit={props.isUpdated ? () => props.updatePerson(person.id) : props.addPerson}>
      <div>
        <span>name: </span> 
        <input 
          className="name"
          value={props.newName} 
          onChange={props.handlePersonChange}
        />
      </div>
      <div>
        <span>number: </span>
        <input 
          className="number"
          value={props.newNumber} 
          onChange={props.handleNumberChange}
        />  
      </div>
      <button className="button" type="submit">ADD</button>
    </form>
  )
}

export default PeopleForm