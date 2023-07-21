import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgDefault from "../assets/404-poke-alta.webp"

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
    <div className="d-flex justify-content-center mt-4">
      <div className="d-flex">
        <img
          className="p-4"
          style={{ width: "22rem" }}
          src={pokemon?.sprites.other.dream_world.front_default || imgDefault}
          alt={`Pokemon${pokemon?.name}`}
        />
        <div className="text-center">
          <h3 className="poke-name">{pokemon?.name.replaceAll('-', ' ')}</h3>
          <div className="text-start">
            <ul>
              {pokemon?.stats?.map(({ base_stat: value, stat: { name } }) => (
                <li key={name}>{name}: <span>{value}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokemon;
