import "./PokemonCards.css"

const PokemonCards = (props) => {

  return(
    <div className={"PokeCardContainer"}>
      <div className={"img"}>
        <img src={props.PokemonImg} alt={props.alt} className={"PokeImgCard"}/>
      </div>
      <div>
        <h1 className={"PokemonName"}>{props.PokemonName}</h1>
      </div>

    </div>
  )
}; export default PokemonCards