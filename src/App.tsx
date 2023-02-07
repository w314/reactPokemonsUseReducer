import React from 'react'
// style imported from separate css file
import './App.css'
import pokemons from './pokemons.json'
import { useState } from 'react'
import Pokemon from './pokemonInterface'
import PokemonRow from './components/PokemonRow'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'

function App() {
  // store the search string to filter the pokemon list
  const [filter, setFilter] = useState('')
  // store selected pokemon
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  return (
    <div
      // style provided as an object to style property
      style={{
        margin: "auto",
        width: 800
      }}
    >
      <h1 className="title">Pokemons</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridGap: "2rem",
        }}
      >
        <div>
          <PokemonFilter filter={filter} setFilter={setFilter}/>
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
                <PokemonRow 
                  key={pokemon.id} 
                  pokemon={pokemon} 
                  onSelect={(pokemon: Pokemon) => setSelectedPokemon(pokemon)}/> 
              )}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Selected Pokemon</h2>
          {/* use ... spread operator to pass all properties of pokemon */}
          {selectedPokemon && <PokemonInfo {...selectedPokemon}/>}
        </div>
      </div>
    </div>
  )
}

export default App
