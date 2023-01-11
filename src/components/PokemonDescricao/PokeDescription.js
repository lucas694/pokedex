import "./PokeDescription.css"
import {useEffect, useState,} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import PokemonStats from "./PokemonStats";
import PokeMoves from "./PokeMoves";
import {pokemonTypesColors} from "../Utilities";
import DescriptionHeader from "./DescriptionHeader";

const PokeDescription = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const id = useParams();
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(true);
  const [showMoves, setShowMoves] = useState(null);

  const changeStats = () => {
    setShowStats(true);
    setShowMoves(null);
  }
  const changeMoves = () => {
    setShowMoves(true);
    setShowStats(null);
  }
  //Pokemons Types
  const TakeType = pokemonData.types?.map((type) => type.type.name);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id ? id.id : null}`)
      .then(response => {
        setPokemonData(response.data);
        setLoading(false)
      })
      .catch(error => console.error(error));

  }, [id]);

  if (loading) return(
    <div className="loading">
      <h1>Carregando...</h1>
    </div>
  )
  const MainImgArtwork = pokemonData.sprites.other["official-artwork"].front_default;


  return (
    <div className={"PokeDescriptionContainer"}
         style={{backgroundColor: `${pokemonTypesColors[TakeType[0]]}`}}>
      <DescriptionHeader id={id} PokeDate={pokemonData}/>
      <div className={"ImgDIv"}>
        <div className={"imgCOntent"}>
          <img src={MainImgArtwork} alt={pokemonData.name} className={"MainImg"}/>
        </div>

      </div>
      <div className={"DescriptionSect"} >
        <section className={"DescriptBtnSec"}>
          <button className={"BtnDesc"} onClick={changeStats}
                  style={{borderColor: `${pokemonTypesColors[TakeType[0]]}`}}>
          BASESTATS</button>
          <button className={"BtnDesc"} onClick={changeMoves}
                  style={{borderColor: `${pokemonTypesColors[TakeType[0]]}`}}>
          MOVES</button>
        </section>
        <section className={"DescriptionStats"}>
          {showStats && <PokemonStats PokeDate={pokemonData}/>}
          {showMoves && <PokeMoves PokeDate={pokemonData}/>}
        </section>
      </div>
    </div>
  );
};export default PokeDescription;