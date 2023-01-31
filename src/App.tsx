import './App.css'

function App() {

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
          <tr>
            <td>Poki</td>
            <td>this, that</td>
          </tr>
          <tr>
            <td>Poki 2</td>
            <td>this2, that2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
