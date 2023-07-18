import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import DataProvider from "./context/DataContext";

function App() {
  const [data, setData] = useState([]);

  const pokeApi = "https://pokeapi.co/api/v2/pokemon/";

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData(pokeApi);
  }, []);

  const allState = {
    data,
    setData,
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DataProvider.Provider value={allState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider.Provider>
  );
}

export default App;
