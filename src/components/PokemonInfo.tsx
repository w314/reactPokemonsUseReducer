import React from 'react'
import Pokemon from '../pokemonInterface'


// PokemonInfo component to display selected pokemon
const PokemonInfo:React.FunctionComponent<{
  pokemon: Pokemon | null,
  }> = ({pokemon}) => (
    <div>
      <h2>Selected Pokemon</h2>
      {pokemon && (
        <div>
            <h3>{pokemon.name.english}</h3>
            <table>
              <tbody>
                {Object.entries(pokemon.base).map(([key, value]) => 
                  (<tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>)
                )}
              </tbody>
            </table>
        </div>
      )}
    </div>
  )
    





export default PokemonInfo