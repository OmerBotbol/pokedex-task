import React, { Component } from 'react';
import Type from './Type'
import axios from 'axios'

class PokemonDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc:"",
            hover: false,
            catched: false,
        }
        this.switchImg = this.switchImg.bind(this)
    }

    componentDidUpdate(){
        if(this.state.imgSrc === "" && this.props.pokemon){
            this.setState({imgSrc: this.props.pokemon.sprites.front})
        }
        this.pokemonInCollection();
    }

    renderEmpty() {
        return (
            <ul className="details">
                <li>Name:</li>
                <li>Height:</li>
                <li>Weight:</li>
                <li>Types: </li>
            </ul>
        );
    }

    switchImg() {
        if(this.state.hover) {
            return this.setState({imgSrc: this.props.pokemon.sprites.front, hover: false});
        }
        return this.setState({imgSrc: this.props.pokemon.sprites.back, hover: true});
    }
    async pokemonInCollection(name) {
        const {data: collection} = await axios.get("/api/collection");
        const isInCollection = collection.some(pokemon => pokemon.id === this.props.pokemon.id); 
        this.setState({catched: isInCollection});
    }

    async changePokemonLoction(name) {
        if(this.state.catched){
            axios.post(`/api/collection/catch/${name}`)
        }
        else{
            axios.delete(`/api/collection/release/${name}`)
        }
    }

    render() {
        if(this.props.pokemon) {
            return (
                <ul className="details">
                    <li>Name: {this.props.pokemon.name}</li>
                    <li>Height {this.props.pokemon.height}</li>
                    <li>Weight: {this.props.pokemon.weight}</li>
                    <li>Types: {this.props.pokemon.types.map((type, i)=><Type key={i} type={type}/>)}</li>
                    <img src={this.state.imgSrc} alt={this.props.pokemon.name} onMouseEnter={()=>this.switchImg()} onMouseOut={()=>this.switchImg()}/>
                    <button onClick={()=>{this.changePokemonLoction(this.props.pokemon.name)}}>{this.state.inCollection ? (<>Release</>) : (<>Catch</>)}</button>
            </ul>);
        } 
        return this.renderEmpty();
    }
}

export default PokemonDetails;