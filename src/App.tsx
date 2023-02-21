// style imported from separate css file
import './App.css'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonList from './components/PokemonList'
// import context provider
import  PokemonProvider  from './PokemonContext'


function App() {
  return (
    < PokemonProvider>
      <div
        // style provided as an object to style property
        style={{
          margin: "auto",
          width: 800
        }}
      >
        <h1 className="title">Pokemons</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridGap: "2rem",
          }}
        >
          <div>
            <PokemonFilter />
            <PokemonList />
          </div>
          <PokemonInfo />
      </div>
      </div>
    </PokemonProvider> 
  )
}

export default App
