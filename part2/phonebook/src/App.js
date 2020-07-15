import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PeopleForm from './components/PeopleForm';
import PhonebookPage from './components/PhonebookPage';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [people, setPeople] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')
  const [filteredPeople, setFilteredPeople] = useState([])

  const hook = () => {
    axios
    .get('http://localhost:3001/people')
    .then(response => {
      setPeople(response.data)
    })
  }

  useEffect(hook, [])

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

  const handleSetSearchPerson = (event) => {
    let filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearchPerson(event.target.value)
    if (event.target.value === '') {
      setFilteredPeople([])
    } else {
      setFilteredPeople(filteredPeople)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter 
        searchPerson={searchPerson}
        handleSetSearchPerson={handleSetSearchPerson}
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
      <PhonebookPage 
        filteredPeople={filteredPeople}
      />
    </div>
  )
}

export default App