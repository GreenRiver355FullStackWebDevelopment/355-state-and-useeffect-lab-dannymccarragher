import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards.jsx';
import { Grid , Button, Typography } from '@mui/material';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([0, 20]);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await response.json();

    setPokemon(data.results);
  }

  // keep going to next page until reaching limit of 1000
  const nextPage = () => {
    if (page[0] <= 1000) {
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
    <Grid sx={{ backgroundColor: 'red', textAlign: 'center', padding: 4, width: '100%', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
        Pokémon List
      </Typography>
      <Cards pokemons={pokemon} page={page} />
      <Button onClick={backPage} disabled={page[0] === 0} sx={{ backgroundColor: 'gray', color: 'white', margin: 1 }}>Back</Button>
      <Button onClick={nextPage} sx={{ bgcolor: 'yellow', color: 'black' }}>Next</Button>
    </Grid>
  );
}

export default App
