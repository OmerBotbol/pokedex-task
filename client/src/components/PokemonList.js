import React from 'react';

function PokemonList(props) {
    return (
        <li onClick={()=>props.handleSubmit(props.pokemon)}>
            {props.pokemon}
        </li>
    );
}

export default PokemonList;