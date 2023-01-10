import axios from 'axios';
import {useState, useEffect} from "react";
import PokemonCards from "./PokemonCards";
import "./PokeApi.css"

const PokeApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () =>{
    let Url = [];
    for (let i = 1; i <= 151; i++) {
      Url.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    let response = axios.all(Url.map((Url) => axios.get(Url))).then((response) => setPokemon(response));
  };
  console.log(pokemon);
  {/*pokemon.data.sprites.other.official-artwork.front_default*/}
  let artwork = pokemon.map((pokemon) => pokemon.data.sprites.other["official-artwork"].front_default);
  return(
    <div className={"PokeContainer"}>
      {pokemon.map((pokemon) => (

        <PokemonCards key={pokemon.data.id}
                      PokemonName={pokemon.data.name}
                      PokemonImg={artwork[pokemon.data.id - 1]}
                      PokeId={pokemon.data.id}
        />
        ))}
    </div>
  )
};export default PokeApi