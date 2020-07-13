import React, { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [ people, setPeople ] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const person = {
      name: newName
    }
    setPeople(people.concat(person))
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