import React from 'react'
import './App.css'
import pokemons from './pokemons.json'

interface Pokemon {
  id: number,
  name: {
    english: string,
    japanese: string,
    chinese: string,
    french: string,
  },
  type: string[],
  base: {
    HP: number,
    Attack: number,
    Defense: number,
    "Sp. Attack": number,
    "Sp. Defense": number,
    Speed: number,
  }

}

const PokemonRow:React.FunctionComponent<{pokemon: Pokemon}> = ({pokemon}) => (
  <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
  </tr>
)

function App() {
  // console.log(pokemon.slice(0,3))
  return (
    <div
      style={{
        margin: "auto",
        width: 800
      }}
    >
      <h1 className="title">Pokemons</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.slice(0, 15).map(pokemon =>
            <PokemonRow key={pokemon.id} pokemon={pokemon}/> 
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
