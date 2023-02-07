import React from 'react'



const PokemonFilter: React.FunctionComponent<{
  filter: string,
  setFilter: (value: string) => void,
  }> = ({filter, setFilter}) => (
    <input type="text" value={filter} onChange={(event) => setFilter(event.target.value) }></input>
)

export default PokemonFilter