import React, { Component } from 'react';
import Type from './Type'

class PokemonDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc:"",
            hover: false
        }
        this.switchImg = this.switchImg.bind(this)
    }

    componentDidUpdate(){
        if(this.state.imgSrc === "" && this.props.pokemon){
            this.setState({imgSrc: this.props.pokemon.sprites.front})
        }
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
    render() {
        if(this.props.pokemon) {
            return (
                <ul className="details">
                    <li>Name: {this.props.pokemon.name}</li>
                    <li>Height {this.props.pokemon.height}</li>
                    <li>Weight: {this.props.pokemon.weight}</li>
                    <li>Types: {this.props.pokemon.types.map((type, i)=><Type key={i} type={type}/>)}</li>
                    <img src={this.state.imgSrc} alt={this.props.pokemon.name} onMouseEnter={()=>this.switchImg()} onMouseOut={()=>this.switchImg()}/>
            </ul>);
        } 
        return this.renderEmpty();
    }
}

export default PokemonDetails;