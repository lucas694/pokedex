import './App.css';
import PokeApi from "./components/pokeApi";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokeApi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
