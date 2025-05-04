import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards.jsx';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([0, 20]);

  useEffect(() => {
    fetchPokemon();
  },[page]);

  const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await response.json();

    setPokemon(data.results);
  }

  // keep going to next page until reaching limit of 1000
  const nextPage = () => {
    if(page[0] <= 1000){
      setPage(prev => [prev[0] + 20, prev[1] + 20]);
    }
  }

  const backPage = () => {
    if (page[0] >= 20) {
      setPage(prev => [prev[0] - 20, prev[1] - 20]);
    } else {
      setPage([0, 20]);
    }
  }

  return (
    <>
     <div className='App'>
      <h1>Pokemon List</h1>
      <div className='main-container'></div>
        <Cards pokemons={pokemon} page={page}></Cards>
        <button onClick={backPage} disabled={page[0] === 0}>Back</button>
        <button onClick={nextPage}>Next</button>
     </div>
    </>
  )
}

export default App
