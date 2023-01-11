import "./PokemonStats.css"

const StatNameDictionary = {
  "hp": "HP",
  "attack": "Attack",
  "defense": "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  "speed": "Speed",
}
const StatColorDictionary = {
  "hp": "#fc4646",
  "attack": "#5ec039",
  "defense": "#f1c94b",
  "special-attack": "#006d94",
  "special-defense": "#e88e20",
  "speed": "#119b9b",
}
const PokemonStats = (props) => {
  const pokemonData = props.PokeDate;
  //Pokemon Stats
  const StatsName = pokemonData.stats?.map((stats) => stats.stat.name);
  const StatsValue = pokemonData.stats?.map((stats) => stats.base_stat);



    console.log(pokemonData)

    const AllStats = [
    {Name: StatNameDictionary.hp, Value: StatsValue[0] , Color: StatColorDictionary.hp},
    {Name: StatNameDictionary.attack, Value: StatsValue[1], Color: StatColorDictionary.attack},
    {Name: StatNameDictionary.defense, Value: StatsValue[2], Color: StatColorDictionary.defense},
    {Name: StatNameDictionary["special-attack"], Value: StatsValue[3], Color: StatColorDictionary["special-attack"]},
    {Name: StatNameDictionary["special-defense"], Value: StatsValue[4], Color: StatColorDictionary["special-defense"]},
    {Name: StatNameDictionary.speed, Value: StatsValue[5], Color: StatColorDictionary.speed},
  ]
  return(
    <div>
      {AllStats.map((stats) => (
        <div className={"StatsContainer"}>
          <span className={"StatsNameSec"}>
            {stats.Name}
          </span>
          <span className={"StatsValueSec"}>
            {stats.Value}
          </span>
          <div className={"BarContainer "}>
            <div className={"Bar"} style={{width: `${stats.Value}%`, backgroundColor: `${stats.Color}`}}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
;export default PokemonStats