import React, { useState, useEffect } from 'react'
import PeopleForm from './components/PeopleForm';
import People from './components/People'
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

  const deletePerson = (id) => {
    //const delPerson = people.find(p => p.id === id)
    personService
    .del(id)
    .then(response => {
      setPeople(people.filter(p => p.id !== id))
    })
    .catch(error => {
      console.log(error)
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
      <h2>Numbers</h2>
      <People 
        peopleToShow={peopleToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App