import { Pokemon } from '../pokemonInterface'

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


export default PokemonRow