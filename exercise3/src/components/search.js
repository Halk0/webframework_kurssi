import React from 'react'

const Search = props => {
    return <form onSubmit={props.Submit} id='search'>
        <input name='searchbar' type="text" placeholder='search...' />
        <button type='submit' form='search' value='submit'></button>
    </form>
}

export default Search;
