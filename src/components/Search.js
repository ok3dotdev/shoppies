import React from 'react'
import {FiSearch} from 'react-icons/fi'


function Search({handleInput, search}) {
    return (
        <section className="search">
        <FiSearch className='icon'/>
         <input className='searchbox' type="text" placeholder='Search movies here'
         onChange={handleInput}
         onKeyPress={search}/>

         </section>


    )
}

export default Search
