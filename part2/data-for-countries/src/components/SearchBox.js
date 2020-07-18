import React from 'react';

const SearchBox = (props) => (
  (
    <div>
      find countries 
      <input type="text" 
        value={props.searchCountry}
        onChange={props.handleCountrySearch} 
      />
    </div>
  )
)

export default SearchBox