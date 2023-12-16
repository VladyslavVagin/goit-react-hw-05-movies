import React from 'react'

const SearchBar = ({onSubmit}) => {

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Search...' autoComplete='false'/>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar