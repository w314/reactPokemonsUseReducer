import React from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../PokemonContext'

// PokemonInfo component to display selected pokemon
const PokemonInfo:React.FunctionComponent = () => {

  const { state } = useContext(PokemonContext)

  return (
    <div>
      <h2>Selected Pokemon</h2>
      {state.selectedPokemon && (
        <div>
            <h3>{state.selectedPokemon.name.english}</h3>
            <table>
              <tbody>
                {Object.entries(state.selectedPokemon.base).map(([key, value]) => 
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
}
    
export default PokemonInfo