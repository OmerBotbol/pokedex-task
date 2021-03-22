import React, { Component, useState } from 'react'

function PokemonPreview(props) {
    const [state, setState] = useState({
        pokemonImage: ''
    });

    return (
        <li className="pokemon-preview" onClick={()=>props.handleSubmit(props.pokemon.name)}>
        {props.pokemon.name}
        <img src={props.pokemon.imgSrc} alt="" />
    </li>
    )
}

export default PokemonPreview;