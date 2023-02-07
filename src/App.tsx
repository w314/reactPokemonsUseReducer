import React from 'react'
// style imported from separate css file
import './App.css'
import pokemons from './pokemons.json'
import { useState } from 'react'
import Pokemon from './pokemonInterface'
// import PokemonRow from './components/PokemonRow'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonList from './components/PokemonList'


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
          <PokemonFilter 
            filter={filter}
            setFilter={setFilter}
          />
          <PokemonList
            pokemons={pokemons}
            filter={filter}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>
        {/* <PokemonInfo {...selectedPokemon} /> */}
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
