import './App.css'
import pokemons from './pokemons.json'

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
            <tr key={pokemon.id}>
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(', ')}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
