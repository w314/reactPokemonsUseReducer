import React from 'react'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'


const PokemonFilter: React.FunctionComponent = () => {
  const { filter, setFilter } = useContext(PokemonContext) 
  return(
    <input 
      type="text" 
      value={filter} 
      onChange={(event) => setFilter(event.target.value) }>      
    </input>
  )
}

export default PokemonFilter