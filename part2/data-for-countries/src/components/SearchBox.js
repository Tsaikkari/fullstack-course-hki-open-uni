import React from 'react';

const SearchBox = (props) => (
  (
    <div>
      <span>find countries </span> 
      <input type="text" 
        value={props.searchCountry}
        onChange={props.handleCountrySearch} 
      />
    </div>
  )
)

export default SearchBox