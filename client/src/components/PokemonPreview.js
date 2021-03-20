import React, { Component } from 'react'
import axios from 'axios';

class PokemonPreview extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonImage: ''
        }
    }
    
    componentDidMount() {
        axios.get(`/api/pokemon/${this.props.pokemon}`).then((pokemon)=>{
            this.setState({pokemonImage: pokemon.data.sprites.smallSprite})
        })
    }

    
    render() {
        return (
            <li className="pokemon-preview" onClick={()=>this.props.handleSubmit(this.props.pokemon)}>
            {this.props.pokemon}
            <img src={this.state.pokemonImage} alt="" />
        </li>
        )
    }
}

export default PokemonPreview;