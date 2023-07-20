import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={pokemon?.sprites.other.dream_world.front_default}
          alt={`Pokemon${pokemon?.name}`}
        />
        <Card.Body>
          <Card.Title>{pokemon?.name}</Card.Title>
          <Card.Text>
            {pokemon?.types.map((type) => (
              <span key={type?.type.name}>{type?.type.name}</span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default Pokemon;
