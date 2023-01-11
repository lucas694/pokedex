import './App.css';
import PokeApi from "./components/pokeApi";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeDescription from "./components/PokemonDescricao/PokeDescription";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokeApi />} />
          <Route path="/PokeDescription/:id" element={<PokeDescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
