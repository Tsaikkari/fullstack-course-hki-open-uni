import React from 'react';

const SearchBox = (props) => (
  (
    <div>
      find countries 
      <input type="text" 
      value={props.searchCountry}
      onChange={props.handleSetSearchCountry} />
    </div>
  )
)

export default SearchBox