import React, { Component } from 'react'

class PokemonPreview extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonImage: ''
        }
    }

    
    render() {
        return (
            <li className="pokemon-preview" onClick={()=>this.props.handleSubmit(this.props.pokemon.name)}>
            {this.props.pokemon.name}
            <img src={this.props.pokemon.imgSrc} alt="" />
        </li>
        )
    }
}

export default PokemonPreview;