import React from 'react'
import Pokemon from '../pokemonInterface'
import PokemonRow from './PokemonRow'
import { useContext } from 'react'
import { PokemonContext } from '../PokemonContext'


const PokemonList: React.FunctionComponent = () => {

  const { pokemons, filter, setSelectedPokemon } = useContext(PokemonContext)

  return (
    pokemons ? 
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
    : null
  )
}

export default PokemonList