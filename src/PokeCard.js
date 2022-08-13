import React from "react";
import './PokeCard.css'

const PokeCard = (props) =>{
    const name = props.name
    const img = props.img
    const type = props.type
    const exp = props.base_experience


    return(
        <div className="PokeCard">
            <h3> {name} </h3>
            <img src={img} alt="pokemon" />
            <div> Type: {type} </div>
            <div> EXP: {exp} </div>
        </div>
    )
}


export default PokeCard;

