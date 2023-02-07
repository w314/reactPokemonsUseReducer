import React from 'react'
// style imported from separate css file
import './App.css'
import pokemons from './pokemons.json'
import { useState } from 'react'
import { Pokemon } from './pokemonInterface'

// PokemonRow component to display rows in our pokemon table
const PokemonRow:React.FunctionComponent<{
  pokemon: Pokemon, 
  // function to be called when row is selected
  onSelect: (pokemon: Pokemon) => void
  }> = ({pokemon, onSelect}) => (
  <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      {/* set onClick property to call onSelect function */}
      <td><button onClick={() => onSelect(pokemon)}>select</button></td>
  </tr>
)

// SelectedPokemon component to display selected pokemon
const SelectedPokemon:React.FunctionComponent<{
  // use Record to type index and value in properties received
  // otherwise base[key] will give error message that string cannot index base
  name: Record<string, string>,
  base: Record<string, number>
  // use {} object destructuring when listing parameters
  }> = ({name, base}) => (
    <div>
      <h3>{name.english}</h3>
      <table>
        <tbody>
          {Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)

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
          {selectedPokemon && <SelectedPokemon {...selectedPokemon}/>}
        </div>
      </div>
    </div>
  )
}

export default App
