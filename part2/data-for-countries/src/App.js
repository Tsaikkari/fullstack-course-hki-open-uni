import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBox from './components/SearchBox';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)

  const hook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)   
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(hook, [])

  const handleCountrySearch = (event) => {
    let filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearchCountry(event.target.value)
    if (event.target.value === '') {
      setFilteredCountries([])
    } else {
      setFilteredCountries(filteredCountries)
    }
  }

  // 2.13*: TODO: fix
  const showCountryDetails = (name) => {
    const detailCountry = filteredCountries.find(country => country.name === name)
    console.log(detailCountry)
    setShowCountry(!showCountry)
    setCountries(detailCountry)
  }
    
  return (
    <div>
      <SearchBox 
        searchCountry={searchCountry}
        handleCountrySearch={handleCountrySearch}
      />
      
      {(filteredCountries.length > 1 && filteredCountries.length <= 10) && 
      <Countries 
        filteredCountries={filteredCountries}  
        showDetails={showCountryDetails}  
        detailCountry={countries}
      />}
      {filteredCountries.length > 10 && <p>Too many matches, specify another filter</p>}
      {filteredCountries.length === 1 && filteredCountries.map((country, i) => 
        <Country 
          key={i} 
          country={country}
        />
      )}
    </div>
  );
}

export default App;
