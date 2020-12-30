import React from 'react'
import Search from './Search'

function Header({handleInput, search}) {
    return (
        <header className='header'>
          <h1>The Shoppies</h1>
          <Search handleInput={handleInput} search={search}/>
        </header>
             )
         }
         
export default Header
             

