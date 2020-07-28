import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
      <span>filter shown with </span>
      <input value={props.filteredPeople} onChange={props.handlePersonSearch}/>
    </div>
  )
}

export default SearchBox