import React from 'react'
import { ReactComponent as SeacrhIcon} from '../assets/icon-search.svg'
export default function SearchBar() {
  return (
    <div className='search-bar-container'>
      <SeacrhIcon/>
      <input type='text' placeholder='Search'/>
    </div>
  )
}
;