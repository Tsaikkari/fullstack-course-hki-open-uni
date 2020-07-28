import React, { useState, useEffect } from 'react'
import PeopleForm from './components/PeopleForm';
import People from './components/People'
import personService from './services/people';
import SearchBox from './components/SearchBox';
import Notification from './components/Notification';

const App = () => {
  const [people, setPeople] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchPerson, setSearchPerson]  = useState('')
  const [filteredPeople, setFilteredPeople] = useState([])
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isUpdated, setUpdated] = useState(false)

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
    const namesOfPeopleInPhonebook = people.map((person) => {
      return person.name
    })
    namesOfPeopleInPhonebook.includes(newName) && !people.includes(newNumber)
    ?
    (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
    && updatePerson()
    )
    //alert(`${newName} is already added to the phonebook`)
    :
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPeople(people.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  const updatePerson = (id) => {
    console.log(id)
    const person = peopleToShow.find(p => p.id === id)
    console.log(person)
    const changedPerson = { ...person, newNumber }
    personService
    .update(id, changedPerson)
    .then(returnedPerson => {
      setPeople(people.map(person => person.id === id && returnedPerson))
      setUpdated(true)
      setMessage(
        `Number was updated`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const deletePerson = (id) => {
    personService
    .del(id)
    .then(() => {
      setPeople(people.filter(p => p.id !== id))
    })
    .catch(error => {
      setErrorMessage(
        `Error happened`
      )
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
    <div className="app">
      <h1>Phonebook</h1>
      {(message || errorMessage) &&
      <Notification 
        message={message} 
        errorMessage={errorMessage} />}
      <SearchBox 
        searchPerson={searchPerson}
        handlePersonSearch={handlePersonSearch}
      />
      <h2>add a new</h2>
      <PeopleForm 
        addPerson={addPerson}
        updatePerson={updatePerson}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
        peopleToShow={peopleToShow}
        isUpdated={isUpdated}
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