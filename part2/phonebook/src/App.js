import React, { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [people, setPeople] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    let namesOfPeopleInPhonebook = people.map((person) => {
      return person.name
    })
  
    if (namesOfPeopleInPhonebook.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPeople(people.concat(personObject))
    } 
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {people.map(person => 
          <Person key={person.name} person={person}/>
        )}
      </div>
    </div>
  )
}

export default App