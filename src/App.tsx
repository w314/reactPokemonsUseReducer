import React from 'react'
import './App.css'
import pokemons from './pokemons.json'
import { useState } from 'react'
import { Pokemon } from './pokemonInterface'

// PokemonRow component to display rows in our pokemon table
const PokemonRow:React.FunctionComponent<{pokemon: Pokemon}> = ({pokemon}) => (
  <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
  </tr>
)

function App() {
  // store the search string to filter the pokemon list
  const [filter, setFilter] = useState('')
  
  return (
    <div
      style={{
        margin: "auto",
        width: 800
      }}
    >
      <h1 className="title">Pokemons</h1>
      <input type="text" value={filter} onChange={(event) => setFilter(event.target.value) }></input>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
          // only take the first 15 pokemons from the list
          .slice(0, 15)
          // let the user search the list
          // using toLowerCase() to make the search case insensitive (includes is case sensitive)
          .filter(pokemon => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())) 
          // use map to display all the pokemons
          .map(pokemon =>
            // use PokemonRow component to display the current pokemon
            <PokemonRow key={pokemon.id} pokemon={pokemon}/> 
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
