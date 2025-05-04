import { Grid, Button, Typography, Card } from '@mui/material';

const CardDetail = ({ pokemon }) => {

  // prevent the component from rendering until the types data is avalaible
  if (!pokemon.types || pokemon.types.length === 0) return null;

    return (
      <Card className="card-detail" sx={{
        width: "50%",
        marginTop: 5,
        marginLeft: 45
        
      }}>
        <h2>{pokemon.name}</h2>
        <p>Height: {pokemon.height} cm</p>
        <p>Weight: {pokemon.weight} kg</p>
        {/* type is nested within types object
         Get first index */}
        <p>Type: {pokemon.types[0].type.name}</p>
        </Card>
    );
  };
  export default CardDetail;
  