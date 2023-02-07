import React from 'react'

// PokemonInfo component to display selected pokemon
const PokemonInfo:React.FunctionComponent<{
  // use Record to type index and value in properties received
  // otherwise base[key] will give error message that string cannot index base
  name: Record<string, string>,
  base: Record<string, number>
  // use {} object destructuring when listing parameters
  }> = ({name, base}) => (
    <div>
      <h3>{name.english}</h3>
      <table>
        <tbody>
          {Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)


export default PokemonInfo