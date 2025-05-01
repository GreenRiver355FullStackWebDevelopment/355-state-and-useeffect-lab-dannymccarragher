import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards.jsx';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon();
  },[]);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();

    setPokemon(data.results);
  }


  


  return (
    <>
     <div className='App'>
      <h1>Pokemon List</h1>
      <div className='main-container'></div>
        <Cards pokemons={pokemon}></Cards>
     </div>
    </>
  )
}

export default App
