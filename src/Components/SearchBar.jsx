import React from 'react'

export default function SearchBar() {
  return (
    <div className='search-bar-container'>
      <img src="/assets/icon-search.svg" alt='not-found'/>
      <input type='text' placeholder='Search'/>
    </div>
  )
}
;