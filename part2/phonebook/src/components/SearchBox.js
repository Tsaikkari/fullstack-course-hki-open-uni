import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
      filter shown with
      <input value={props.searchPerson} onChange={props.handlePersonSearch}/>
    </div>
  )
}

export default SearchBox