import React, { Component } from 'react';
import Type from './Type'
import axios from 'axios'

class PokemonDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc:this.props.pokemon.sprites.front,
            hover: false,
            catched: false,
        }
        this.switchImg = this.switchImg.bind(this)
    }

    componentDidMount() {
        this.pokemonInCollection();
    }

    switchImg() {
        if(this.state.hover) {
            return this.setState({imgSrc: this.props.pokemon.sprites.front, hover: false});
        }
        return this.setState({imgSrc: this.props.pokemon.sprites.back, hover: true});
    }

    async pokemonInCollection() {
        const {data: collection} = await axios.get("/api/collection");
        console.log("collection: ", collection);
        const isInCollection = collection.some(pokemon => pokemon.id === this.props.pokemon.id);
        this.setState({catched: isInCollection});
    }

    async catch() {
        await axios.post(`/api/collection/catch/${this.props.pokemon.name}`);
        await this.pokemonInCollection();
    }
    async release() {
        await axios.delete(`/api/collection/release/${this.props.pokemon.name}`);
        await this.pokemonInCollection();
    }
    async changePokemonLoction(name) {
        if(this.state.catched) {
            await axios.delete(`/api/collection/release/${name}`)
        }
        else{
            await axios.post(`/api/collection/catch/${name}`)
        }
        await this.pokemonInCollection();
    }

    render() {
        return (
            <ul className="details">
                <li>Name: {this.props.pokemon.name}</li>
                <li>Height {this.props.pokemon.height}</li>
                <li>Weight: {this.props.pokemon.weight}</li>
                <li>Types: {this.props.pokemon.types.map((type, i)=><Type key={i} showType={()=>this.props.showType(type)} type={type}/>)}</li>
                <img src={this.state.imgSrc} alt={this.props.pokemon.name} onMouseEnter={()=>this.switchImg()} onMouseOut={()=>this.switchImg()}/>
                <button onClick={()=>{this.state.catched ? this.release() : this.catch()}}>{this.state.catched ? "Release" : "Catch"}</button>
        </ul>);
    }
}

export default PokemonDetails;