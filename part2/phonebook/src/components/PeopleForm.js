import React from 'react';

const PeopleForm = (props) => {
  const person = props.peopleToShow.find(person => person.name === props.newName)
  const getPersonId = () => {
    if (props.newName && person) {
      return person.id
    }
  }
  
  return (
    <form onSubmit=
      {(getPersonId && props.isUpdated)
      ? props.updatePerson
      : props.addPerson
      }
    >
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