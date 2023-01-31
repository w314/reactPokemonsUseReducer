import React from 'react'
import './App.css'
import pokemons from './pokemons.json'
import { useState } from 'react'
import { Pokemon } from './pokemonInterface'

const PokemonRow:React.FunctionComponent<{pokemon: Pokemon}> = ({pokemon}) => (
  <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
  </tr>
)

function App() {
  const [filter, setFilter] = useState()

  return (
    <div
      style={{
        margin: "auto",
        width: 800
      }}
    >
      <h1 className="title">Pokemons</h1>
      <input type="text"></input>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.slice(0, 15).map(pokemon =>
            <PokemonRow key={pokemon.id} pokemon={pokemon}/> 
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
