import React from 'react';

const Languages = ({ country }) => {
  const languages = country.languages
  return (
    <div>
      <h3>languages</h3>
      <ul>
        {languages.map((language, index) => {
          return <li key={index}>{language}</li>
        })}
      </ul>
    </div>
  )
}

export default Languages