import "./DescriptionHeader.css"
import {useEffect} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";


const DescriptionHeader = ( props)=>{
  const PokeDate = props.PokeDate;
  const id = props.id.id ;
  const IdValidate = id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`;
  const FixName = PokeDate.name.charAt(0).toUpperCase() + PokeDate.name.slice(1)
  const TakeType = PokeDate.types?.map((type) => type.type.name) ;
  const TypeName = TakeType.map((type) => type.charAt(0).toUpperCase() + type.slice(1))
console.log(TypeName)
  return(
    <div className={"DescHeaderContainer"}>
      <div className={"DescHeaderMain"}>
        <div className={"DescHeaderName"}>
          <Link to={"/"}>
            <AiOutlineArrowLeft className={"ArrowBackIcon"}/>
          </Link>
          <h1 className={"PokeNameHeader"}>{FixName}</h1>
        </div>
      <span className={"HeaderId"}>{IdValidate}</span>
      </div>
      <div className={"DescHeaderTypes"}>
        {TypeName.map((type)=>{
          return(
            <span className={"HeaderTypeNames"}>{type}</span>
          )
        })}
      </div>
    </div>
  )
}
;export default DescriptionHeader