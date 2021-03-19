import React, { Component } from 'react';

class PokemonDetails extends Component {
    render() {
        return (
            <ul className="details">
                <li>Name: {this.props.pokemon.name}</li>
                <li>Height {this.props.pokemon.height}</li>
                <li>Weight: {this.props.pokemon.weight}</li>
                <li>Types: {this.props.pokemon.types}</li>
            </ul>
        );
    }
}

export default PokemonDetails;