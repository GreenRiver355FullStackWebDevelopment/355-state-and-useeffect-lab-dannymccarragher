import { useState } from "react";
import CardDetail from './CardDetail.jsx';

const Cards = ({ pokemons, page}) => {


  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onPokemonClick = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setSelectedPokemon(data);
  }

  
  const renderPokemon = [];

  for(let i = page[0]; i < page[1] && i < pokemons.length; i++){
    renderPokemon.push(
      <div className="card" onClick={() => onPokemonClick(pokemons[i].url)}>
        {pokemons[i].name}
      </div>
    )
  }

  // console.log(pokemons);
  // console.log(page);


  // console.log(selectedPokemon)


  return (
    <div className="cards">
      {renderPokemon}
      {selectedPokemon && <CardDetail pokemon={selectedPokemon}></CardDetail>}
    </div>
  );
};

export default Cards;
