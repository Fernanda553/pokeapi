import { useEffect, useState } from "react";

function Home() {
  const [name, setName] = useState("pikachu");
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
      <div className="text-center m-3 p-2">
        <h1>Bienvenido maestro Pokemón</h1>
        <img
          onClick={() => setName("bulbasaur")}
          src={pokemon?.sprites.other.dream_world.front_default}
          alt="pikachu"
        />
      </div>
    </>
  );
}

export default Home;
