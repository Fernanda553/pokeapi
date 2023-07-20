import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DataProvider from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Pokemones() {
  const { data } = useContext(DataProvider);
  const [pokemon, setPokemon] = useState("Pokemones");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (pokemon === "Pokemones") return null;
    navigate(`/pokemones/${pokemon}`);
  };
  return (
    <>
      <h1>Selecciona tu Pokemón</h1>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            defaultValue={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          >
            <option disabled>Pokemones</option>
            {data.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Pokemones;
