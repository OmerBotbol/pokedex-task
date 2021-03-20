
import React, { Component } from 'react';
import PokemonPreview from './PokemonPreview';

class PokemonList extends Component {
    
    render() {
        return (
            <ul>
                {this.props.pokemons.map((pokemon, i) =><PokemonPreview key ={i} pokemon={pokemon} handleSubmit={this.props.handleSubmit}/>)}
            </ul>
        );
    }
}

export default PokemonList;