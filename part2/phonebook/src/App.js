import React, { useState, useEffect } from 'react'
import PeopleForm from './components/PeopleForm';
import Person from './components/Person'
import personService from './services/people';
import SearchBox from './components/SearchBox';

const App = () => {
  const [people, setPeople] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchPerson, setSearchPerson]  = useState('')
  const [filteredPeople, setFilteredPeople] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])

  const peopleToShow = showAll
  ? people
  : filteredPeople

  const handlePersonSearch = (event) => {
    let filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearchPerson(event.target.value)
    if (event.target.value === '') {
      setShowAll(peopleToShow)
    } else {
      setFilteredPeople(filteredPeople)
      setShowAll(!showAll)
    }
  }

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
      <h1>Phonebook</h1>
      <SearchBox 
        searchPerson={searchPerson}
        handlePersonSearch={handlePersonSearch}
      />
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
      {peopleToShow.map((person, i) => 
        <Person key={i} person={person} />
      )}
      </div>
      </div>
      <h2>Numbers</h2>
    </div>
  )
}

export default App