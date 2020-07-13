import React, { useState } from 'react'
import PeopleForm from './components/PeopleForm';
import PhonebookPage from './components/PhonebookPage';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [text, setTextFilter] = useState('')

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
      setPeople(people.concat(personObject))
      setNewName('')
      setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
// TODO: fix this
  const handleTextFilter = (event) => {
    people.filter((person) => {
      const text = event.target.value
      const textMatch = person.name.toLowerCase().includes(text.toLowerCase())
      setTextFilter(text)
      return textMatch
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter 
        text={text}
        handleTextFilter={handleTextFilter}
      />
      <h2>add a new</h2>
      <PeopleForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PhonebookPage people={people}/>
    </div>
  )
}

export default App