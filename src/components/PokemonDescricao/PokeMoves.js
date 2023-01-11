import "./PokeMoves.css";
import {useEffect, useState,} from "react";
import axios from "axios";
import {pokemonTypesColors} from "../Utilities";

const PokeMoves = (props) => {
  const pokemonData = props.PokeDate;
  //Pokemon Moves
  const MovesName = pokemonData.moves?.map((moves) => moves.move.name);
  const MovesUrl = pokemonData.moves?.map((moves) => moves.move.url);
  const [pokemonMovesTypes, setPokemonMovesTypes] = useState([]);

  useEffect(() => {
    const GetMovesTypes = () => {
      const Url =[]
      for (let i = 0; i < MovesUrl.length; i++) {
        Url.push(MovesUrl[i]);
      }
      let response = axios.all(Url.map((Url) => axios.get(Url))).then((response) => setPokemonMovesTypes(response.map((response) => response.data.type.name)));
      //Set type name moves
    }
    GetMovesTypes();
  }, [MovesUrl]);

  return(
    <div className={"MovesContainer"}>
      <div className={"MovesContent"}>
        {MovesName.map((moves, index) => (
          <div className={`MoveValue`}
               style={{backgroundColor: `${pokemonTypesColors[pokemonMovesTypes[index]]}`}}>
            <span className={`MoveName`}>
              {moves}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
};export default PokeMoves