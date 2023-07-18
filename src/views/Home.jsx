/* import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataProvider from "../context/DataContext"; */

function Home() {
  /* const { data, setData } = useContext(DataProvider);
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  const handlerSubmit = (e, id) => {
    e.preventDefault();
    const selectPokemon = data.findIndex((image) => image.id === id);
    data[selectPokemon].liked = !data[selectPokemon].liked;

    setData([...data]);

    if (data === "") return null;
    navigate("/pokemon");
  }; */

  return (
    <>
      {/*  <Form onSubmit={handlerSubmit}>
        <Form.Select
          className="text-center p-2"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        >
          {data.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Form.Select>
        <Button type="submit" variant="outline-info" className="m-4">
          Search
        </Button>
      </Form> */}
    </>
  );
}

export default Home;
