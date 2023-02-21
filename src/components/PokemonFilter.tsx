import React from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../PokemonContext'


const PokemonFilter: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(PokemonContext) 
  return(
    <input 
      type="text" 
      value={state.filter} 
      onChange={(event) => dispatch({type: 'setFilter', payload: event.target.value}) }>      
    </input>
  )
}

export default PokemonFilter