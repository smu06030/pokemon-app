import React, { useState } from 'react'
import Dashboard from '../components/Layout/Dashboard'
import PokemonList from '../components/Layout/PokemonList'
import MOCK_DATA from '../mocks/mock'

const Dex = () => {
  const [allPokemon, setAllPokemon] = useState(MOCK_DATA)
  return (
    <>
      <Dashboard />
      <PokemonList allPokemon= {allPokemon}/>
    </>
  )
}

export default Dex