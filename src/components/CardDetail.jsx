const CardDetail = ({ pokemon }) => {

  // prevent the component from rendering until the types data is avalaible
  if (!pokemon.types || pokemon.types.length === 0) return null;

    return (
      <div className="card-detail">
        <h2>{pokemon.name}</h2>
        <p>Height: {pokemon.height} cm</p>
        <p>Weight: {pokemon.weight} kg</p>
        {/* type is nested within types object
         Get first index */}
        <p>Type: {pokemon.types[0].type.name}</p>
        </div>
    );
  };
  export default CardDetail;
  