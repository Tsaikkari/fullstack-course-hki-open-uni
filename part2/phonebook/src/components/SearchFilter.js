import React from 'react';

const SearchFilter = (props) => {
  return (
    <div>filter showing with 
      <input 
        value={props.searchPerson} 
        onChange={props.handleSetSearchPerson} 
      />
    </div>
  )
}

export default SearchFilter