import React from 'react'
import { useState, useEffect, createContext } from 'react'
import Pokemon from './pokemonInterface'


/* THIS CONTEXT FILE HANDLES ALL FUNCTIONS CONCERNING STATE */

// set context type
type PokemonContextType = {
  pokemons: Pokemon[] | null,
  setPokemons: (pokemons: Pokemon[] | null) => void,
  filter: string,
  setFilter: (filter: string) => void,
  selectedPokemon: Pokemon | null,
  setSelectedPokemon: (pokemon: Pokemon | null) => void
}


// create context with providing initial values
// export the context, for components to import it as needed
export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  setPokemons: () => {},
  filter: '',
  setFilter: () => {},
  selectedPokemon: null,
  setSelectedPokemon: () => {},
})

// create context provider function
// it takes children as prop and will return them wrapped in the provider
const PokemonProvider = ({children}: {children: React.ReactNode}) => {
  // define state
  // pokemons array
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)
  // search string to filter the pokemon list
  const [filter, setFilter] = useState('')
  // selected pokemon
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

    // use useEffect() to get pokemons when the component mounts
    useEffect(() => {
      fetch('./pokemons.json')
      .then(response => response.json())
      .then(data => setPokemons(data))
    }, [])

    // return children wrapped in the provider
    // by setting up the Provider and its value prop here
    // all aspects of context are handled here
    // which keeps the App component simple
    return (
      < PokemonContext.Provider value={{
          pokemons,
          setPokemons,
          filter,
          setFilter,
          selectedPokemon,
          setSelectedPokemon
        }}>
          {children}
      </PokemonContext.Provider>
    )
 
}

// export the provider created
export default PokemonProvider