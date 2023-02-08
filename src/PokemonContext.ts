import React from 'react'
import { createContext } from 'react'
import Pokemon from './pokemonInterface'

type PokemonContextType = {
  pokemons: Pokemon[] | null,
  setPokemons: (pokemons: Pokemon[] | null) => void,
  filter: string,
  setFilter: (filter: string) => void,
  selectedPokemon: Pokemon | null,
  setSelectedPokemon: (pokemon: Pokemon | null) => void
}

const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  setPokemons: () => {},
  filter: '',
  setFilter: () => {},
  selectedPokemon: null,
  setSelectedPokemon: () => {},
})

export default PokemonContext