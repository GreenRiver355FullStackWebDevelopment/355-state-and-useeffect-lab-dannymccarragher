import { useState } from "react";
import CardDetail from './CardDetail.jsx';
import { Grid, Button, Typography } from '@mui/material';


const Cards = ({ pokemons, page }) => {


  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onPokemonClick = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setSelectedPokemon(data);
  }


  const renderPokemon = [];

  for (let i = page[0]; i < page[1] && i < pokemons.length; i++) {
    renderPokemon.push(
      <Button className="card" onClick={() => onPokemonClick(pokemons[i].url)} sx={{ color: 'white', backgroundColor: "darkgray", width: '95%', margin: .5, margin: 1 }} style={{ cursor: "pointer" }}>
        {pokemons[i].name}
      </Button>
    )
  }

  // console.log(pokemons);
  // console.log(page);


  // console.log(selectedPokemon)


  return (
    <>
      <Grid className="cards" sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', backgroundColor: 'black', }}>
        {renderPokemon}
      </Grid>
      {selectedPokemon && <CardDetail pokemon={selectedPokemon}></CardDetail>}
    </>
  );
};

export default Cards;
