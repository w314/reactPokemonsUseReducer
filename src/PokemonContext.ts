import React from 'react'
import { createContext } from 'react'
import Pokemon from './pokemonInterface'

type PokemonContextType = {
  filter: string,
  setFilter: (filter: string) => void,
  selectedPokemon: Pokemon | null,
  setSelectedPokemon: (pokemon: Pokemon | null) => void
}

const PokemonContext = createContext<PokemonContextType>({
  filter: '',
  setFilter: () => {},
  selectedPokemon: null,
  setSelectedPokemon: () => {},
})

export default PokemonContext