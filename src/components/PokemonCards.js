import "./PokemonCards.css"
import {Link} from "react-router-dom";

const PokemonCards = (props) => {

  return(
    <Link to={`/PokeDescription/${props.PokeId}`} className={"PokeCardContainer"} >
      <div className={"img"}>
        <img src={props.PokemonImg} alt={props.alt} className={"PokeImgCard"}/>
      </div>
      <div>
        <h1 className={"PokemonName"}>{props.PokemonName}</h1>
      </div>
    </Link>
  )
}; export default PokemonCards