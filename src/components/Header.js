import React from 'react'
import Search from './Search'

function Header({ handleInput, search }) {
  return (
    <header className='header'>
      <h1>The Shoppies</h1>
      <h6>Submission by Henry Oke.</h6>
      <Search handleInput={handleInput} search={search} />
    </header>
  )
}

export default Header


