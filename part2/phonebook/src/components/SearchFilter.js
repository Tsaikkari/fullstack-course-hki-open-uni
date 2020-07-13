import React from 'react';

const SearchFilter = (props) => {
  return (
    <div>filter showing with 
      <input 
        value={props.text} 
        onChange={props.handleTextFilter} 
      />
    </div>
  )
}

export default SearchFilter