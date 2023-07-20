import { useEffect, useState } from "react";
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
    <div className="d-flex justify-content-center mt-4">
      <div className="d-flex" style={{ width: "30rem" }}>
        <img
          className="p-4"
          style={{ width: "22rem" }}
          src={pokemon?.sprites.other.dream_world.front_default}
          alt={`Pokemon${pokemon?.name}`}
        />
        <div className="text-center">
          <h3>{pokemon?.name}</h3>
          <div className="text-start">
            <ul>
              <li>
                Hp: <span>{pokemon?.stats[0].base_stat}</span>
              </li>
              <li>
                Attack: <span>{pokemon?.stats[1].base_stat}</span>
              </li>
              <li>
                Defense: <span>{pokemon?.stats[2].base_stat}</span>
              </li>
              <li>
                Special-Attack: <span>{pokemon?.stats[3].base_stat}</span>
              </li>
              <li>
                Special-Defence: <span>{pokemon?.stats[4].base_stat}</span>
              </li>
              <li>
                Speed: <span>{pokemon?.stats[5].base_stat}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokemon;
