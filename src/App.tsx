import React from 'react'
// style imported from separate css file
import './App.css'
import { useState } from 'react'

import Pokemon from './pokemonInterface'

import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonList from './components/PokemonList'

import PokemonContext from './PokemonContext'

function App() {
  // store the search string to filter the pokemon list
  const [filter, setFilter] = useState('')
  // store selected pokemon
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  return (
    <PokemonContext.Provider 
      value = {{
        filter,
        setFilter,
        selectedPokemon,
        setSelectedPokemon,
    }}>
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
          <PokemonFilter />
          <PokemonList />
        </div>
        <PokemonInfo />
     </div>
    </div>
    </PokemonContext.Provider>
  )
}

export default App
