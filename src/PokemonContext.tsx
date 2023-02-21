import React from 'react'
import { useReducer, useEffect, createContext } from 'react'
import Pokemon from './pokemonInterface'


/* THIS CONTEXT FILE HANDLES ALL FUNCTIONS CONCERNING STATE */

// create state type
type StateType = {
  pokemons: Pokemon[] | null,
  filter: string,
  selectedPokemon: Pokemon | null,
}

// create action types
type ACTIONTYPE =
  { type: 'setPokemons', payload: Pokemon[] } |
  { type: 'setFilter', payload: string } |
  { type: 'setSelectedPokemon', payload: Pokemon }

// set context type
type PokemonContextType = {
  state : StateType,
  dispatch: (action:ACTIONTYPE) => void
}

// set initital state
const initialState = {
  pokemons: null,
  filter: '',
  selectedPokemon: null
}
// create context with providing initial values
// export the context, for components to import it as needed
export const PokemonContext = createContext<PokemonContextType>({
  state: initialState,
  dispatch: (action: ACTIONTYPE) => {}
})

// create context provider function
// it takes children as prop and will return them wrapped in the provider
const PokemonProvider = ({children}: {children: React.ReactNode}) => {
  // define state

  const pokemonReducer = (state: StateType, action: ACTIONTYPE) => {
    switch(action.type) {
      case 'setPokemons':
        return {...state, pokemons: action.payload }
      case 'setFilter':
        return {...state, filter: action.payload }
      case 'setSelectedPokemon':
        return {...state, selectedPokemon: action.payload }
      default:
        throw new Error()
    }
  }

  const [ state, dispatch ] = useReducer(pokemonReducer, initialState)

    // use useEffect() to get pokemons when the component mounts
    useEffect(() => {
      fetch('./pokemons.json')
      .then(response => response.json())
      .then(data => dispatch({type: 'setPokemons', payload: data}))
    }, [])

    // return children wrapped in the provider
    // by setting up the Provider and its value prop here
    // all aspects of context are handled here
    // which keeps the App component simple
    return (
      < PokemonContext.Provider value={{
          state,
          dispatch
        }}>
          {children}
      </PokemonContext.Provider>
    )
 
}

// export the provider created
export default PokemonProvider