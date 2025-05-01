import { useState } from "react";
import CardDetail from './CardDetail.jsx';

const Cards = ({ pokemons }) => {


  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onPokemonClick = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setSelectedPokemon(data);
  }

  // console.log(selectedPokemon)


  return (
    <div className="cards">
      {pokemons.map((p, index) => (<div key={index} className="card" onClick={() => onPokemonClick(p.url)}>
          {p.name}
        </div>
      ))}
      {selectedPokemon && <CardDetail pokemon={selectedPokemon}></CardDetail>}
    </div>
  );
};

export default Cards;
