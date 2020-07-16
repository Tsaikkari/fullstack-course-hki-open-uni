import React, { useState, useEffect } from 'react'
import PeopleForm from './components/PeopleForm';
import Person from './components/Person'
import personService from './services/people';

const App = () => {
  const [people, setPeople] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    let namesOfPeopleInPhonebook = people.map((person) => {
      return person.name
    })
  
    namesOfPeopleInPhonebook.includes(newName) 
    ?
      alert(`${newName} is already added to the phonebook`)
    :
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPeople(people.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>add a new</h2>
      <PeopleForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
      />
      <div>
      <div>
      {people.map((person, i) => 
        <Person key={i} person={person} />
      )}
      </div>
      </div>
      <h2>Numbers</h2>
    </div>
  )
}

export default App